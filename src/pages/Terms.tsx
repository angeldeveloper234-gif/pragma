import { motion } from "framer-motion";

export default function Terms() {
    return (
        <div className="bg-[#0d0c0a] min-h-screen">
            <main className="pt-40 pb-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#c69955] font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Regulaciones</span>
                        <h1 className="text-4xl md:text-6xl font-display text-white mb-12 uppercase tracking-tight">
                            Términos de <span className="italic font-light text-[#c69955]">Servicio</span>
                        </h1>

                        <div className="prose prose-invert prose-zinc max-w-none font-sans font-light text-zinc-400 space-y-8">
                            <section>
                                <h2 className="text-white font-display text-2xl uppercase tracking-widest mb-4">1. Aceptación de Términos</h2>
                                <p>
                                    Al acceder a este sitio web y solicitar nuestros servicios, usted acepta estar sujeto a estos términos y condiciones de uso, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de cualquier ley local aplicable.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white font-display text-2xl uppercase tracking-widest mb-4">2. Uso de Licencia</h2>
                                <p>
                                    Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Bañuelos Villalba & Asociados S.C. para visualización transitoria personal y no comercial solamente.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white font-display text-2xl uppercase tracking-widest mb-4">3. Limitaciones</h2>
                                <p>
                                    En ningún caso Bañuelos Villalba & Asociados S.C. o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surja del uso o la imposibilidad de utilizar los materiales en nuestro sitio.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white font-display text-2xl uppercase tracking-widest mb-4">4. Alcance de los Servicios</h2>
                                <p>
                                    La información presentada en este sitio es meramente informativa y no constituye asesoría legal o contable vinculante hasta que se formalice una relación profesional mediante la firma de un contrato de prestación de servicios.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white font-display text-2xl uppercase tracking-widest mb-4">5. Propiedad Intelectual</h2>
                                <p>
                                    Todos los contenidos, diseños, logotipos y textos en este sitio son propiedad exclusiva de Bañuelos Villalba & Asociados S.C. y están protegidos por las leyes de propiedad intelectual internacionales.
                                </p>
                            </section>
                        </div>

                        <div className="mt-20 pt-10 border-t border-white/5">
                            <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-sans italic">
                                Última actualización: 17 de Abril, 2026.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
