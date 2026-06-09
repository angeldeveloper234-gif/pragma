import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export function Home() {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <Hero />
            <Stats />
            <Features />
            <Testimonials />
            <FAQ />
            <Team />
            <CTA />
            <Contact />
        </main>
    );
}
