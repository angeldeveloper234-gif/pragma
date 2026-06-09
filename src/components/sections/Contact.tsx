import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, ArrowRight, UserCheck } from "lucide-react";
import { config } from "@/config";

const inputBase: React.CSSProperties = {
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

export function Contact() {
    const { contact } = config;
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log("Data", data);
        alert("Mensaje enviado. Un socio de la firma le contactará en breve para su evaluación preliminar.");
    };

    const focusStyle = {
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
        <section id="contact" className="py-28 md:py-40 border-t" style={{ backgroundColor: "#ffffff", borderColor: "#D8DFE9" }}> {/* DI — era py-20 md:py-28 */}
            <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                    className="text-center mb-14"
                >
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                        }}
                        className="text-[11px] tracking-[0.28em] uppercase font-semibold mb-3"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                    >
                        Contacto
                    </motion.p>
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
                        }}
                        className="font-bold leading-tight mb-4"
                        style={{
                            fontFamily: "'Author', sans-serif",
                            fontSize: "clamp(32px, 4.5vw, 48px)", /* DI — era clamp(28px,4vw,40px) */
                            color: "#1A1D26",
                        }}
                    >
                        Hablemos de su Caso
                    </motion.h2>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 12 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
                        className="text-base leading-relaxed mx-auto"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            color: "#4A5568",
                            maxWidth: "480px",
                        }}
                    >
                        Contáctenos para una evaluación preliminar confidencial de su situación fiscal.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="lg:col-span-7 p-8 md:p-12 rounded-xl bg-white"
                        style={{ border: "1.5px solid #D8DFE9" }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { name: "name", label: "Nombre Completo", placeholder: "Ej. Mauricio Castillo", required: true },
                                    { name: "company", label: "Empresa o Institución", placeholder: "Nombre de su organización" },
                                ].map((field) => (
                                    <div key={field.name} className="flex flex-col gap-2">
                                        <label
                                            className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                        >
                                            {field.label}
                                        </label>
                                        <input
                                            {...register(field.name)}
                                            required={field.required}
                                            placeholder={field.placeholder}
                                            style={inputBase}
                                            {...focusStyle}
                                        />
                                    </div>
                                ))}

                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                    >
                                        Especialidad Requerida
                                    </label>
                                    <select
                                        {...register("service")}
                                        style={{ ...inputBase, cursor: "pointer", appearance: "none" as any }}
                                        {...focusStyle}
                                    >
                                        <option value="defensa">Defensa Fiscal Estratégica</option>
                                        <option value="litigio">Litigio Contencioso de Alto Impacto</option>
                                        <option value="cumplimiento">Cumplimiento y Prevención Fiscal</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                    >
                                        Correo Corporativo
                                    </label>
                                    <input
                                        {...register("email")}
                                        required
                                        type="email"
                                        placeholder="contacto@empresa.com"
                                        style={inputBase}
                                        {...focusStyle}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                >
                                    Resumen de la Consulta
                                </label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    placeholder="Describa brevemente el alcance de su necesidad..."
                                    style={{ ...inputBase, resize: "none" }}
                                    onFocus={(e) => { e.target.style.borderColor = "#2C5494"; e.target.style.backgroundColor = "#ffffff"; }}
                                    onBlur={(e) => { e.target.style.borderColor = "#D8DFE9"; e.target.style.backgroundColor = "#F5F7FA"; }}
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                                <button
                                    type="submit"
                                    className="flex items-center gap-3 rounded-lg text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 w-full sm:w-auto justify-center"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "12px",
                                        letterSpacing: "0.08em",
                                        backgroundColor: "#2C5494",
                                        padding: "14px 32px",
                                    }}
                                >
                                    Solicitar Evaluación
                                    <ArrowRight size={15} />
                                </button>
                                <p
                                    className="text-[10px] uppercase tracking-widest font-semibold leading-relaxed text-center sm:text-left"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "#8896AB" }}
                                >
                                    Respuesta garantizada<br />en menos de 24 horas hábiles.
                                </p>
                            </div>
                        </form>
                    </motion.div>

                    {/* Info card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
                        className="lg:col-span-5 rounded-xl p-10 text-white"
                        style={{ backgroundColor: "#0F2240" }}
                    >
                        <UserCheck size={40} className="mb-8" style={{ color: "rgba(255,255,255,0.7)" }} />
                        <h3
                            className="font-bold leading-tight mb-8"
                            style={{ fontFamily: "'Author', sans-serif", fontSize: "26px", color: "#ffffff" }}
                        >
                            Sinergia<br />Profesional
                        </h3>

                        <div className="space-y-6">
                            {[
                                { Icon: MapPin, text: "Torre Omega, Centro Mayor,\nCalz Zavaleta, Puebla, Pue." },
                                { Icon: Phone, text: contact.phone },
                                { Icon: Mail, text: contact.email },
                            ].map(({ Icon, text }, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <Icon size={18} className="shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                                    <span
                                        className="text-sm leading-relaxed whitespace-pre-line"
                                        style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.75)" }}
                                    >
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div
                            className="mt-10 flex items-center gap-3 px-4 py-3 rounded-lg w-fit"
                            style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                        >
                            <img src="/images/icons8-google-96.svg" alt="Google" className="w-4 h-4" />
                            <span
                                className="text-[9px] font-bold tracking-[0.25em] uppercase"
                                style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)" }}
                            >
                                5.0 · +42 Reseñas Google
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
