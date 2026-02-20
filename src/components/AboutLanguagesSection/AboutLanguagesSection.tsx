import { languages } from "@/lib/data";

export default function AboutLanguagesSection() {
    return (
        <section className="max-w-4xl mx-auto px-8 py-12">
            <h2 className="text-center font-syncopate text-[30px] mb-8">
                languages <span className="text-white/50">—</span> IV
            </h2>
            <div className="space-y-6 max-w-2xl mx-auto">
                {languages.map((lang) => (
                    <div
                        key={lang.name}
                        className="flex items-center justify-between border border-white/50 hover:border-white transition-colors px-6 py-4 rounded"
                    >
                        <span className="text-lg tracking-wide font-jost">{lang.name}</span>
                        <span className="text-white font-jost">{lang.level}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}