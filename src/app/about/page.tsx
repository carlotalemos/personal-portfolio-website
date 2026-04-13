import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";

import AboutHeroSection from "@/components/AboutHeroSection/AboutHeroSection";
import PageRotatingBanner from "@/components/PageRotatingBanner/PageRotatingBanner";
import AboutBioSection from "@/components/AboutBioSection/AboutBioSection";
import AboutSkillsSection from "@/components/AboutSkillsSection/AboutSkillsSection";
import AboutLanguagesSection from "@/components/AboutLanguagesSection/AboutLanguagesSection";
import AboutTimelineSection from "@/components/AboutTimelineSection/AboutTimelineSection";
import AboutProjectsButtonsSection from "@/components/AboutProjectsButtonsSection/AboutProjectsButtonsSection";

export const metadata: Metadata = {
    title: "About — Carlota Lemos",
    description: "Computer Engineering student at ISEP, focused on Front-End development with React and Next.js.",
    openGraph: {
        title: "About — Carlota Lemos",
        description: "Computer Engineering student at ISEP, focused on Front-End development with React and Next.js.",
    },
};

export default function AboutPage() {
    return (
        <div className="text-white min-h-screen pt-32">
            <AboutHeroSection />
            <PageRotatingBanner />
            <AboutBioSection />
            <AboutSkillsSection />
            <AboutLanguagesSection />
            <AboutTimelineSection />
            <AboutProjectsButtonsSection />
            <Footer />
        </div>
    );
}
