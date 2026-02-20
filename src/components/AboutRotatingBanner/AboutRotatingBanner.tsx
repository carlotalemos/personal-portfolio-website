import ScrollingText from "@/components/RotatingText/RotatingText";

export default function AboutRotatingBanner() {
    return (
        <div className="mb-20">
            <ScrollingText
                text="welcome — 2º year student — computer engineer — frontend — portfolio — © 2026"
                speed={80}
                className="font-jost text-[25px] tracking-wider text-white/50"
            />
        </div>
    );
}