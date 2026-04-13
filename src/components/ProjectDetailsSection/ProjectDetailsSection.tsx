import { Project } from "@/lib/types";

type Props = {
    project: Project;
};

export default function ProjectDetailsSection({ project }: Props) {
    return (
        <section className="max-w-4xl mx-auto px-8 mb-16">
            <h1 className="text-3xl md:text-5xl font-bold tracking-wide font-jost mb-12">
                {project.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
                {project.date && (
                    <div>
                        <h3 className="text-sm text-blue-400 uppercase tracking-wider mb-2 font-jost">
                            Date
                        </h3>
                        <p className="text-white/70 font-jost text-sm">{project.date}</p>
                    </div>
                )}
            </div>

            {project.technologies && project.technologies.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-sm text-blue-400 uppercase tracking-wider mb-4 font-jost">
                        Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 border border-white/20 rounded-full text-white/70 text-sm font-jost hover:border-white/40 hover:text-white transition-colors"
                            >
                {tech}
              </span>
                        ))}
                    </div>
                </div>
            )}

            {(project.githubURL || project.certificate) && (
                <div className="mb-16 flex flex-wrap gap-4">
                    {project.githubURL && (
                        <a
                            href={project.githubURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-jost font-normal hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            VIEW ON GITHUB
                        </a>
                    )}

                    {project.certificate && (
                        <a
                            href={project.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-jost font-normal hover:bg-white/20 transition-colors"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>
                            VIEW CERTIFICATE OF MERIT
                        </a>
                    )}

                    {project.figmaURL && (
                        <a
                            href={project.figmaURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-jost font-normal hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 2a3 3 0 0 0 0 6h3V2H8zm0 8a3 3 0 1 0 0 6h3v-6H8zm0 8a3 3 0 1 0 3 3v-3H8zm5-16v6h3a3 3 0 1 0 0-6h-3zm3 8h-3v3a3 3 0 1 0 3-3z" />
                            </svg>
                            VIEW ON FIGMA
                        </a>
                    )}

                    {project.websiteURL && (
                        <a
                            href={project.websiteURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-jost font-normal hover:bg-white/20 transition-colors"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                            VIEW WEBSITE
                        </a>
                    )}
                </div>
            )}

            {project.description && (
                <div className="mb-16">
                    <h2 className="text-2xl font-normal mb-12 text-center font-syncopate">
                        about this project
                    </h2>
                    <p className="text-white/50 text-[20px] leading-relaxed font-jost">
                        {project.description}
                    </p>
                </div>
            )}

            {project.features && project.features.length > 0 && (
                <div className="mb-20">
                    <h2 className="text-2xl font-normal mb-12 text-center font-syncopate">
                        key features
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.features.map((feature, index) => (
                            <div
                                key={feature}
                                className="group relative border-l-2 border-white/10 pl-6 py-4 hover:border-white/30 transition-all duration-300"
                            >
                                <div className="absolute -left-1 top-0 text-7xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300 font-syncopate">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <p className="relative text-white/70 text-[20px] font-jost leading-relaxed group-hover:text-white transition-colors">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}