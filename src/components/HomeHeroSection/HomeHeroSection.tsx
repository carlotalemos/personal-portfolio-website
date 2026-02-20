import ScrollingText from "@/components/RotatingText/RotatingText";
import Image from "next/image";

export default function HomeHeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center">
            <div
                className="absolute left-1/2 z-0 pointer-events-none"
                style={{
                    top: "-400px",
                    left: "52%",
                    transform: "translateX(-50%)",
                    width: "1200px",
                    height: "3000px",
                }}
            >
                <Image
                    src="/profile-image.png"
                    alt="Carlota Lemos"
                    width={1200}
                    height={3000}
                    priority
                    unoptimized
                    className="object-contain w-full"
                />
            </div>

            <div className="relative z-10 w-full -mt-0 md:-mt-8 lg:-mt-14">
                <ScrollingText
                    text="carlota lemos"
                    speed={80}
                    className="font-syncopate text-[128px] leading-none tracking-tighter"
                />
            </div>
        </section>
    );
}