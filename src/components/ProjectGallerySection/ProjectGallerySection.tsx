import Image from "next/image";

import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

type Props = {
    project: Project;
};

export default function ProjectGallerySection({ project }: Props) {
    return (
        <>
            {project.images && project.images.length > 0 && (
                <section className="w-full mb-20">
                    <div className="max-w-4xl mx-auto px-8 mb-6">
                        <h2 className="text-2xl font-normal text-center font-syncopate">
                            project gallery
                        </h2>
                    </div>

                    <div className="overflow-x-auto scrollbar-hide">
                        <div
                            className="flex gap-6 px-8 pb-4"
                            style={{ width: "max-content" }}
                        >
                            {project.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                                    style={{
                                        width: "600px",
                                        height: "320px",
                                    }}
                                >
                                    <Image
                                        src={image}
                                        alt={`${project.title} - Image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="600px"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto px-8 mt-4">
                        <p className="text-white/50 text-sm text-center font-jost">
                            ← Scroll horizontally to view some images →
                        </p>
                    </div>
                </section>
            )}
        </>
    );
}