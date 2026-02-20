import Footer from "@/components/Footer/Footer";

import ProjectsHeroSection from "@/components/ProjectsHeroSection/ProjectsHeroSection";
import ProjectsRotatingBanner from "@/components/ProjectsRotatingBanner/ProjectsRotatingBanner";
import ProjectsGridSection from "@/components/ProjectsGridSection/ProjectsGridSection";

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