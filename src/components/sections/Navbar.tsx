import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { branding } = config;
    const location = useLocation();

    const links = [
        { href: "/", label: "INICIO" },
        { href: "/nosotros", label: "NOSOTROS" },
        { href: "/servicios", label: "SERVICIOS" },
        { href: "/blog", label: "BLOG" },
    ];

    const isHome = location.pathname === "/";

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0d0c0a]/90 backdrop-blur-sm border-b border-white/5">
            <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src={branding.logo} alt={branding.name} className="h-12 w-auto object-contain" />
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`text-[10px] font-sans tracking-[0.3em] transition-colors uppercase ${
                                location.pathname === link.href ? "text-[#c69955]" : "text-zinc-400 hover:text-[#c69955]"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        variant="ghost"
                        className="text-white hover:text-[#c69955] text-[10px] tracking-[0.3em] uppercase p-0"
                        onClick={() => {
                            if (isHome) {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                window.location.href = '/#contact';
                            }
                        }}
                    >
                        CONTACTO
                    </Button>
                    <Button
                        variant="outline"
                        className="border-[#c69955] text-[#c69955] hover:bg-[#c69955] hover:text-black rounded-none px-8 h-12 tracking-widest text-[10px] uppercase font-bold transition-all duration-500"
                        onClick={() => {
                            if (isHome) {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                window.location.href = '/#contact';
                            }
                        }}
                    >
                        AGENDAR CONSULTA
                    </Button>
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-[#0F1216] border-b border-white/10 overflow-hidden"
                >
                    <div className="flex flex-col p-6 gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="text-xs font-sans tracking-widest text-zinc-400 hover:text-[#c69955] uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
