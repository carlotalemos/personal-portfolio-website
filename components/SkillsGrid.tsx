import { skills } from '@/lib/data';

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div 
          key={skill.name}
          className="border border-white/50 px-4 py-6 text-center hover:border-white transition-colors"
        >
          <span className="text-sm tracking-wide">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
