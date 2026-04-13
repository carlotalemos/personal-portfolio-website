import { projects } from "@/lib/data";
import HomeProjectRow from "@/components/HomeProjectRow/HomeProjectRow";

export default function ProjectsGridSection() {
    return (
        <section className="max-w-4xl mx-auto px-8 py-12">
            <div className="mb-8">
                <div className="w-16 h-0.5 bg-white/50 mx-auto mb-8"></div>
            </div>
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <HomeProjectRow
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        technology={project.technology}
                        title={project.title}
                        imageSrc={project.image}
                        imageAlt={project.title}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </div>
        </section>
    );
}
