import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";

import HomeHeroSection from "@/components/HomeHeroSection/HomeHeroSection";
import HomeRotatingBanner from "@/components/HomeRotatingBanner/HomeRotatingBanner";
import HomeAboutPreviewSection from "@/components/HomeAboutPreviewSection/HomeAboutPreviewSection";
import HomeProjectsPreviewSection from "@/components/HomeProjectsPreviewSection/HomeProjectsPreviewSection";
import { siteUrl } from "@/lib/config";

export const metadata: Metadata = {
    title: "Carlota Lemos — Portfolio",
    description:
        "Computer Engineering student at ISEP, focused on Front-End development with React and Next.js.",
    openGraph: {
        title: "Carlota Lemos — Portfolio",
        description:
            "Computer Engineering student at ISEP, focused on Front-End development with React and Next.js.",
        images: [{ url: `${siteUrl}/profile-image.png` }],
    },
};

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