import testimonialsData from '../reseñas.json';

export const config = {
    branding: {
        name: "Bañuelos Villalba & Asociados S.C.",
        logo: "/images/logo-white.svg",
        tagline: "Excelencia Legal y Precisión Contable",
    },
    contact: {
        phone: "+52 222 435 7172",
        email: "contacto@banuelosvillalba.com",
        address: "Torre Omega, Centro Mayor, Calz Zavaleta, Puebla",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.68832049!2d-98.2435!3d19.0553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzE5LjEiTiA5OMKwMTQnNDIuNiJX!5e0!3m2!1sen!2smx!4v1713360000000!5m2!1sen!2smx",
    },
    landingClientId: import.meta.env.VITE_LANDING_CLIENT_ID || "villalba-asociados",
    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL || "https://csfmrrjklvawxxhddgek.supabase.co",
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzZm1ycmprbHZhd3h4aGRkZ2VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMDAxNjUsImV4cCI6MjA4NTU3NjE2NX0.JZvPjloBM70iuC2wfRHTnVEsGwZvdMEadi1GMFdobNk",
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
            // Legal Category
            {
                id: "01",
                category: "LEGAL",
                title: "Derecho Corporativo",
                desc: "Constitución de sociedades, contratos y fusiones estratégicas.",
                icon: "Building",
            },
            {
                id: "02",
                category: "LEGAL",
                title: "Litigio Estratégico",
                desc: "Representación civil, mercantil y administrativa de alto nivel.",
                icon: "Gavel",
            },
            {
                id: "03",
                category: "LEGAL",
                title: "Defensa Fiscal",
                desc: "Protección integral ante auditorías y controversias tributarias.",
                icon: "Shield",
            },
            // Accounting Category
            {
                id: "04",
                category: "CONTABLE",
                title: "Planeación Fiscal",
                desc: "Optimización estratégica de cargas tributarias dentro del marco legal.",
                icon: "TrendingUp",
            },
            {
                id: "05",
                category: "CONTABLE",
                title: "Auditoría Contable",
                desc: "Evaluación profunda de la salud financiera de su organización.",
                icon: "Search",
            },
            {
                id: "06",
                category: "CONTABLE",
                title: "Cumplimiento Normativo",
                desc: "Gestión de obligaciones fiscales y nóminas sin margen de error.",
                icon: "CheckCircle",
            }
        ],
        process: [
            {
                step: "01",
                title: "Diagnóstico Inicial",
                desc: "Evaluamos su situación legal y financiera para identificar riesgos y áreas de oportunidad."
            },
            {
                step: "02",
                title: "Estrategia Integral",
                desc: "Diseñamos una hoja de ruta personalizada que combina soluciones jurídicas y contables."
            },
            {
                step: "03",
                title: "Ejecución y Blindaje",
                desc: "Implementamos las acciones necesarias para proteger su patrimonio y asegurar el cumplimiento."
            }
        ],
        recentCases: [
            {
                title: "Blindaje Corporativo para Grupo Inmobiliario",
                category: "DERECHO CORPORATIVO",
                area: "LEGAL",
                tags: ["Corporativo", "Legal", "Gobernanza", "Blindaje"],
                summary: "Reestructuración total de actas de asamblea y gobierno corporativo para una de las desarrolladoras más grandes de la región.",
                context: "La empresa enfrentaba riesgos por falta de formalidad en sus procesos de toma de decisiones y dispersión patrimonial que ponía en duda la validez de acuerdos previos.",
                result: "Se logró la unificación de criterios, protección de socios minoritarios y un blindaje del 100% ante futuras contingencias legales y operativas.",
                image: "/images/assets/blindaje-corporativo.png"
            },
            {
                title: "Optimización Fiscal de Cadena Comercial",
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
            },
            {
                title: "Compliance Laboral para Fintech",
                category: "DERECHO LABORAL",
                area: "LEGAL",
                tags: ["Laboral", "Compliance", "Digital", "RH"],
                summary: "Implementación de NOM-035 y esquemas de teletrabajo para 150 empleados distribuidos en el país.",
                context: "Desfase en la normativa laboral vigente y riesgos de multas de la STPS por falta de protocolos preventivos y manuales de operación digital.",
                result: "Cumplimiento al 100% de la normativa, reducción de rotación de talento y blindaje patronal ante demandas injustificadas durante la transición híbrida.",
                image: "/images/assets/cumplimiento-laboral.png"
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
