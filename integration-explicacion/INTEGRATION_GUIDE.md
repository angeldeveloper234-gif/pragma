# Guía de Integración: LexFlow Engine 🤖

Esta guía explica paso a paso cómo integrar el chatbot en un sitio web externo y cómo configurar el backend necesario en **Supabase** y **n8n**.

## 1. Integración en el Sitio Web (Frontend)

El chatbot se carga como un widget independiente.

### Paso A: Cargar Recursos
Agrega estas líneas en el HTML de tu sitio web:

```html
<!-- 1. Estilos Globales -->
<link rel="stylesheet" href="https://chatbot-website-law.netlify.app/lexflow.css">

<!-- 2. Motor del Chat -->
<script src="https://chatbot-website-law.netlify.app/lexflow.iife.js"></script>
```

### Paso B: Inicialización (Script)
Inicializa el chatbot. El parámetro `id` es fundamental, ya que define qué configuración de la base de datos se cargará.

```javascript
window.LexFlow.init({
  id: 'mi-despacho-legal', // Este ID debe existir en la tabla lexflow_configs
  metadata: {
    página: 'landing-servicios-civiles',
    idioma: 'es'
  },
  onReady: () => {
    console.log('Chatbot LexFlow listo');
  }
});
```

---

## 2. Configuración en Supabase (Backend)

Para que el motor funcione, debes crear las siguientes tablas en tu proyecto de Supabase. El motor las usará para cargar la configuración dinámica.

### Tabla: `lexflow_configs` (CRITICAL)
Esta tabla define la apariencia y comportamiento de cada bot.

| Columna | Tipo | Descripción |
| :--- | :--- | :--- |
| `client_id` (PK) | `text` | **ID Único.** El mismo que usas en el `init({ id: '...' })`. |
| `bot_name` | `text` | Nombre interno del bot. |
| `ui_title` | `text` | Título que verá el usuario en la cabecera del chat. |
| `ui_subtitle` | `text` | Subtítulo (ej: "Online ahora"). |
| `ui_avatar_url` | `text` | URL de la imagen de perfil del bot. |
| `ui_primary_color`| `text` | Color HEX principal (ej: `#0f3460`). |
| `ui_gradient` | `text` | Clase Tailwind para el fondo (ej: `from-[#0f3460] to-[#1a1a2e]`). |
| `msg_welcome` | `text` | Primer mensaje que envía el bot automáticamente. |
| `webhook_url` | `text` | URL del Webhook de n8n que recibirá los mensajes. |
| `feat_voice` | `boolean`| Habilita/Deshabilita notas de voz. |
| `feat_files` | `boolean`| Habilita/Deshabilita subida de documentos. |

> [!TIP]
> Puedes encontrar el script SQL completo para crear todas las tablas (Leads, Configs, Logs) en el archivo [schema.sql](schema.sql).

---

## 3. Conexión con n8n

El motor envía cada mensaje del usuario a una URL de Webhook. La estructura que recibe n8n es un `POST` con `multipart/form-data`:

### Payload recibido:
```json
{
  "text": "Hola, necesito ayuda legal",
  "sessionId": "uuid-de-sesion-temporal",
  "visitorId": "uuid-de-navegador-persistente",
  "clientId": "mi-despacho-legal",
  "metadata": "{...json stringificado...}"
}
```

**Tu flujo de n8n debe:**
1. Procesar el mensaje con una IA (ej: OpenAI Node).
2. Devolver una respuesta JSON con este formato:
   ```json
   {
     "text": "¡Hola! Con gusto puedo ayudarte...",
     "suggestions": ["¿Qué costo tiene?", "Hablar con un humano"]
   }
   ```

---

## 4. Analíticas Automáticas
El motor intentará registrar eventos de analíticas en las tablas `page_views` y `sessions` de Supabase si el motor detecta las variables de entorno o si se pasan en el `init`.

- **`page_views`**: Registra qué URL está visitando el usuario.
- **`sessions`**: Registra cuándo inicia y termina la actividad de un asistente.

---

## 5. Troubleshooting (Solución de problemas)

*   **¿El chat no carga?**: Revisa la consola de desarrollador (F12). Asegúrate de que el `client_id` que pasaste en el `init` exista exactamente igual en la columna `client_id` de la tabla `lexflow_configs`.
*   **¿No se envían mensajes?**: Verifica que la `webhook_url` en la base de datos sea correcta y que tu flujo de n8n esté activo.
*   **¿Error de CORS?**: Los scripts de Netlify están configurados para permitir acceso desde cualquier origen, pero asegúrate de que tu Supabase también acepte peticiones desde tu dominio.
