"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SECTIONS = [
    {
        title: "Aceptación de Términos",
        content:
            "Al acceder a este sitio web y solicitar nuestros servicios, usted acepta estar sujeto a estos términos y condiciones de uso, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de cualquier ley local aplicable.",
    },
    {
        title: "Uso de Licencia",
        content:
            "Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Bañuelos Villalba & Asociados S.C. para visualización transitoria personal y no comercial solamente.",
    },
    {
        title: "Limitaciones",
        content:
            "En ningún caso Bañuelos Villalba & Asociados S.C. o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surja del uso o la imposibilidad de utilizar los materiales en nuestro sitio.",
    },
    {
        title: "Alcance de los Servicios",
        content:
            "La información presentada en este sitio es meramente informativa y no constituye asesoría legal o contable vinculante hasta que se formalice una relación profesional mediante la firma de un contrato de prestación de servicios.",
    },
    {
        title: "Propiedad Intelectual",
        content:
            "Todos los contenidos, diseños, logotipos y textos en este sitio son propiedad exclusiva de Bañuelos Villalba & Asociados S.C. y están protegidos por las leyes de propiedad intelectual internacionales.",
    },
];

export default function Terms() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: "#EEF1F6" }}>
            {/* ── Header ── */}
            <section
                className="pt-32 md:pt-40 pb-16 md:pb-20"
                style={{ backgroundColor: "#0F2240" }}
            >
                <div className="container mx-auto px-6" style={{ maxWidth: "800px" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p
                            className="text-[11px] tracking-[0.28em] uppercase font-semibold mb-5"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                color: "rgba(255,255,255,0.5)",
                            }}
                        >
                            Regulaciones
                        </p>
                        <h1
                            className="font-bold text-white mb-5"
                            style={{
                                fontFamily: "'Author', sans-serif",
                                fontSize: "clamp(32px, 5vw, 52px)",
                                lineHeight: 1.1,
                            }}
                        >
                            Términos de{" "}
                            <span style={{ color: "rgba(255,255,255,0.6)" }}>
                                Servicio
                            </span>
                        </h1>
                        <p
                            className="leading-relaxed"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "17px",
                                color: "rgba(255,255,255,0.7)",
                                maxWidth: "520px",
                            }}
                        >
                            Condiciones que regulan el uso de nuestro sitio web y la
                            contratación de nuestros servicios profesionales.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Content ── */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6" style={{ maxWidth: "800px" }}>
                    <div
                        className="rounded-xl bg-white p-8 md:p-12"
                        style={{ border: "1.5px solid #D8DFE9" }}
                    >
                        <div className="space-y-10">
                            {SECTIONS.map((section, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <h2
                                        className="font-semibold mb-4"
                                        style={{
                                            fontFamily: "'Author', sans-serif",
                                            fontSize: "22px",
                                            color: "#1A1D26",
                                        }}
                                    >
                                        <span
                                            className="text-[11px] tracking-[0.15em] uppercase font-semibold mr-3"
                                            style={{
                                                fontFamily: "'DM Sans', sans-serif",
                                                color: "#2C5494",
                                            }}
                                        >
                                            0{i + 1}
                                        </span>
                                        {section.title}
                                    </h2>
                                    <p
                                        className="leading-relaxed"
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "15px",
                                            color: "#4A5568",
                                            lineHeight: 1.75,
                                        }}
                                    >
                                        {section.content}
                                    </p>
                                    {i < SECTIONS.length - 1 && (
                                        <div
                                            className="mt-10 border-t"
                                            style={{ borderColor: "#EEF1F6" }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Last updated */}
                        <div
                            className="mt-12 pt-8 border-t"
                            style={{ borderColor: "#D8DFE9" }}
                        >
                            <p
                                className="text-[10px] tracking-[0.15em] uppercase italic"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    color: "#8896AB",
                                }}
                            >
                                Última actualización: 17 de Abril, 2026.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <p
                            className="mb-3"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "15px",
                                color: "#4A5568",
                            }}
                        >
                            ¿Necesita aclarar algún punto de estos términos?
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-3 rounded-lg text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "12px",
                                letterSpacing: "0.08em",
                                backgroundColor: "#2C5494",
                                padding: "14px 32px",
                            }}
                        >
                            Contáctenos <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
