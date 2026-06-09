import testimonialsData from '../reseñas.json';

export const config = {
    branding: {
        name: "Pragma",
        logo: "/images/logo-white.svg",
        tagline: "Defensa Fiscal & Compliance",
    },
    contact: {
        phone: "+52 222 123 4567",
        email: "defensa@pragma.mx",
        address: "Puebla, México",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.68832049!2d-98.2435!3d19.0553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzE5LjEiTiA5OMKwMTQnNDIuNiJX!5e0!3m2!1sen!2smx!4v1713360000000!5m2!1sen!2smx",
    },
    landingClientId: process.env.NEXT_PUBLIC_LANDING_CLIENT_ID || "villalba-asociados",
    supabase: {
        url: process.env.NEXT_PUBLIC_SUPABASE_URL || "https://csfmrrjklvawxxhddgek.supabase.co",
        anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzZm1ycmprbHZhd3h4aGRkZ2VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMDAxNjUsImV4cCI6MjA4NTU3NjE2NX0.JZvPjloBM70iuC2wfRHTnVEsGwZvdMEadi1GMFdobNk",
    },
    dynamicContent: {
        stats: {
            satisfiedClients: "200+",
            yearsExperience: "20+",
            legalCases: "500+",
            fiscalOptimizations: "150+",
            googleReviews: "42"
        },
        services: [
            {
                id: "01",
                category: "LEGAL",
                title: "Compliance Fiscal Empresarial",
                desc: "Prevención, blindaje y cumplimiento normativo ante autoridades federales.",
                icon: "Shield",
            },
            {
                id: "02",
                category: "LEGAL",
                title: "Defensa Fiscal y Contencioso Administrativo",
                desc: "Representación estratégica frente a créditos y actos de molestia.",
                icon: "Gavel",
            },
            {
                id: "03",
                category: "CONTABLE",
                title: "Acompañamiento Contable Estratégico",
                desc: "Optimización y supervisión para una estructura financiera y fiscal sólida.",
                icon: "TrendingUp",
            }
        ],
        process: [
            {
                step: "01",
                title: "Diagnóstico Estratégico",
                desc: "Evaluamos su situación fiscal, identificamos la posición de la autoridad y determinamos las vulnerabilidades y fortalezas de su caso."
            },
            {
                step: "02",
                title: "Estrategia de Defensa",
                desc: "Diseñamos una hoja de ruta jurídica personalizada: medios de defensa, tiempos procesales y escenarios de resolución."
            },
            {
                step: "03",
                title: "Ejecución y Protección",
                desc: "Implementamos la defensa con litigio agresivo o compliance preventivo según el caso, protegiendo su patrimonio hasta la resolución definitiva."
            }
        ],
        recentCases: [
            {
                title: "Blindaje Fiscal para Grupo Inmobiliario",
                category: "COMPLIANCE FISCAL",
                area: "LEGAL",
                tags: ["Fiscal", "Legal", "Gobernanza", "Blindaje"],
                summary: "Reestructuración integral y compliance fiscal para una de las desarrolladoras más grandes de la región.",
                context: "La empresa enfrentaba riesgos por falta de formalidad en sus procesos operativos y dispersión patrimonial que ponía en duda la validez de acuerdos frente a la autoridad.",
                result: "Se logró la unificación de criterios, protección de socios y un blindaje del 100% ante futuras contingencias o auditorías.",
                image: "/images/assets/blindaje-corporativo.png"
            },
            {
                title: "Acompañamiento Contable Estratégico",
                category: "ESTRATEGIA CONTABLE",
                area: "CONTABLE",
                tags: ["Fiscal", "Contable", "Auditoría", "Optimización"],
                summary: "Reducción de la carga tributaria en un 22% mediante la implementación de estímulos fiscales legales y reordenamiento contable.",
                context: "Pago excesivo de impuestos por procesos ineficientes y falta de aprovechamiento de beneficios sectoriales que mermaban la competitividad operativa.",
                result: "Flujo de caja optimizado y cumplimiento total ante el SAT, logrando una estructura financiera más robusta y líquida para la expansión del grupo.",
                image: "/images/assets/estrategia-fiscal.png"
            },
            {
                title: "Defensa ante Auditoría Federal Directa",
                category: "LITIGIO FISCAL",
                area: "LEGAL",
                tags: ["Litigio", "Fiscal", "Defensa", "SAT"],
                summary: "Anulación de crédito fiscal de 8.5 mdp emitido por la autoridad federal mediante juicio contencioso administrativo.",
                context: "Imputación errónea de ingresos por parte de la autoridad durante una auditoría domiciliaria compleja que amenazaba la estabilidad de la empresa.",
                result: "Sentencia definitiva y firme a favor del cliente, con condonación total de multas y recargos, sentando un precedente en la defensa de sus derechos.",
                image: "/images/assets/defensa-fiscal.png"
            }
        ]
    },
    testimonials: testimonialsData.map(r => ({
        name: r.nombre,
        role: "Google Maps Review",
        text: r.comentario || "Calificación de 5 estrellas con excelencia en el servicio.",
        stars: r.estrellas,
        avatar: r.avatar_url.startsWith('http') ? r.avatar_url : `/${r.avatar_url}`
    }))
};
