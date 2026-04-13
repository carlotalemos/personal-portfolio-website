import Image from "next/image";
import Link from "next/link";

type Props = {
    href: string;
    technology: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
};

export default function HomeProjectRow({
                                           href,
                                           technology,
                                           title,
                                           imageSrc,
                                           imageAlt,
                                           reverse = false,
                                       }: Props) {
    const textBlock = (
        <div className={`flex-1 flex flex-col justify-center ${reverse ? "text-left" : "text-right"}`}>
            <span className="text-xs text-white/50 uppercase tracking-wider">
                {technology}
            </span>
            <Link
                href={href}
                className="text-2xl font-medium mt-2 underline font-jost hover:text-gray-400 transition-colors"
            >
                {title}
            </Link>
        </div>
    );

    const imageBlock = (
        <Link href={href} className="w-[400px] h-[400px] flex-shrink-0">
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={400}
                className="object-cover w-full h-full hover:opacity-80 transition-opacity"
            />
        </Link>
    );

    return (
        <div className="flex items-center gap-12">
            {reverse ? (
                <>
                    {imageBlock}
                    {textBlock}
                </>
            ) : (
                <>
                    {textBlock}
                    {imageBlock}
                </>
            )}
        </div>
    );
}