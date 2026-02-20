import Footer from "@/components/Footer/Footer";

import AboutHeroSection from "@/components/AboutHeroSection/AboutHeroSection";
import AboutRotatingBanner from "@/components/AboutRotatingBanner/AboutRotatingBanner";
import AboutBioSection from "@/components/AboutBioSection/AboutBioSection";
import AboutSkillsSection from "@/components/AboutSkillsSection/AboutSkillsSection";
import AboutLanguagesSection from "@/components/AboutLanguagesSection/AboutLanguagesSection";
import AboutTimelineSection from "@/components/AboutTimelineSection/AboutTimelineSection";
import AboutProjectsButtonsSection from "@/components/AboutProjectsButtonsSection/AboutProjectsButtonsSection";

export default function AboutPage() {
    return (
        <div className="text-white min-h-screen pt-32">
            <AboutHeroSection />
            <AboutRotatingBanner />
            <AboutBioSection />
            <AboutSkillsSection />
            <AboutLanguagesSection />
            <AboutTimelineSection />
            <AboutProjectsButtonsSection />
            <Footer />
        </div>
    );
}