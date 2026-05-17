"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { branding } = config;
    const pathname = usePathname();

    const links = [
        { href: "/", label: "INICIO" },
        { href: "/nosotros", label: "FIRMA" },
        { href: "/servicios", label: "SERVICIOS" },
    ];

    const isHome = pathname === "/";

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleScrollToContact = () => {
        setIsOpen(false);
        if (isHome) {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/#contact';
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0d0c0a]/90 backdrop-blur-sm border-b border-white/5">
            <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold tracking-widest text-white uppercase">{branding.name}</span>
                </Link>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-[10px] font-sans tracking-[0.3em] transition-colors uppercase ${
                                pathname === link.href ? "text-[#c69955]" : "text-zinc-400 hover:text-[#c69955]"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        variant="ghost"
                        className="text-white hover:text-[#c69955] text-[10px] tracking-[0.3em] uppercase p-0"
                        onClick={handleScrollToContact}
                    >
                        CONTACTO
                    </Button>
                    <Button
                        variant="outline"
                        className="border-[#c69955] text-[#c69955] hover:bg-[#c69955] hover:text-black rounded-none px-8 h-12 tracking-widest text-[10px] uppercase font-bold transition-all duration-500"
                        onClick={handleScrollToContact}
                    >
                        AGENDAR CONSULTA
                    </Button>
                </div>

                {/* Hamburger button */}
                <button
                    className="md:hidden text-white p-2 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Premium Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Slide-in Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-[#0d0c0a] border-l border-white/10 z-50 md:hidden flex flex-col h-full shadow-2xl"
                        >
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between px-8 h-24 border-b border-white/5">
                                <span className="text-xl font-bold tracking-widest text-white uppercase">{branding.name}</span>
                                <button
                                    className="text-white p-2 hover:text-[#c69955] transition-colors focus:outline-none"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Cerrar menú"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Drawer Links */}
                            <div className="flex-1 px-8 py-12 flex flex-col gap-8 overflow-y-auto">
                                <div className="flex flex-col gap-6">
                                    <span className="text-[10px] tracking-[0.4em] text-[#c69955] font-bold uppercase mb-2">Navegación</span>
                                    {links.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`text-xl font-display tracking-widest uppercase transition-colors py-2 border-b border-white/5 ${
                                                pathname === link.href ? "text-[#c69955]" : "text-zinc-400 hover:text-white"
                                            }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <button
                                        className="text-left text-xl font-display tracking-widest uppercase transition-colors py-2 border-b border-white/5 text-zinc-400 hover:text-white"
                                        onClick={handleScrollToContact}
                                    >
                                        CONTACTO
                                    </button>
                                </div>

                                <div className="flex flex-col gap-4 mt-8">
                                    <span className="text-[10px] tracking-[0.4em] text-[#c69955] font-bold uppercase mb-2">Acciones</span>
                                    <Button
                                        variant="outline"
                                        className="w-full border-[#c69955] text-[#c69955] hover:bg-[#c69955] hover:text-black rounded-none h-14 tracking-widest text-xs uppercase font-bold transition-all duration-300"
                                        onClick={handleScrollToContact}
                                    >
                                        AGENDAR CONSULTA
                                    </Button>
                                </div>
                            </div>

                            {/* Drawer Footer */}
                            <div className="px-8 py-8 border-t border-white/5 bg-[#0a0908]">
                                <p className="text-[9px] tracking-[0.3em] text-zinc-500 font-sans uppercase">
                                    © {new Date().getFullYear()} {branding.name}
                                </p>
                                <p className="text-[8px] tracking-[0.2em] text-[#c69955] font-sans uppercase mt-1">
                                    Bañuelos Villalba & Asociados
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}

