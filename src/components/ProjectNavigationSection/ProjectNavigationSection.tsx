import Link from "next/link";

export default function ProjectNavigationSection() {
    return (
        <section className="max-w-4xl mx-auto px-8 mb-20">
            <div className="flex items-center justify-center">
                <Link
                    href="/projects"
                    className="flex items-center gap-4"
                >
                    <span className="flex items-center justify-center bg-white text-black w-14 h-14 rounded-full hover:bg-gray-400 transition-colors" aria-hidden="true">
                        <svg
                            className="w-5 h-5 transform rotate-180"
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
                    <span className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-jost font-normal hover:bg-gray-400 transition-colors">
                        BACK TO PROJECTS
                    </span>
                </Link>
            </div>
        </section>
    );
}