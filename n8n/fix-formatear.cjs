const fs = require('fs');

// Read the workflow file  
const filePath = 'workflow-villalba-v1.3.json';
const raw = fs.readFileSync(filePath, 'utf8');

// Try to find the Formatear Respuesta node and fix its jsCode
// Since the JSON is corrupted, we'll rebuild it from scratch

// First, let's extract the valid structure by parsing what we can
// We know the structure, so let's rebuild the entire file

const formatearCode = [
  "const ctx = $('Code: Inject Context').first().json;",
  "const raw = $input.first().json.output || $input.first().json.text || '';",
  "let text = '', suggestions = [], ld = {}, llmSummary = '';",
  "",
  "try {",
  "  let c = String(raw).trim();",
  "  if (c.includes('```json')) {",
  "    const m = c.match(/```json\\s*([\\s\\S]*?)\\s*```/);",
  "    if (m) c = m[1].trim();",
  "  }",
  "  if (c.startsWith('{')) {",
  "    const p = JSON.parse(c);",
  "    text = p.text || '';",
  "    suggestions = p.suggestions || [];",
  "    ld = p.lead_data || {};",
  "    llmSummary = p.ai_summary || '';",
  "  } else {",
  "    text = c;",
  "  }",
  "} catch(e) {",
  "  text = String(raw);",
  "}",
  "",
  "if (!suggestions.length) {",
  "  suggestions = ['Conocer servicios', 'Tengo un caso legal', 'Consulta contable'];",
  "}",
  "",
  "const newName = String(ld.nombre_completo || '').trim();",
  "const newWhatsapp = String(ld.whatsapp || '').trim();",
  "const existingName = String(ctx.lead_name || '').trim();",
  "const existingWhatsapp = String(ctx.lead_whatsapp || '').trim();",
  "",
  "const finalName = newName || existingName;",
  "const finalWhatsapp = newWhatsapp || existingWhatsapp;",
  "const hasName = !!finalName;",
  "const hasWhatsapp = !!finalWhatsapp;",
  "const hasAllData = hasName && hasWhatsapp;",
  "",
  "const previousStatus = String(ctx.lead_status || '').trim();",
  "let newStatus = '';",
  "let embudoDetalle = String(ctx.embudo_detalle || '').trim();",
  "",
  "const manualStatuses = ['\ud83d\udcde Contactado', '\ud83d\udcc5 Agendado', '\ud83c\udfc6 Convertido'];",
  "if (manualStatuses.includes(previousStatus)) {",
  "  newStatus = previousStatus;",
  "} else if (hasAllData) {",
  "  newStatus = '\u2705 Lead Completo';",
  "  if (previousStatus !== '\u2705 Lead Completo') {",
  "    embudoDetalle = (embudoDetalle ? embudoDetalle + ' \u2192 ' : '') + 'Datos completos';",
  "  }",
  "} else if (hasName || hasWhatsapp) {",
  "  newStatus = '\ud83d\udccb Datos Parciales';",
  "  const partial = hasName ? 'nombre' : 'whatsapp';",
  "  if (previousStatus !== '\ud83d\udccb Datos Parciales') {",
  "    embudoDetalle = (embudoDetalle ? embudoDetalle + ' \u2192 ' : '') + 'Proporcion\u00f3 ' + partial;",
  "  }",
  "} else {",
  "  newStatus = previousStatus || '\ud83d\udcac Chatbot';",
  "  if (!previousStatus) {",
  "    embudoDetalle = 'Inici\u00f3 conversaci\u00f3n en chatbot web';",
  "  }",
  "}",
  "",
  "const now = new Date();",
  "const mxOffset = -6;",
  "const utc = now.getTime() + (now.getTimezoneOffset() * 60000);",
  "const mxTime = new Date(utc + (3600000 * mxOffset));",
  "const pad = (n) => String(n).padStart(2, '0');",
  "const fd = pad(mxTime.getDate()) + '/' + pad(mxTime.getMonth() + 1) + '/' + mxTime.getFullYear();",
  "const ft = pad(mxTime.getHours()) + ':' + pad(mxTime.getMinutes());",
  "const fdt = fd + ' ' + ft;",
  "",
  "const primeraInteraccion = String(ctx.primera_interaccion || fdt);",
  "const newMsgCount = (parseInt(String(ctx.msg_count || 0), 10) || 0) + 1;",
  "",
  "let finalSummary = '';",
  "const llmStr = String(llmSummary || '').trim();",
  "if (llmStr.length > 10) {",
  "  finalSummary = llmStr;",
  "} else if (ctx.current_ai_summary) {",
  "  finalSummary = String(ctx.current_ai_summary);",
  "} else {",
  "  finalSummary = 'Conversaci\u00f3n iniciada.';",
  "}",
  "",
  "let historial = String(ctx.current_historial || '').trim();",
  "const rawInput = String(ctx.raw_chat_input || '').trim();",
  "if (rawInput && rawInput.length > 3) {",
  "  const topicEntry = '[' + fd + ' ' + ft + '] ' + rawInput.substring(0, 120);",
  "  if (historial) {",
  "    const entries = historial.split('\\n');",
  "    entries.push(topicEntry);",
  "    historial = entries.slice(-5).join('\\n');",
  "  } else {",
  "    historial = topicEntry;",
  "  }",
  "}",
  "",
  "return [{ json: {",
  "  text: text || 'Disculpa, no pude procesar tu solicitud.',",
  "  suggestions,",
  "  action: 'general_inquiry',",
  "  intention: 'general_inquiry',",
  "  visitorId: String(ctx.visitorId || ''),",
  "  clientId: String(ctx.clientId || ''),",
  "  sessionId: String(ctx.sessionId || ''),",
  "  leadName: finalName,",
  "  leadWhatsapp: finalWhatsapp,",
  "  ai_summary: finalSummary,",
  "  status: newStatus,",
  "  embudo_detalle: embudoDetalle,",
  "  primera_interaccion: primeraInteraccion,",
  "  ultima_interaccion: fdt,",
  "  total_mensajes: newMsgCount,",
  "  historial_consultas: historial,",
  "  is_existing_lead: ctx.is_existing_lead",
  "} }];"
].join('\n');

// Now find the Formatear Respuesta node in the raw text and replace its jsCode
// We'll use a regex approach since the JSON is corrupted

// Find the node by its id
const nodeId = '2b23420b-bc95-442d-b2c7-b6c2f51ff132';

// Strategy: Find the "jsCode": " before this node ID and replace everything up to the closing quote
const idPos = raw.indexOf(nodeId);
if (idPos === -1) {
  console.error('Could not find Formatear Respuesta node ID');
  process.exit(1);
}

// Search backwards from the ID to find "jsCode": "
const beforeId = raw.substring(0, idPos);
const jsCodeKeyIdx = beforeId.lastIndexOf('"jsCode": "');
if (jsCodeKeyIdx === -1) {
  console.error('Could not find jsCode key');
  process.exit(1);
}

// Find the end of the jsCode value - look for the pattern  "\n      },\n      "id"
// The jsCode value starts after '"jsCode": "'  
const valueStart = jsCodeKeyIdx + '"jsCode": "'.length;

// Find the closing quote + the next structure
// We need to find '"\n      },\n' or similar pattern after the jsCode value
// Since the JSON is corrupted with duplicate content, let's find the node ID marker
// and work backwards to find where the jsCode value should end

// Find the text between jsCode value start and the node structure after
const afterJsCode = raw.substring(valueStart);

// The pattern after jsCode value should be: "\n      },\n      "id": "2b23420b..."
// Let's find the closing structure
const closingPattern = '"\n      },\n      "id": "' + nodeId;
const closingIdx = afterJsCode.indexOf(closingPattern);

if (closingIdx === -1) {
  // Try alternative patterns
  const alt1 = '"\n      },\n      "id": "' + nodeId;
  const alt2 = raw.indexOf('"id": "' + nodeId);
  
  if (alt2 !== -1) {
    // Find the "},\n before this id
    const beforeNodeId = raw.substring(0, alt2);
    // Go back to find the closing of jsCode
    // Look for the last occurrence of jsCode pattern
    const jsCodeEnd = beforeNodeId.lastIndexOf('"');
    
    // Replace from jsCodeKeyIdx to jsCodeEnd
    const newJsCodeValue = JSON.stringify(formatearCode);
    // newJsCodeValue includes the surrounding quotes
    
    const result = raw.substring(0, jsCodeKeyIdx) + 
                   '"jsCode": ' + newJsCodeValue +
                   raw.substring(jsCodeEnd + 1);
    
    // Validate the result
    try {
      JSON.parse(result);
      fs.writeFileSync(filePath, result, 'utf8');
      console.log('SUCCESS: File fixed and saved!');
    } catch(e) {
      console.error('Result JSON invalid:', e.message);
      // Save anyway for manual inspection
      fs.writeFileSync(filePath + '.fixed', result, 'utf8');
      console.log('Saved to .fixed file for inspection');
    }
  } else {
    console.error('Could not find closing pattern');
  }
} else {
  const newJsCodeValue = JSON.stringify(formatearCode);
  const result = raw.substring(0, jsCodeKeyIdx) + 
                 '"jsCode": ' + newJsCodeValue +
                 afterJsCode.substring(closingIdx);
  
  try {
    JSON.parse(result);
    fs.writeFileSync(filePath, result, 'utf8');
    console.log('SUCCESS: File fixed and saved!');
  } catch(e) {
    console.error('Result JSON invalid:', e.message);
    fs.writeFileSync(filePath + '.fixed', result, 'utf8');
    console.log('Saved to .fixed file for inspection');
  }
}
