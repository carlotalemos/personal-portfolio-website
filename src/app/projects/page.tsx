import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";

import ProjectsHeroSection from "@/components/ProjectsHeroSection/ProjectsHeroSection";
import ProjectsRotatingBanner from "@/components/ProjectsRotatingBanner/ProjectsRotatingBanner";
import ProjectsGridSection from "@/components/ProjectsGridSection/ProjectsGridSection";

export const metadata: Metadata = {
    title: "Projects — Carlota Lemos",
    description: "A showcase of my academic and personal projects in software engineering and front-end development.",
    openGraph: {
        title: "Projects — Carlota Lemos",
        description: "A showcase of my academic and personal projects in software engineering and front-end development.",
    },
};

export default function ProjectsPage() {
    return (
        <div className="text-white min-h-screen pt-32">
            <ProjectsHeroSection />
            <ProjectsRotatingBanner />
            <ProjectsGridSection />
            <Footer />
        </div>
    );
}
