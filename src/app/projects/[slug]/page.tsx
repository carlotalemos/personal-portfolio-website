import { notFound } from "next/navigation";

import Footer from "@/components/Footer/Footer";
import ProjectDetailsSection from "@/components/ProjectDetailsSection/ProjectDetailsSection";
import ProjectGallerySection from "@/components/ProjectGallerySection/ProjectGallerySection";
import ProjectNavigationSection from "@/components/ProjectNavigationSection/ProjectNavigationSection";

import { projects } from "@/lib/data";

type ProjectPageProps = {
    params: Promise<{ slug: string }>;
};

function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug) ?? null;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    const project = getProjectBySlug(slug);
    if (!project) notFound();

    return (
        <div className="text-white min-h-screen pt-32">
            <ProjectDetailsSection project={project} />
            <ProjectGallerySection project={project} />
            <ProjectNavigationSection />
            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params;

    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} - Carlota Lemos`,
        description: project.description,
    };
}