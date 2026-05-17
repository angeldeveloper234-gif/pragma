import BlogPost from '@/views/BlogPost';

// Define the static paths to be pre-rendered at build time
export function generateStaticParams() {
  return [
    { slug: 'nueva-reforma-fiscal-2026' },
    { slug: 'proteccion-patrimonial-2026' },
    { slug: 'auditorias-sat-guia-preventiva' },
    { slug: 'compliance-laboral-retos-2026' },
    { slug: 'inversion-extranjera-mexico-2026' },
    { slug: 'gestion-activos-intangibles' },
    { slug: 'contratos-outsourcing-realidades' },
    { slug: 'fusiones-adquisiciones-due-diligence' },
    { slug: 'eficiencia-administrativa-digital' },
    { slug: 'inteligencia-corporativa-era-digital' }
  ];
}

export default function Page() {
  return <BlogPost />;
}
