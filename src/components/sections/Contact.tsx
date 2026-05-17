import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowRight, UserCheck } from "lucide-react";
import { config } from "@/config";

export function Contact() {
    const { contact } = config;
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log("Data", data);
        alert("Mensaje enviado. Un socio de la firma le contactará en breve para su evaluación preliminar.");
    };

    return (        <section id="contact" className="py-16 md:py-32 bg-[#0F1216] relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-20">
                    <span className="text-[#c69955] font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">Contacto</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white mb-6">
                        Paso Estratégico <br />
                        <span className="italic font-light text-[#c69955]">Hablemos de su Futuro</span>
                    </h2>
                    <p className="text-zinc-500 font-sans font-light text-base sm:text-lg max-w-2xl mx-auto">
                        Deje sus asuntos legales y financieros en manos de expertos. Contáctenos hoy para una evaluación preliminar de su caso.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-7xl mx-auto">

                    {/* Left Side: Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 bg-[#1A1F26] p-6 sm:p-10 md:p-16 border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-sm relative overflow-hidden"
                    >
                        {/* Decorative Background Accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c69955]/[0.02] blur-[100px] -z-10" />

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 md:space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12 gap-y-8 md:gap-y-10">
                                <div className="space-y-3">
                                    <label className="text-[9px] uppercase tracking-[0.4em] text-[#c69955] font-bold">Nombre Completo</label>
                                    <input
                                        {...register("name")}
                                        required
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#c69955] transition-all duration-500 placeholder:text-zinc-700 font-sans text-base sm:text-lg font-light"
                                        placeholder="Ej. Dr. Mauricio Castillo"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[9px] uppercase tracking-[0.4em] text-[#c69955] font-bold">Empresa o Institución</label>
                                    <input
                                        {...register("company")}
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#c69955] transition-all duration-500 placeholder:text-zinc-700 font-sans text-base sm:text-lg font-light"
                                        placeholder="Nombre de su organización"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[9px] uppercase tracking-[0.4em] text-[#c69955] font-bold">Especialidad Requerida</label>
                                    <select
                                        {...register("service")}
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#c69955] transition-all duration-500 font-sans text-base sm:text-lg font-light appearance-none cursor-pointer"
                                    >
                                        <option value="legal" className="bg-[#1A1F26]">Consultoría Legal</option>
                                        <option value="contable" className="bg-[#1A1F26]">Asesoría Contable / Fiscal</option>
                                        <option value="integral" className="bg-[#1A1F26]">Solución Integral Corporativa</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[9px] uppercase tracking-[0.4em] text-[#c69955] font-bold">Correo Corporativo</label>
                                    <input
                                        {...register("email")}
                                        required
                                        type="email"
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#c69955] transition-all duration-500 placeholder:text-zinc-700 font-sans text-base sm:text-lg font-light"
                                        placeholder="contacto@empresa.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[9px] uppercase tracking-[0.4em] text-[#c69955] font-bold">Resumen de la Consulta</label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#c69955] transition-all duration-500 placeholder:text-zinc-700 font-sans text-base sm:text-lg font-light resize-none"
                                    placeholder="Describa brevemente el alcance de su necesidad..."
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-4 w-full">
                                <Button
                                    type="submit"
                                    className="w-full sm:w-auto bg-[#c69955] text-black hover:bg-white rounded-none px-6 sm:px-12 h-16 sm:h-20 text-xs tracking-[0.4em] uppercase font-bold transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)] group flex justify-center items-center"
                                >
                                    Solicitar Evaluación
                                    <ArrowRight className="ml-4 w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <p className="text-[9px] text-zinc-500 uppercase tracking-widest leading-relaxed text-center sm:text-left">
                                    Respuesta garantizada <br /> en menos de 24 horas hábiles.
                                </p>
                            </div>
                        </form>
                    </motion.div>

                    {/* Right Side: Profile & Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 flex flex-col gap-8"
                    >
                        <div className="bg-[#141414] border border-white/5 p-6 sm:p-12 flex-1 relative overflow-hidden group">
                            <div className="relative z-10">
                                <UserCheck size={48} className="text-[#c69955] mb-8" />
                                <h3 className="text-2xl md:text-3xl font-display text-white mb-10 leading-tight">Sinergia <br /> Profesional</h3>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4 text-zinc-400 group-hover:text-white transition-colors duration-500">
                                        <MapPin size={22} className="text-[#c69955] shrink-0" />
                                        <span className="text-sm md:text-base font-sans font-light leading-relaxed">
                                            Torre Omega, Centro Mayor,<br />
                                            Calz Zavaleta, Puebla, Pue.
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 text-zinc-400 group-hover:text-white transition-colors duration-500">
                                        <Phone size={22} className="text-[#c69955] shrink-0" />
                                        <span className="text-sm md:text-base font-sans font-light tracking-wide">{contact.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-zinc-400 group-hover:text-white transition-colors duration-500">
                                        <Mail size={22} className="text-[#c69955] shrink-0" />
                                        <span className="text-sm md:text-base font-sans font-light tracking-wide">{contact.email}</span>
                                    </div>
                                </div>

                                <div className="mt-16 flex items-center gap-3 bg-white/[0.03] w-fit px-4 py-2 border border-white/5">
                                    <img src="/images/icons8-google-96.svg" alt="Google" className="w-4 h-4" />
                                    <span className="text-white text-[9px] font-bold tracking-[0.3em] uppercase">Socio Estratégico de Google Maps</span>
                                </div>
                            </div>

                            {/* Background Number Decal */}
                            <span className="absolute -bottom-10 -right-10 text-[200px] font-display font-bold text-white/[0.02] pointer-events-none select-none">B</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
