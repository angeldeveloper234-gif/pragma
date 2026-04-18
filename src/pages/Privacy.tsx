import { motion } from "framer-motion";

export default function Privacy() {
    return (
        <div className="bg-[#0d0c0a] min-h-screen">
            <main className="pt-40 pb-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#c69955] font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Legal</span>
                        <h1 className="text-4xl md:text-6xl font-display text-white mb-12 uppercase tracking-tight">
                            Aviso de <span className="italic font-light text-[#c69955]">Privacidad</span>
                        </h1>

                        <div className="prose prose-invert prose-zinc max-w-none font-sans font-light text-zinc-400 space-y-8">
                            <section>
                                <h2 className="text-white font-display text-2xl uppercase tracking-widest mb-4">1. Identidad ante la Ley</h2>
                                <p>
                                    Bañuelos Villalba & Asociados S.C., en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, es responsable del tratamiento de sus datos personales. Nuestra firma tiene su domicilio establecido en Torre Omega, Centro Mayor, Calz Zavaleta, Puebla, Pue.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white font-display text-2xl uppercase tracking-widest mb-4">2. Finalidad del Tratamiento</h2>
                                <p>
                                    Los datos personales que recabamos tienen como finalidad principal:
                                </p>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li>Proveer los servicios legales y contables solicitados.</li>
                                    <li>Notificar sobre cambios en los servicios contratados.</li>
                                    <li>Dar cumplimiento a obligaciones contraídas con nuestros clientes.</li>
                                    <li>Realizar evaluaciones periódicas de nuestros servicios a efecto de mejorar la calidad de los mismos.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-white font-display text-2xl uppercase tracking-widest mb-4">3. Datos Personales Recabados</h2>
                                <p>
                                    Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas: vía nuestro sitio web, telefónicamente o personalmente. Los datos incluyen: Nombre, Empresa, Correo Electrónico, Teléfono y Detalles del caso o consulta financiera.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white font-display text-2xl uppercase tracking-widest mb-4">4. Derechos ARCO</h2>
                                <p>
                                    Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white font-display text-2xl uppercase tracking-widest mb-4">5. Cambios al Aviso</h2>
                                <p>
                                    El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.
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
