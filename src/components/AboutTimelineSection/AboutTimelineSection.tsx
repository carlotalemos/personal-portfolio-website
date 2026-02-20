import Timeline from "@/components/Timeline/Timeline";

export default function AboutTimelineSection() {
    return (
        <section className="max-w-4xl mx-auto px-8 py-12">
            <h2 className="text-center font-syncopate text-[30px] mb-8">
                timeline <span className="text-white/50">—</span> V
            </h2>
            <div className="mt-12">
                <Timeline />
            </div>
        </section>
    );
}