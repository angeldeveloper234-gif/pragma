import { useEffect } from 'react';

interface LegalBotWidgetProps {
    botId: string;
    metadata: Record<string, any>;
    sessionId?: string;
    supabaseUrl?: string;
    supabaseKey?: string;
}

const LegalBotWidget = ({ botId, metadata, sessionId, supabaseUrl, supabaseKey }: LegalBotWidgetProps) => {
    useEffect(() => {
        // Prevent multiple script injections
        const SCRIPT_ID = 'lexflow-engine-script';
        const STYLE_ID = 'lexflow-engine-style';
        let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
        let style = document.getElementById(STYLE_ID) as HTMLLinkElement;

        const initBot = () => {
            if (window.LexFlow && !(window as any).__lexflow_initialized) {
                console.log('LegalBotWidget: Initializing LexFlow Engine...');
                window.LexFlow.init({
                    id: botId,
                    metadata: {
                        ...metadata,
                        platform: 'react-website',
                        version: '1.3'
                    },
                    onReady: () => {
                        console.log('Chatbot LexFlow listo');
                    },
                    // Optional parameters if the engine supports them via init
                    supabaseUrl,
                    supabaseKey
                });
                (window as any).__lexflow_initialized = true;
            }
        };

        // Inject Styles
        if (!style) {
            style = document.createElement('link');
            style.id = STYLE_ID;
            style.rel = 'stylesheet';
            style.href = `https://chatbot-website-law.netlify.app/lexflow.css`;
            document.head.appendChild(style);
        }

        // Inject Script
        if (!script) {
            script = document.createElement('script');
            script.id = SCRIPT_ID;
            script.src = `https://chatbot-website-law.netlify.app/lexflow.iife.js`;
            script.async = true;
            script.onload = () => {
                console.log('LegalBotWidget: Script loaded.');
                initBot();
            };
            script.onerror = (e) => console.error('LegalBotWidget: Script failed to load.', e);
            document.body.appendChild(script);
        } else if (window.LexFlow) {
            initBot();
        } else {
            // If script already exists but LexFlow NOT ready (still loading),
            // we should wait for its onload. But script.onload might have already been set.
            // Let's add an event listener just in case it's still loading.
            script.addEventListener('load', initBot);
        }

        return () => {
            if (script) {
                script.removeEventListener('load', initBot);
            }
        };
    }, [botId, JSON.stringify(metadata), sessionId, supabaseUrl, supabaseKey]);

    return null; // El widget se inyecta por fuera del árbol normal de React
};

export default LegalBotWidget;
