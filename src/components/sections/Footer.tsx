"use client";

import Link from "next/link";
import { config } from "@/config";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    const { branding, contact } = config;
    const mutedText = "rgba(255,255,255,0.55)";
    const dividerColor = "rgba(255,255,255,0.08)";

    return (
        <footer className="text-white pt-20 pb-10" style={{ backgroundColor: "#0F2240" }}>
            <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <div
                            className="text-lg font-bold tracking-[0.3em] uppercase mb-5"
                            style={{ fontFamily: "'Author', sans-serif" }}
                        >
                            {branding.name}
                        </div>
                        <p
                            className="text-sm leading-relaxed mb-8"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: mutedText }}
                        >
                            {branding.tagline}
                        </p>
                        <button
                            className="rounded-lg text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 text-[11px] tracking-[0.15em] uppercase"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                backgroundColor: "#2C5494",
                                padding: "10px 22px",
                            }}
                            onClick={() => window.location.href = "#contact"}
                        >
                            Asesoría Confidencial
                        </button>
                    </div>

                    {/* Navegación */}
                    <div>
                        <h5
                            className="text-[10px] uppercase tracking-[0.28em] font-bold mb-6"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: mutedText }}
                        >
                            Navegación
                        </h5>
                        <ul className="space-y-3">
                            {[
                                { href: "/", label: "Inicio" },
                                { href: "/servicios", label: "Servicios" },
                                { href: "/diagnostico", label: "Diagnóstico Fiscal" },
                                { href: "/equipo", label: "Equipo" },
                                { href: "/blog", label: "Blog" },
                            ].map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-sm transition-colors duration-200 hover:text-white underline-offset-2 hover:underline"
                                        style={{ fontFamily: "'DM Sans', sans-serif", color: mutedText }}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h5
                            className="text-[10px] uppercase tracking-[0.28em] font-bold mb-6"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: mutedText }}
                        >
                            Legal
                        </h5>
                        <ul className="space-y-3">
                            {[
                                { href: "/privacidad", label: "Aviso de Privacidad" },
                                { href: "/terminos", label: "Términos de Servicio" },
                            ].map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-sm transition-colors duration-200 hover:text-white underline-offset-2 hover:underline"
                                        style={{ fontFamily: "'DM Sans', sans-serif", color: mutedText }}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5
                            className="text-[10px] uppercase tracking-[0.28em] font-bold mb-6"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: mutedText }}
                        >
                            Puebla, México
                        </h5>
                        <ul className="space-y-5">
                            {[
                                { Icon: MapPin, text: contact.address },
                                { Icon: Phone, text: contact.phone },
                                { Icon: Mail, text: contact.email },
                            ].map(({ Icon, text }, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Icon size={14} className="shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                                    <span
                                        className="text-sm leading-relaxed"
                                        style={{ fontFamily: "'DM Sans', sans-serif", color: mutedText }}
                                    >
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div
                    className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4"
                    style={{ borderTop: `1px solid ${dividerColor}` }}
                >
                    <p
                        className="text-[10px] uppercase tracking-[0.2em] font-semibold"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: mutedText }}
                    >
                        © {new Date().getFullYear()} {branding.name}. Todos los derechos reservados.
                    </p>
                    <p
                        className="text-[10px] uppercase tracking-[0.2em] flex items-center gap-1"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: mutedText }}
                    >
                        Hecho por{" "}
                        <a
                            href="https://www.angelstudio.design/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-white transition-colors"
                            style={{ color: "rgba(255,255,255,0.7)" }}
                        >
                            Angel Design Studio
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
