'use client';

import { useUser } from "@/context/UserContext";
import { useMemo } from "react";
import { config } from "@/config";
import LegalBotWidget from "@/components/LegalBotWidget";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export function ChatbotManager() {
    const { name, email, clientId } = useUser();
    
    // Check if we are in a browser environment to avoid SSR errors with URLSearchParams
    const metadata = useMemo(() => {
        if (typeof window === 'undefined') return {};
        
        const query = new URLSearchParams(window.location.search);
        return {
            clientId,
            source: query.get("utm_source") || "direct",
            medium: query.get("utm_medium") || "organic",
            campaign: query.get("utm_campaign") || "none",
            user_name: name || undefined,
            user_email: email || undefined,
            origin: "landing_page"
        };
    }, [clientId, name, email]);

    return (
        <>
            <WhatsAppWidget />
            {/* 
              * RETIRADO TEMPORALMENTE / NO BORRAR:
              * El chatbot de IA (LegalBotWidget que carga el CDN de LexFlow) ha sido desactivado
              * temporalmente por solicitud. Por favor, NO borrar este código ni el archivo, 
              * solo se mantiene comentado para poder reactivarlo fácilmente en el futuro.
              *
            <LegalBotWidget
                botId={config.landingClientId}
                metadata={metadata}
                supabaseUrl={config.supabase.url}
                supabaseKey={config.supabase.anonKey}
            />
            */}
        </>
    );
}
