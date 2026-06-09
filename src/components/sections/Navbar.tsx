"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { config } from "@/config";
import { HERO_VARIANT } from "./Hero";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { branding } = config;
    const pathname = usePathname();

    const isHome = pathname === "/";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const handleScrollToContact = () => {
        setIsOpen(false);
        if (pathname === "/") {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = "/#contact";
        }
    };

    // Variante B: navbar transparente sobre fondo claro hasta hacer scroll
    const isLightHero = isHome && HERO_VARIANT === "B";
    const isSolid = !isHome || scrolled;

    const navBg = isSolid
        ? "#1B3564"
        : isLightHero
            ? "transparent"
            : "rgba(15,34,64,0.35)";

    const navShadow = isSolid ? "0 2px 16px rgba(15,34,64,0.18)" : "none";

    // Links oscuros sobre fondo claro (variante B sin scroll), blancos en el resto
    const useDarkLinks = isLightHero && !scrolled;
    const linkColor      = useDarkLinks ? "rgba(26,29,38,0.7)"  : "rgba(255,255,255,0.82)";
    const activeLinkColor = useDarkLinks ? "#1A1D26"            : "#ffffff";
    const logoColor      = useDarkLinks ? "#1A1D26"             : "#ffffff";
    const hamburgerColor = useDarkLinks ? "#1A1D26"             : "#ffffff";
    const ctaBg          = useDarkLinks ? "#1B3564"             : "#2C5494";
    const activeUnderline = useDarkLinks ? "#1B3564"            : "#C9A84C";

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
            style={{
                backgroundColor: navBg,
                boxShadow: navShadow,
                backdropFilter: "none",
            }}
        >
            <div
                className="container mx-auto px-6 h-20 flex items-center justify-between"
                style={{ maxWidth: "1200px" }}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <span
                        className="text-base font-bold tracking-[0.3em] uppercase transition-colors duration-300"
                        style={{ fontFamily: "'Author', sans-serif", color: logoColor }}
                    >
                        {branding.name}
                    </span>
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {[
                        { href: "/", label: "Inicio" },
                        { href: "/servicios", label: "Servicios" },
                        { href: "/diagnostico", label: "Diagnóstico" },
                        { href: "/blog", label: "Blog" },
                        { href: "/#equipo", label: "Equipo" },
                    ].map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-200 group"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    color: isActive ? activeLinkColor : linkColor,
                                }}
                            >
                                {link.label}
                                {/* Active indicator */}
                                <span
                                    className="absolute -bottom-1 left-0 h-[1.5px] transition-all duration-300"
                                    style={{
                                        width: isActive ? "100%" : "0%",
                                        backgroundColor: activeUnderline,
                                    }}
                                />
                                {/* Hover indicator */}
                                <span
                                    className="absolute -bottom-1 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-200"
                                    style={{ backgroundColor: "rgba(255,255,255,0.35)" }}
                                />
                            </Link>
                        );
                    })}

                    <button
                        className="text-[11px] tracking-[0.2em] uppercase font-medium transition-opacity hover:opacity-60"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: linkColor }}
                        onClick={handleScrollToContact}
                    >
                        Contacto
                    </button>

                    <button
                        onClick={handleScrollToContact}
                        className="ml-1 rounded-lg text-[10px] tracking-[0.15em] uppercase font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            backgroundColor: ctaBg,
                            padding: "9px 20px",
                        }}
                    >
                        Agendar Consulta
                    </button>
                </div>

                {/* Hamburger */}
                <button
                    className="md:hidden p-3 focus:outline-none transition-colors duration-300"
                    style={{ color: hamburgerColor }}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[100] md:hidden"
                            style={{ backgroundColor: "rgba(15,34,64,0.55)", backdropFilter: "blur(4px)" }}
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", ease: "easeInOut", duration: 0.28 }}
                            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[340px] z-[110] md:hidden flex flex-col h-screen"
                            style={{ backgroundColor: "#1B3564" }}
                        >
                            {/* Drawer header */}
                            <div
                                className="flex items-center justify-between px-8 h-20 border-b"
                                style={{ borderColor: "rgba(255,255,255,0.1)" }}
                            >
                                <span
                                    className="text-sm font-bold tracking-[0.3em] text-white uppercase"
                                    style={{ fontFamily: "'Author', sans-serif" }}
                                >
                                    {branding.name}
                                </span>
                                <button
                                    className="p-2 focus:outline-none text-white opacity-70 hover:opacity-100 transition-opacity"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Cerrar menú"
                                >
                                    <X size={22} />
                                </button>
                            </div>

                            {/* Links */}
                            <div className="flex-1 px-8 py-10 flex flex-col overflow-y-auto">
                                <span
                                    className="text-[9px] tracking-[0.3em] uppercase font-bold mb-6"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)" }}
                                >
                                    Navegación
                                </span>

                                {[
                                    { href: "/", label: "Inicio" },
                                    { href: "/servicios", label: "Servicios" },
                                    { href: "/diagnostico", label: "Diagnóstico" },
                                    { href: "/blog", label: "Blog" },
                                    { href: "/#equipo", label: "Equipo" },
                                ].map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="py-4 border-b text-sm tracking-[0.1em] uppercase font-medium transition-all duration-200 hover:text-white"
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            borderColor: "rgba(255,255,255,0.08)",
                                            color: pathname === link.href ? "#ffffff" : "rgba(255,255,255,0.65)",
                                        }}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                <button
                                    className="text-left py-4 text-sm tracking-[0.1em] uppercase font-medium transition-all duration-200 hover:text-white"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        color: "rgba(255,255,255,0.65)",
                                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                                    }}
                                    onClick={handleScrollToContact}
                                >
                                    Contacto
                                </button>

                                <div className="mt-10">
                                    <button
                                        onClick={handleScrollToContact}
                                        className="w-full rounded-lg text-[10px] tracking-[0.2em] uppercase font-semibold text-white transition-opacity hover:opacity-90"
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            backgroundColor: "#2C5494",
                                            padding: "12px 0",
                                        }}
                                    >
                                        Agendar Consulta
                                    </button>
                                </div>
                            </div>

                            {/* Drawer footer */}
                            <div
                                className="px-8 py-5 border-t"
                                style={{ borderColor: "rgba(255,255,255,0.08)" }}
                            >
                                <p
                                    className="text-[9px] tracking-[0.2em] uppercase"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)" }}
                                >
                                    © {new Date().getFullYear()} {branding.name}
                                </p>
                                <p
                                    className="text-[9px] tracking-[0.15em] uppercase mt-1 font-semibold"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)" }}
                                >
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
