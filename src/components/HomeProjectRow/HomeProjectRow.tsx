import Image from "next/image";

type Props = {
    gap: string;
    reverse?: boolean;

    technology: string;
    title: string;
    titleClassName?: string;

    imageSrc: string;
    imageAlt: string;

    projectImageCssWidth: string;
    projectImageCssHeight: string;
    projectImageWidth: number;
    projectImageHeight: number;
};

export default function HomeProjectRow({
                                           gap,
                                           reverse = false,
                                           technology,
                                           title,
                                           titleClassName = "text-2xl font-medium mt-2 underline font-jost",
                                           imageSrc,
                                           imageAlt,
                                           projectImageCssWidth,
                                           projectImageCssHeight,
                                           projectImageWidth,
                                           projectImageHeight,
                                       }: Props) {
    if (!reverse) {
        return (
            <div className="flex items-center" style={{ gap }}>
                <div className="flex-1 flex flex-col justify-center text-right">
          <span className="text-xs text-white/50 uppercase tracking-wider">
            {technology}
          </span>
                    <h3 className={titleClassName}>{title}</h3>
                </div>
                <div className={`${projectImageCssWidth} ${projectImageCssHeight}`}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={projectImageWidth}
                        height={projectImageHeight}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center" style={{ gap }}>
            <div className={`${projectImageCssWidth} ${projectImageCssHeight}`}>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={projectImageWidth}
                    height={projectImageHeight}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="flex-1 flex flex-col justify-center text-left">
        <span className="text-xs text-white/50 uppercase tracking-wider">
          {technology}
        </span>
                <h3 className={titleClassName}>{title}</h3>
            </div>
        </div>
    );
}