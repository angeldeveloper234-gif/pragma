"use client";

import Link from "next/link";
import { config } from "@/config";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    const { branding, contact } = config;

    return (
        <footer className="bg-[#0F1216] text-white pt-32 pb-12 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                
                <div className="flex flex-col items-center justify-center mb-32 text-center">
                    <h2 className="text-[12vw] leading-none font-display text-white/[0.02] select-none pointer-events-none tracking-[0.2em] uppercase">PRAGMA</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="lg:col-span-1">
                        <div className="text-3xl font-display text-white tracking-[0.2em] mb-8 uppercase">{branding.name}</div>
                        <p className="text-zinc-500 font-sans font-light text-sm leading-relaxed mb-8">
                            {branding.tagline}
                        </p>
                        <button 
                            className="bg-[#c69955] text-black px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-white transition-colors w-full md:w-auto text-center"
                            onClick={() => window.location.href = '#contact'}
                        >
                            Solicitar Asesoría Confidencial
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Navegación</h5>
                        <ul className="space-y-4 text-zinc-500 font-sans text-sm font-light">
                            <li className="hover:text-[#c69955] cursor-pointer transition-colors" onClick={() => window.scrollTo(0, 0)}>Inicio</li>
                            <li className="hover:text-[#c69955] cursor-pointer transition-colors" onClick={() => window.location.href = '#firma'}>Firma</li>
                            <li className="hover:text-[#c69955] cursor-pointer transition-colors" onClick={() => window.location.href = '#servicios'}>Servicios</li>
                            <li className="hover:text-[#c69955] cursor-pointer transition-colors" onClick={() => window.location.href = '#contact'}>Contacto</li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h5 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Legal</h5>
                        <ul className="space-y-4 text-zinc-500 font-sans text-sm font-light">
                            <li><Link href="/privacidad" className="hover:text-[#c69955] cursor-pointer transition-colors">Aviso de Privacidad</Link></li>
                            <li><Link href="/terminos" className="hover:text-[#c69955] cursor-pointer transition-colors">Términos de Servicio</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h5 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Puebla, Mx</h5>
                        <ul className="space-y-6 text-zinc-500 font-sans text-sm font-light">
                            <li className="flex items-start gap-4">
                                <MapPin size={16} className="text-[#c69955] mt-1 shrink-0" />
                                <span>{contact.address}</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={16} className="text-[#c69955] mt-1 shrink-0" />
                                <span>{contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={16} className="text-[#c69955] mt-1 shrink-0" />
                                <span>{contact.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-8 mb-12">
                    <p className="text-zinc-700 text-[10px] font-sans uppercase tracking-[0.2em] text-center md:text-left">
                        © {new Date().getFullYear()} {branding.name}. Todos los derechos reservados.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center pt-12 border-t border-white/5">
                    <p className="text-zinc-500 text-[12px] font-sans uppercase tracking-[0.4em] flex items-center gap-2">
                        Hecho por <a href="https://www.angelstudio.design/" target="_blank" rel="noopener noreferrer" className="text-[#c69955] font-bold hover:text-white hover:scale-105 transition-all duration-300 transform inline-block">Angel Design Studio</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

