interface PageHeroSectionProps {
    title: string;
}

export default function PageHeroSection({ title }: PageHeroSectionProps) {
    return (
        <section className="relative flex items-center justify-center mb-8">
            <div className="relative z-10 w-full">
                <h1 className="text-center font-syncopate text-[60px] leading-none tracking-tighter">
                    {title}
                </h1>
            </div>
        </section>
    );
}
