import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";

import PageRotatingBanner from "@/components/PageRotatingBanner/PageRotatingBanner";
import ProjectsGridSection from "@/components/ProjectsGridSection/ProjectsGridSection";
import PageHeroSection from "@/components/PageHeroSection/PageHeroSection";

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
            <PageHeroSection title="projects" />
            <PageRotatingBanner />
            <ProjectsGridSection />
            <Footer />
        </div>
    );
}