import SkillsGrid from "@/components/SkillsGrid/SkillsGrid";

export default function AboutSkillsSection() {
    return (
        <section className="max-w-4xl mx-auto px-8 py-12">
            <h2 className="text-center font-syncopate text-[30px] mb-2">
                skills <span className="text-white/50">—</span> IV
            </h2>
            <div className="mt-12">
                <SkillsGrid />
            </div>
        </section>
    );
}