import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function HomeAboutPreviewSection() {
    return (
        <section className="max-w-4xl mx-auto px-8 py-20">
            <h2 className="relative z-20 font-bold mt-20 mb-8 text-center font-syncopate text-[30px]">
                about <span className="text-white/50">—</span> I
            </h2>

            <p className="text-white text-lg leading-relaxed mb-6 font-jost font-medium text-[22px]">
                {personalInfo.bio}
            </p>

            <p className="text-white/50 text-base leading-relaxed mb-8 font-jost font-medium text-[22px]">
                {personalInfo.bioHomeExtended}
            </p>

            <div className="flex items-center justify-center mt-8">
                <Link
                    href="/about"
                    className="flex items-center gap-4"
                >
                    <span className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-jost font-normal hover:bg-gray-400 transition-colors">
                        MORE ABOUT ME
                    </span>
                    <span className="flex items-center justify-center bg-white text-black w-14 h-14 rounded-full hover:bg-gray-400 transition-colors" aria-hidden="true">
                        <svg
                            className="w-5 h-5 transform rotate-320"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                </Link>
            </div>
        </section>
    );
}