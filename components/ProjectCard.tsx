import Link from 'next/link';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <div className="mb-4 aspect-[4/3] bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm">
          [Project Image]
        </div>
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
