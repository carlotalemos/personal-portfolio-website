import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function AboutBioSection() {
    return (
        <section className="max-w-4xl mx-auto px-8 py-12">
            <div className="mb-8">
                <div className="w-16 h-0.5 bg-white/50 mx-auto mb-8"></div>
            </div>

            <p className="text-white text-lg leading-relaxed mb-6 font-jost font-medium text-[22px]">
                {personalInfo.bio}
            </p>

            <p className="text-white/50 text-base leading-relaxed mb-8 font-jost font-medium text-[22px]">
                {personalInfo.bioParagraph2}
            </p>

            <div className="flex justify-center mt-3">
                <Link
                    href="/docs/cv.pdf"
                    className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-jost font-normal hover:bg-gray-400 transition-colors"
                >
                    VIEW CV
                </Link>
            </div>
        </section>
    );
}