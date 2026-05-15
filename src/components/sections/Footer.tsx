import { Link } from "react-router-dom";
import { config } from "@/config";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    const { branding, contact } = config;

    return (
        <footer className="bg-[#0F1216] text-white pt-32 pb-12 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Large Branding Text */}
                <div className="flex flex-col items-center justify-center mb-32 text-center">
                    <img src={branding.logo} alt={branding.name} className="w-[40vw] max-w-[600px] opacity-[0.03] grayscale pointer-events-none select-none" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <img src={branding.logo} alt={branding.name} className="h-10 w-auto mb-8 grayscale hover:grayscale-0 transition-all duration-500" />
                        <p className="text-zinc-500 font-sans font-light text-sm leading-relaxed mb-8">
                            Firma multidisciplinaria que brinda certeza jurídica y solidez financiera a empresas y particulares con altos estándares de profesionalismo.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Estrategia</h5>
                        <ul className="space-y-4 text-zinc-500 font-sans text-sm font-light">
                            <li className="hover:text-[#c69955] cursor-pointer transition-colors">Nuestra Firma</li>
                            <li className="hover:text-[#c69955] cursor-pointer transition-colors">Servicios Legales</li>
                            <li className="hover:text-[#c69955] cursor-pointer transition-colors">Servicios Fiscales</li>
                            <li className="hover:text-[#c69955] cursor-pointer transition-colors">Contacto</li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h5 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Legal</h5>
                        <ul className="space-y-4 text-zinc-500 font-sans text-sm font-light">
                            <li><Link to="/privacidad" className="hover:text-[#c69955] cursor-pointer transition-colors">Aviso de Privacidad</Link></li>
                            <li><Link to="/terminos" className="hover:text-[#c69955] cursor-pointer transition-colors">Términos de Servicio</Link></li>
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
