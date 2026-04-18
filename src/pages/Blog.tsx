import { motion } from "framer-motion";
import { Clock, User, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ALL_POSTS = [
    {
        title: "Nueva Reforma Fiscal 2026: Puntos Clave para Empresas",
        slug: "nueva-reforma-fiscal-2026",
        excerpt: "Analizamos el impacto de las nuevas disposiciones tributarias en el sector corporativo y cómo mitigar riesgos...",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
        category: "FISCAL",
        date: "15 Oct, 2026"
    },
    {
        title: "Protección Patrimonial en Entornos de Incertidumbre",
        slug: "proteccion-patrimonial-2026",
        excerpt: "Estrategias jurídicas sólidas para blindar los activos de su empresa y de su familia ante cambios legales...",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800",
        category: "LEGAL",
        date: "02 Oct, 2026"
    },
    {
        title: "Auditorías del SAT: Cómo prepararse preventivamente",
        slug: "auditorias-sat-guia-preventiva",
        excerpt: "La importancia de mantener una contabilidad impecable y una estrategia preventiva ante las autoridades fiscales...",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800",
        category: "CONTABLE",
        date: "20 Sep, 2026"
    },
    {
        title: "Compliance Laboral: Retos para el Segundo Semestre",
        slug: "compliance-laboral-retos-2026",
        excerpt: "Nuevas normativas en materia de teletrabajo y obligaciones patronales que entrarán en vigor próximamente...",
        image: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?q=80&w=800",
        category: "LEGAL",
        date: "10 Sep, 2026"
    },
    {
        title: "Inversión Extranjera en México: Marco Jurídico",
        slug: "inversion-extranjera-mexico-2026",
        excerpt: "Un análisis detallado sobre las facilidades y restricciones para capitales foráneos en el mercado actual...",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800",
        category: "CORPORATIVO",
        date: "05 Sep, 2026"
    },
    {
        title: "Gestión de Activos Intangibles y Propiedad Intelectual",
        slug: "gestion-activos-intangibles",
        excerpt: "Cómo valuar y proteger las marcas y patentes como parte fundamental del balance contable de su empresa...",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800",
        category: "FISCAL",
        date: "28 Ago, 2026"
    },
    {
        title: "Contratos de Outsourcing: Mitos y Realidades Legales",
        slug: "contratos-outsourcing-realidades",
        excerpt: "Entendiendo la delgada línea entre la especialización de servicios y la responsabilidad solidaria laboral...",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800",
        category: "LEGAL",
        date: "20 Ago, 2026"
    },
    {
        title: "Fusiones y Adquisiciones: El Rol del Due Diligence",
        slug: "fusiones-adquisiciones-due-diligence",
        excerpt: "Por qué una revisión exhaustiva legal y fiscal es el paso más crítico antes de cualquier transacción mayor...",
        image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800",
        category: "CORPORATIVO",
        date: "15 Ago, 2026"
    },
    {
        title: "Eficiencia Administrativa a través de la Digitalización",
        slug: "eficiencia-administrativa-digital",
        excerpt: "Cómo las herramientas de gestión interna están reduciendo costos operativos en los departamentos contables...",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
        category: "FISCAL",
        date: "10 Ago, 2026"
    }
];

const POSTS_PER_PAGE = 3;

export function Blog() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(ALL_POSTS.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = ALL_POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
            scrollToTop();
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
            scrollToTop();
        }
    };

    return (
        <div className="bg-[#0d0c0a] min-h-screen">
            <main className="pt-40 pb-32">
                {/* Header with Mesh Background */}
                <section className="relative container mx-auto px-6 mb-32 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
                         style={{ backgroundImage: "radial-gradient(#c69955 1.5px, transparent 1.5px)", backgroundSize: "45px 45px" }} />
                    
                    <div className="relative">
                        <span className="text-[#c69955] font-sans text-[11px] tracking-[0.5em] uppercase font-bold mb-8 block">Inspiración y Criterio</span>
                        <h1 className="text-6xl md:text-[100px] font-display text-white leading-[1.05] mb-8 translate-x-[-2px]">
                            Criterio <br />
                            <span className="italic font-light text-[#c69955]">Profesional.</span>
                        </h1>
                    </div>
                </section>

                {/* Featured Post */}
                {currentPage === 1 && (
                    <section className="container mx-auto px-6 mb-40">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <Link to={`/blog/inteligencia-corporativa-era-digital`} className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 overflow-hidden bg-white/[0.02]">
                                <div className="lg:col-span-7 aspect-[16/9] lg:aspect-auto overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200" 
                                        alt="Featured" 
                                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" 
                                    />
                                </div>
                                <div className="lg:col-span-5 p-12 md:p-20 flex flex-col justify-center border-l border-white/10 bg-black">
                                    <div className="flex items-center gap-6 mb-8">
                                        <span className="text-[#c69955] text-[10px] font-bold tracking-[0.3em] uppercase">Destacado</span>
                                        <span className="text-zinc-600 text-[10px] font-bold tracking-[0.3em] uppercase">Tecnología</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-display text-white mb-8 leading-tight uppercase group-hover:text-[#c69955] transition-colors">Digitalización <br />Jurídica</h2>
                                    <p className="text-zinc-500 font-sans font-light text-lg mb-12 leading-relaxed italic">"La transparencia ya no es opcional, es la moneda de cambio del prestigio."</p>
                                    <div className="flex items-center gap-4 text-white text-[10px] tracking-[0.3em] uppercase font-bold">
                                        Leer perspectiva <ChevronRight size={14} className="text-[#c69955] group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </section>
                )}

                {/* Posts Grid */}
                <section className="container mx-auto px-6 mb-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {currentPosts.map((post, i) => (
                            <motion.article
                                key={i + startIndex}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <Link to={`/blog/${post.slug}`} className="block">
                                    <div className="aspect-[16/10] bg-zinc-900 mb-10 overflow-hidden relative border border-white/5">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-white text-[10px] tracking-[0.4em] uppercase font-bold border border-white/30 px-6 py-2 backdrop-blur-sm">Leer más</span>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-6 text-[9px] text-zinc-500 font-bold uppercase tracking-[0.2em]">
                                            <span className="flex items-center gap-2 text-[#c69955]">{post.category}</span>
                                            <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                            <span>{post.date}</span>
                                        </div>
                                        <h3 className="text-2xl font-display text-white leading-tight group-hover:text-[#c69955] transition-colors uppercase tracking-tight">{post.title}</h3>
                                        <p className="text-zinc-500 font-sans font-light leading-relaxed text-sm line-clamp-3">{post.excerpt}</p>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-40 pt-16 border-t border-white/5">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold transition-all ${currentPage === 1 ? "text-zinc-800 cursor-not-allowed" : "text-white hover:text-[#c69955]"}`}
                        >
                            <ChevronLeft size={18} /> Anterior
                        </button>

                        <div className="hidden md:flex gap-8">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setCurrentPage(i + 1); scrollToTop(); }}
                                    className={`text-[11px] font-bold transition-colors ${currentPage === i + 1 ? "text-[#c69955]" : "text-zinc-700 hover:text-zinc-400"}`}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold transition-all ${currentPage === totalPages ? "text-zinc-800 cursor-not-allowed" : "text-white hover:text-[#c69955]"}`}
                        >
                            Siguiente <ChevronRight size={18} />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
