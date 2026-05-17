import { Hero } from "@/components/sections/Hero";
import { Roadmap } from "@/components/sections/Roadmap";
import { Stats } from "@/components/sections/Stats";
import { Pricing } from "@/components/sections/Pricing";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/features/CustomCursor";

export function Home() {
    return (
        <main className="relative min-h-screen overflow-x-hidden selection:bg-[#c69955] selection:text-black">
            <Hero />
            <Stats />
            <Pricing />
            <Features />
            <Roadmap />
            <Testimonials />
            <FAQ />
            <CTA />
            <Contact />

            {/* Active Features */}
            <CustomCursor />
        </main>
    );
}
