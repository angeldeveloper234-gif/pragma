"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SECTIONS = [
    {
        title: "Identidad ante la Ley",
        content:
            "Bañuelos Villalba & Asociados S.C., en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, es responsable del tratamiento de sus datos personales. Nuestra firma tiene su domicilio establecido en Torre Omega, Centro Mayor, Calz Zavaleta, Puebla, Pue.",
    },
    {
        title: "Finalidad del Tratamiento",
        content:
            "Los datos personales que recabamos tienen como finalidad principal:",
        items: [
            "Proveer los servicios legales y contables solicitados.",
            "Notificar sobre cambios en los servicios contratados.",
            "Dar cumplimiento a obligaciones contraídas con nuestros clientes.",
            "Realizar evaluaciones periódicas de nuestros servicios a efecto de mejorar la calidad de los mismos.",
        ],
    },
    {
        title: "Datos Personales Recabados",
        content:
            "Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas: vía nuestro sitio web, telefónicamente o personalmente. Los datos incluyen: Nombre, Empresa, Correo Electrónico, Teléfono y Detalles del caso o consulta financiera.",
    },
    {
        title: "Derechos ARCO",
        content:
            "Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.",
    },
    {
        title: "Cambios al Aviso",
        content:
            "El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.",
    },
];

export default function Privacy() {
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
                            Legal
                        </p>
                        <h1
                            className="font-bold text-white mb-5"
                            style={{
                                fontFamily: "'Author', sans-serif",
                                fontSize: "clamp(32px, 5vw, 52px)",
                                lineHeight: 1.1,
                            }}
                        >
                            Aviso de{" "}
                            <span style={{ color: "rgba(255,255,255,0.6)" }}>
                                Privacidad
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
                            Protegemos su información personal conforme a la legislación
                            mexicana vigente en materia de datos personales.
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
                                    {section.items && (
                                        <ul className="mt-4 space-y-2 pl-1">
                                            {section.items.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-3 text-sm leading-relaxed"
                                                    style={{
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        color: "#4A5568",
                                                    }}
                                                >
                                                    <span
                                                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                                                        style={{ backgroundColor: "#2C5494" }}
                                                    />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
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
                            ¿Tiene alguna duda sobre el manejo de sus datos?
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
