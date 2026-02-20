import ScrollingText from '@/components/RotatingText';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
    const cardGap = '48px'; // mesmo gap da página principal

    return (
        <div className="text-white min-h-screen pt-32">
            {/* Hero section */}
            <section className="relative flex items-center justify-center mb-8">
                <div className="relative z-10 w-full">
                    <h1 className="text-center font-syncopate text-[60px] leading-none tracking-tighter">
                        projects
                    </h1>
                </div>
            </section>

            {/* Rotating banner */}
            <div className="mb-20">
                <ScrollingText
                    text="welcome — 2º year student — computer engineer — frontend — portfolio — © 2026"
                    speed={80}
                    className="font-jost text-[25px] tracking-wider text-white/50"
                />
            </div>

            {/* Projects Grid */}
            <section className="max-w-4xl mx-auto px-8">
                <div className="space-y-8">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={project.slug}
                                className="flex items-center"
                                style={{ gap: cardGap }}
                            >
                                {isEven ? (
                                    <>
                                        {/* Text on left */}
                                        <div className="flex-1 flex flex-col justify-center text-right">
                                            <span className="text-xs text-white/50 uppercase tracking-wider">
                                                {project.technology}
                                            </span>
                                            <Link
                                                href={`/projects/${project.slug}`}
                                                className="text-2xl font-medium mt-2 underline font-jost hover:text-gray-400 transition-colors"
                                            >
                                                {project.title}
                                            </Link>
                                        </div>
                                        {/* Image on right */}
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="w-[400px] h-[400px]"
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={400}
                                                height={400}
                                                className="object-cover w-full h-full hover:opacity-80 transition-opacity"
                                            />
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        {/* Image on left */}
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="w-[400px] h-[400px]"
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={400}
                                                height={400}
                                                className="object-cover w-full h-full hover:opacity-80 transition-opacity"
                                            />
                                        </Link>
                                        {/* Text on right */}
                                        <div className="flex-1 flex flex-col justify-center text-left">
                                            <span className="text-xs text-white/50 uppercase tracking-wider">
                                                {project.technology}
                                            </span>
                                            <Link
                                                href={`/projects/${project.slug}`}
                                                className="text-2xl font-medium mt-2 underline font-jost hover:text-gray-400 transition-colors"
                                            >
                                                {project.title}
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}