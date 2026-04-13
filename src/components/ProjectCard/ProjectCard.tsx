import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`} className="block group">
            <div className="mb-4 aspect-[4/3] relative overflow-hidden bg-gray-900">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:opacity-80 transition-opacity"
                    sizes="(max-width: 768px) 100vw, 400px"
                />
            </div>
            <div className="space-y-2">
        <span className="inline-block text-xs text-gray-500 uppercase tracking-wider border border-gray-700 px-3 py-1">
          {project.technology}
        </span>
                <h3 className="text-lg tracking-wide group-hover:underline">{project.title}</h3>
            </div>
        </Link>
    );
}