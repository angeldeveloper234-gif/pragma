"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight, ShieldCheck } from "lucide-react";

const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    color: "#1A1D26",
    backgroundColor: "#F5F7FA",
    border: "1.5px solid #D8DFE9",
    borderRadius: "8px",
    padding: "12px 14px",
    outline: "none",
    transition: "border-color 0.2s",
};

export default function DiagnosticoPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log("Diagnóstico:", data);
        alert("Solicitud enviada. Nuestro equipo le contactará dentro de las próximas 24 horas hábiles para agendar su diagnóstico.");
    };

    const focusHandlers = {
        onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            e.target.style.borderColor = "#2C5494";
            e.target.style.backgroundColor = "#ffffff";
        },
        onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            e.target.style.borderColor = "#D8DFE9";
            e.target.style.backgroundColor = "#F5F7FA";
        },
    };

    return (
        <main className="min-h-screen" style={{ backgroundColor: "#EEF1F6" }}>

            {/* Header */}
            <section className="pt-32 md:pt-40 pb-16 md:pb-20" style={{ backgroundColor: "#0F2240" }}>
                <div className="container mx-auto px-6 text-center" style={{ maxWidth: "720px" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ShieldCheck size={36} className="mx-auto mb-6" style={{ color: "rgba(255,255,255,0.4)" }} />
                        <h1
                            className="font-bold text-white mb-5"
                            style={{
                                fontFamily: "'Author', sans-serif",
                                fontSize: "clamp(28px, 4vw, 44px)",
                                lineHeight: 1.1,
                            }}
                        >
                            Diagnóstico Fiscal
                        </h1>
                        <p
                            className="leading-relaxed"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "17px",
                                color: "rgba(255,255,255,0.7)",
                                maxWidth: "520px",
                                margin: "0 auto",
                            }}
                        >
                            Solicite una evaluación preliminar y confidencial de la situación fiscal
                            de su empresa. Nuestro equipo le contactará en menos de 24 horas.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="container mx-auto px-6"
                    style={{ maxWidth: "680px" }}
                >
                    <div
                        className="bg-white rounded-xl p-8 md:p-12"
                        style={{ border: "1.5px solid #D8DFE9" }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            {/* Nombre */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                >
                                    Nombre Completo
                                </label>
                                <input
                                    {...register("name")}
                                    required
                                    placeholder="Ej. Mauricio Castillo"
                                    style={inputStyle}
                                    {...focusHandlers}
                                />
                            </div>

                            {/* Empresa */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                >
                                    Empresa
                                </label>
                                <input
                                    {...register("company")}
                                    required
                                    placeholder="Nombre de su organización"
                                    style={inputStyle}
                                    {...focusHandlers}
                                />
                            </div>

                            {/* Email y Teléfono */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                    >
                                        Correo Electrónico
                                    </label>
                                    <input
                                        {...register("email")}
                                        required
                                        type="email"
                                        placeholder="contacto@empresa.com"
                                        style={inputStyle}
                                        {...focusHandlers}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                    >
                                        Teléfono
                                    </label>
                                    <input
                                        {...register("phone")}
                                        required
                                        type="tel"
                                        placeholder="+52 222 000 0000"
                                        style={inputStyle}
                                        {...focusHandlers}
                                    />
                                </div>
                            </div>

                            {/* Mensaje */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                >
                                    Describa brevemente su situación
                                </label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    placeholder="¿Tiene un crédito fiscal, auditoría activa, o necesita una revisión preventiva?"
                                    style={{ ...inputStyle, resize: "none" as any }}
                                    onFocus={(e) => { e.target.style.borderColor = "#2C5494"; e.target.style.backgroundColor = "#ffffff"; }}
                                    onBlur={(e) => { e.target.style.borderColor = "#D8DFE9"; e.target.style.backgroundColor = "#F5F7FA"; }}
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-3 rounded-lg text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "13px",
                                    letterSpacing: "0.06em",
                                    backgroundColor: "#2C5494",
                                    padding: "16px 32px",
                                }}
                            >
                                Solicitar Diagnóstico Fiscal
                                <ArrowRight size={16} />
                            </button>

                            <p
                                className="text-center text-[11px] leading-relaxed"
                                style={{ fontFamily: "'DM Sans', sans-serif", color: "#8896AB" }}
                            >
                                Su información es tratada con estricta confidencialidad.
                            </p>
                        </form>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
