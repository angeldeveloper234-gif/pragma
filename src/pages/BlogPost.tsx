import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Clock, User, Share2, Quote } from "lucide-react";
import { ALL_POSTS } from "./Blog";

export default function BlogPost() {
    const { slug } = useParams();

    // Find post in ALL_POSTS or the featured one
    const post = ALL_POSTS.find(p => p.slug === slug) || (slug === "inteligencia-corporativa-era-digital" ? {
        title: "Inteligencia Corporativa en la era Digital",
        category: "TECNOLOGÍA",
        date: "20 Oct, 2026",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200",
        content: `
            <p class="mb-10 text-xl font-light leading-relaxed">En el dinámico panorama empresarial de México, la intersección entre la tecnología y el rigor jurídico está definiendo una nueva era de transparencia y eficiencia. Ya no basta con cumplir; las firmas líderes están utilizando herramientas digitales para anticipar riesgos y optimizar la toma de decisiones.</p>
            
            <h2 class="text-3xl font-display text-[#0d0c0a] mt-20 mb-10 border-b border-zinc-200 pb-4">La Automatización del Cumplimiento</h2>
            <p class="mb-8">El cumplimiento normativo (compliance) ha dejado de ser un proceso reactivo basado en papel. Hoy, algoritmos de monitoreo continuo permiten a las empresas identificar desviaciones fiscales o legales en tiempo real, antes de que se conviertan en contingencias costosas.</p>
            
            <div class="my-20 bg-zinc-50 p-12 relative border-l-4 border-[#c69955]">
               <p class="italic text-2xl font-display text-zinc-900 leading-tight">"La inteligencia corporativa no es solo recolectar datos, es transformarlos en certeza jurídica y solidez financiera."</p>
               <span class="block mt-6 text-[10px] tracking-widest uppercase font-bold text-[#c69955]">Dirección General</span>
            </div>

            <h2 class="text-3xl font-display text-[#0d0c0a] mt-20 mb-10">Transparencia Financiera 4.0</h2>
            <p class="mb-8 font-sans font-light">La digitalización de los procesos contables ha eliminado las cajas negras del pasado. Para una firma boutique, ofrecer visibilidad total a sus clientes sobre su estado financiero y sus obligaciones tributarias es el estándar de oro de la confianza profesional.</p>
            
            <p class="mb-8">El entorno empresarial contemporáneo exige una visión integral que combine la precisión técnica de la contabilidad con la firmeza del marco legal mexicano. En <strong>Bañuelos Villalba & Asociados</strong>, entendemos que cada decisión corporativa tiene repercusiones en múltiples dimensiones.</p>
        `
    } : null);

    if (!post) return (
        <div className="bg-[#0d0c0a] min-h-screen flex items-center justify-center">
            <Link to="/blog" className="text-[#c69955] font-display text-xl border-b border-[#c69955] pb-2">Articulo no encontrado. Volver.</Link>
        </div>
    );

    return (
        <div className="bg-[#F9F8F6] min-h-screen text-zinc-800 font-sans selection:bg-[#c69955] selection:text-white">
            {/* Reading Progress Placeholder */}
            <div className="fixed top-0 left-0 w-full h-[3px] bg-zinc-100 z-50">
                <motion.div className="h-full bg-[#c69955]" initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1.5 }} />
            </div>

            <main className="pt-48 pb-40">
                <article className="container mx-auto px-6 max-w-4xl">
                    {/* Header Layout */}
                    <div className="mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-6 mb-12"
                        >
                            <Link to="/blog" className="flex items-center gap-3 text-zinc-400 hover:text-black transition-colors text-[10px] tracking-[0.3em] uppercase font-bold">
                                <ChevronLeft size={16} /> Regresar
                            </Link>
                            <span className="w-12 h-[1px] bg-zinc-200" />
                            <span className="text-[#c69955] text-[10px] tracking-[0.3em] uppercase font-bold">{post.category}</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display text-[#0d0c0a] leading-[1.1] mb-12 tracking-tight"
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap items-center gap-10 py-8 border-y border-zinc-100"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#0d0c0a] flex items-center justify-center overflow-hidden">
                                     <User className="text-white opacity-20" size={20} />
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest font-bold">Autoría</span>
                                    <span className="text-xs text-zinc-500">Socio de la Firma</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase font-bold text-zinc-400">
                                <Clock size={14} /> {post.date} — 5 min lectura
                            </div>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-24 aspect-[21/10] overflow-hidden grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
                    >
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Content Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
                        {/* Sidebar */}
                        <aside className="lg:col-span-1 hidden lg:block sticky top-60 h-fit">
                            <div className="flex flex-col gap-10">
                                <button className="text-zinc-300 hover:text-[#c69955] transition-colors"><Share2 size={20} /></button>
                                <Quote className="text-zinc-100" size={40} />
                            </div>
                        </aside>

                        {/* Text */}
                        <div className="lg:col-span-11 prose prose-zinc prose-lg max-w-none text-zinc-700 font-light leading-relaxed">
                            {"content" in post ? (
                                <div dangerouslySetInnerHTML={{ __html: post.content as string }} />
                            ) : (
                                <>
                                    <p className="mb-10 text-2xl font-light italic text-zinc-900 border-l-2 border-[#c69955] pl-8 py-2 leading-relaxed">{post.excerpt}</p>
                                    <p className="mb-8">El entorno empresarial contemporáneo exige una visión integral que combine la precisión técnica de la contabilidad con la firmeza del marco legal mexicano.</p>
                                    {/* Additional generic content as needed */}
                                </>
                            )}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-40 border-t border-zinc-200 pt-20 flex flex-col items-center text-center">
                        <span className="text-[#c69955] text-[10px] tracking-[0.5em] uppercase font-bold mb-6">Próximo paso</span>
                        <h3 className="text-4xl font-display text-[#0d0c0a] mb-12">¿Necesita asesoría especializada <br />sobre este tema?</h3>
                        <Link to="/#contact" className="bg-[#0d0c0a] text-white px-12 py-5 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#c69955] transition-all duration-300">
                            Agendar consulta profesional
                        </Link>
                    </div>
                </article>
            </main>
        </div>
    );
}
