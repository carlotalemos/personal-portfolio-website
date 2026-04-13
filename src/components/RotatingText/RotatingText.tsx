interface ScrollingTextProps {
    text: string;
    className?: string;
    speed?: number;
}

export default function ScrollingText({ text, className = '', speed = 100 }: ScrollingTextProps) {
    const duration = `${speed}s`;

    return (
        <div className={`overflow-hidden whitespace-nowrap ${className}`}>
            <div className="inline-block animate-scroll" style={{ animationDuration: duration }}>
                <span className="inline-block px-4">{text}</span>
                <span className="inline-block px-4" aria-hidden="true">{text}</span>
            </div>
        </div>
    );
}