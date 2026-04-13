import Footer from "@/components/Footer/Footer";

import HomeHeroSection from "@/components/HomeHeroSection/HomeHeroSection";
import HomeRotatingBanner from "@/components/HomeRotatingBanner/HomeRotatingBanner";
import HomeAboutPreviewSection from "@/components/HomeAboutPreviewSection/HomeAboutPreviewSection";
import HomeProjectsPreviewSection from "@/components/HomeProjectsPreviewSection/HomeProjectsPreviewSection";

export default function Home() {
    return (
        <div className="text-white min-h-screen pt-64 items-center">
            <HomeHeroSection />
            <HomeRotatingBanner />
            <HomeAboutPreviewSection />
            <HomeProjectsPreviewSection />
            <Footer />
        </div>
    );
}