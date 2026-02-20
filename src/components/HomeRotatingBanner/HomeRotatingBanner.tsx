import ScrollingText from "@/components/RotatingText/RotatingText";

export default function HomeRotatingBanner() {
    return (
        <div className="-mt-105 md:-mt-113 lg:-mt-90">
            <ScrollingText
                text="welcome — 2º year student — computer engineer — frontend — portfolio — © 2026"
                speed={80}
                className="font-jost text-[25px] tracking-wider text-white/50"
            />
        </div>
    );
}