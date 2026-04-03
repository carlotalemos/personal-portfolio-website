import Link from "next/link";

export default function HomeAboutPreviewSection() {
    return (
        <section className="max-w-4xl mx-auto px-8 py-20">
            <h2 className="relative z-20 text-5xl font-bold mt-20 mb-8 text-center font-syncopate text-[30px]">
                about <span className="text-white/50">—</span> I
            </h2>

            <p className="text-white text-lg leading-relaxed mb-6 font-jost font-medium text-[22px]">
                I&apos;m Carlota Lemos, a Computer Engineering student, building a strong
                academic foundation in software engineering while focusing on Front-End
                development to create seamless and user-friendly digital experiences.
            </p>

            <p className="text-white/50 text-base leading-relaxed mb-8 font-jost font-medium text-[22px]">
                I am currently pursuing a bachelor&apos;s degree in Computer Engineering
                at Instituto Superior de Engenharia do Porto (ISEP), expected to be
                completed in 2027. Since the beginning of my studies, I have been
                particularly drawn to Front-End development, where I discovered the
                perfect balance between creativity and technology. I enjoy working with
                React and modern web technologies to build intuitive interfaces, while
                strengthening my foundation in Java, an essential part of my academic
                journey.
            </p>

            <div className="flex items-center justify-center gap-4 mt-8">
                <Link
                    href="/about"
                    className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-jost font-normal hover:bg-gray-400 transition-colors"
                >
                    MORE ABOUT ME
                </Link>

                <Link
                    href="/about"
                    aria-label="next"
                    className="flex items-center justify-center bg-white text-black w-14 h-14 rounded-full hover:bg-gray-400 transition-colors"
                >
                    <svg
                        className="w-5 h-5 transform rotate-320"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    );
}