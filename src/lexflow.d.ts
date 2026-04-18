interface LexFlowOptions {
    id: string;
    metadata: Record<string, any>;
    webhookUrl?: string;
    sessionId?: string;
    container?: HTMLElement;
    supabaseUrl?: string;
    supabaseKey?: string;
    onReady?: () => void;
}

interface LexFlowConfig {
    webhookUrl?: string;
    [key: string]: any;
}

interface Window {
    LexFlow: {
        init: (options: LexFlowOptions) => Promise<void>;
    };
}
