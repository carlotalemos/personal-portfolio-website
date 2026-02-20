import Image from "next/image";
import Link from "next/link";

import { projects } from "@/lib/data";

export default function HomeProjectsPreviewSection() {
    const cardGap = "48px";
    const projectImageCssWidth = "w-[400px]";
    const projectImageCssHeight = "h-[400px]";
    const projectImageWidth = 400;
    const projectImageHeight = 400;

    const previewProjects = projects.slice(0, 5);

    return (
        <section className="max-w-4xl mx-auto px-8">
            <h2 className="text-5xl font-bold mt-20 mb-8 text-center font-syncopate text-[30px]">
                projects <span className="text-white/50">—</span> II
            </h2>

            <div className="space-y-8">
                {previewProjects.map((project, index) => {
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
                                        className={`${projectImageCssWidth} ${projectImageCssHeight}`}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={projectImageWidth}
                                            height={projectImageHeight}
                                            className="object-cover w-full h-full hover:opacity-80 transition-opacity"
                                        />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    {/* Image on left */}
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className={`${projectImageCssWidth} ${projectImageCssHeight}`}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={projectImageWidth}
                                            height={projectImageHeight}
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
                                            className="text-2xl font-medim mt-2 underline font-jost hover:text-gray-400 transition-colors"
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
    );
}