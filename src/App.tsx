import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Blog } from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import BlogPost from "./pages/BlogPost";
import { UserProvider, useUser } from "@/context/UserContext";
import { useEffect, useMemo } from "react";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { config } from "@/config";
import { StickyCallBar } from "@/components/features/StickyCallBar";
import LegalBotWidget from "@/components/LegalBotWidget";
import WhatsAppWidget from "@/components/WhatsAppWidget";


function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function ChatbotManager() {
    const { name, email, clientId } = useUser();
    const query = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : "");

    const metadata = useMemo(() => ({
        clientId,
        source: query.get("utm_source") || "direct",
        medium: query.get("utm_medium") || "organic",
        campaign: query.get("utm_campaign") || "none",
        user_name: name || undefined,
        user_email: email || undefined,
        origin: "landing_page"
    }), [clientId, name, email]);

    return (
        <>
            <WhatsAppWidget />
            <LegalBotWidget
                botId={config.landingClientId}
                metadata={metadata}
                supabaseUrl={config.supabase.url}
                supabaseKey={config.supabase.anonKey}
            />
        </>
    );

}

function App() {
    return (
        <UserProvider>
            <Router>
                <ScrollToTop />
                <div className="relative min-h-screen bg-[#0d0c0a] overflow-x-hidden">
                    <div className="noise-bg" />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/nosotros" element={<About />} />
                        <Route path="/servicios" element={<Services />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                        <Route path="/privacidad" element={<Privacy />} />
                        <Route path="/terminos" element={<Terms />} />
                    </Routes>
                    <Footer />
                    <ChatbotManager />
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;
