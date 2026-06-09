"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Clock, User, ArrowRight } from "lucide-react";
import { ALL_POSTS } from "./Blog";

export default function BlogPost() {
    const { slug } = useParams();

    const post =
        ALL_POSTS.find((p) => p.slug === slug) ||
        (slug === "inteligencia-corporativa-era-digital"
            ? {
                  title: "Inteligencia Corporativa en la Era Digital",
                  category: "TECNOLOGÍA",
                  date: "20 Oct, 2026",
                  image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200",
                  excerpt: "La transparencia ya no es opcional, es la moneda de cambio del prestigio.",
                  slug: "inteligencia-corporativa-era-digital",
                  content: `
                    <p class="mb-8 text-lg leading-relaxed" style="font-family:'DM Sans',sans-serif;color:#4A5568">En el dinámico panorama empresarial de México, la intersección entre la tecnología y el rigor jurídico está definiendo una nueva era de transparencia y eficiencia. Ya no basta con cumplir; las firmas líderes están utilizando herramientas digitales para anticipar riesgos y optimizar la toma de decisiones.</p>
                    <h2 style="font-family:'Author',sans-serif;font-size:28px;font-weight:700;color:#1A1D26;margin:48px 0 20px;line-height:1.2">La Automatización del Cumplimiento</h2>
                    <p class="mb-6" style="font-family:'DM Sans',sans-serif;color:#4A5568;line-height:1.75">El cumplimiento normativo (compliance) ha dejado de ser un proceso reactivo basado en papel. Hoy, algoritmos de monitoreo continuo permiten a las empresas identificar desviaciones fiscales o legales en tiempo real, antes de que se conviertan en contingencias costosas.</p>
                    <div style="background:#F5F7FA;border-left:4px solid #1B3564;padding:32px;margin:40px 0;border-radius:0 12px 12px 0">
                        <p style="font-family:'Author',sans-serif;font-size:20px;font-style:italic;color:#1A1D26;line-height:1.4;margin:0">"La inteligencia corporativa no es solo recolectar datos, es transformarlos en certeza jurídica y solidez financiera."</p>
                        <span style="display:block;margin-top:16px;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;font-weight:600;color:#2C5494">Dirección General</span>
                    </div>
                    <h2 style="font-family:'Author',sans-serif;font-size:28px;font-weight:700;color:#1A1D26;margin:48px 0 20px;line-height:1.2">Transparencia Financiera 4.0</h2>
                    <p class="mb-6" style="font-family:'DM Sans',sans-serif;color:#4A5568;line-height:1.75">La digitalización de los procesos contables ha eliminado las cajas negras del pasado. Para una firma boutique, ofrecer visibilidad total a sus clientes sobre su estado financiero y sus obligaciones tributarias es el estándar de oro de la confianza profesional.</p>
                    <p style="font-family:'DM Sans',sans-serif;color:#4A5568;line-height:1.75">El entorno empresarial contemporáneo exige una visión integral que combine la precisión técnica de la contabilidad con la firmeza del marco legal mexicano. En <strong style="color:#1A1D26">Bañuelos Villalba &amp; Asociados</strong>, entendemos que cada decisión corporativa tiene repercusiones en múltiples dimensiones.</p>
                  `,
              }
            : null);

    if (!post)
        return (
            <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#EEF1F6" }}>
                <div className="text-center">
                    <p style={{ fontFamily: "'Author', sans-serif", fontSize: "24px", color: "#1A1D26" }}>
                        Artículo no encontrado
                    </p>
                    <Link
                        href="/blog"
                        className="inline-block mt-6 text-[11px] tracking-[0.15em] uppercase font-semibold"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                    >
                        ← Volver al blog
                    </Link>
                </div>
            </main>
        );

    return (
        <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
            {/* Header */}
            <section className="pt-32 md:pt-40 pb-12" style={{ backgroundColor: "#0F2240" }}>
                <div className="container mx-auto px-6" style={{ maxWidth: "800px" }}>
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 mb-8 text-[11px] tracking-[0.15em] uppercase font-semibold transition-opacity hover:opacity-70"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)" }}
                        >
                            <ChevronLeft size={14} /> Blog
                        </Link>
                        <div className="flex items-center gap-4 mb-6">
                            <span
                                className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                                style={{ fontFamily: "'DM Sans', sans-serif", color: "#C9A84C" }}
                            >
                                {post.category}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span
                                className="flex items-center gap-1.5 text-[10px] tracking-[0.1em] uppercase"
                                style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)" }}
                            >
                                <Clock size={11} /> {post.date}
                            </span>
                        </div>
                        <h1
                            className="font-bold text-white"
                            style={{
                                fontFamily: "'Author', sans-serif",
                                fontSize: "clamp(28px, 4.5vw, 44px)",
                                lineHeight: 1.15,
                            }}
                        >
                            {post.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Author bar */}
            <div className="border-b" style={{ borderColor: "#D8DFE9", backgroundColor: "#F5F7FA" }}>
                <div className="container mx-auto px-6 py-5 flex items-center gap-4" style={{ maxWidth: "800px" }}>
                    <div
                        className="w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#1B3564" }}
                    >
                        <User size={16} style={{ color: "rgba(255,255,255,0.5)" }} />
                    </div>
                    <div>
                        <p
                            className="text-[10px] tracking-[0.15em] uppercase font-semibold"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#1A1D26" }}
                        >
                            Socio de la Firma
                        </p>
                        <p
                            className="text-[10px] tracking-[0.1em]"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#8896AB" }}
                        >
                            5 min de lectura
                        </p>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className="container mx-auto px-6" style={{ maxWidth: "800px" }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-10 mb-12 aspect-[21/10] overflow-hidden rounded-xl"
                    style={{ border: "1.5px solid #D8DFE9" }}
                >
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </motion.div>
            </div>

            {/* Content */}
            <article className="container mx-auto px-6 pb-20" style={{ maxWidth: "800px" }}>
                {"content" in post ? (
                    <div dangerouslySetInnerHTML={{ __html: post.content as string }} />
                ) : (
                    <div>
                        <p
                            className="mb-8 text-lg leading-relaxed italic pl-6"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                color: "#1A1D26",
                                borderLeft: "3px solid #1B3564",
                            }}
                        >
                            {post.excerpt}
                        </p>
                        <p
                            className="mb-6 leading-relaxed"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568", lineHeight: 1.75 }}
                        >
                            El entorno empresarial contemporáneo exige una visión integral que combine la precisión
                            técnica de la contabilidad con la firmeza del marco legal mexicano. En{" "}
                            <strong style={{ color: "#1A1D26" }}>Bañuelos Villalba &amp; Asociados</strong>,
                            entendemos que cada decisión corporativa tiene repercusiones en múltiples dimensiones.
                        </p>
                    </div>
                )}

                {/* Bottom CTA */}
                <div
                    className="mt-20 pt-12 border-t text-center"
                    style={{ borderColor: "#D8DFE9" }}
                >
                    <p
                        className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-4"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                    >
                        Próximo paso
                    </p>
                    <h3
                        className="font-bold leading-tight mb-8"
                        style={{
                            fontFamily: "'Author', sans-serif",
                            fontSize: "clamp(24px, 3.5vw, 36px)",
                            color: "#1A1D26",
                        }}
                    >
                        ¿Necesita asesoría especializada
                        <br />
                        sobre este tema?
                    </h3>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-3 rounded-lg text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "13px",
                            letterSpacing: "0.08em",
                            backgroundColor: "#2C5494",
                            padding: "16px 40px",
                        }}
                    >
                        Agendar Consulta
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </article>
        </main>
    );
}
