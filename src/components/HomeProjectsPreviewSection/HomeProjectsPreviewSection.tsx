import { projects } from "@/lib/data";
import HomeProjectRow from "@/components/HomeProjectRow/HomeProjectRow";

export default function HomeProjectsPreviewSection() {
    const previewProjects = projects.slice(0, 5);

    return (
        <section className="max-w-4xl mx-auto px-8">
            <h2 className="font-bold mt-20 mb-8 text-center font-syncopate text-[30px]">
                projects <span className="text-white/50">—</span> II
            </h2>

            <div className="space-y-8">
                {previewProjects.map((project, index) => (
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
