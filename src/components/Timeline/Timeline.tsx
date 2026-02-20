import { timeline } from '@/lib/data';

export default function Timeline() {
  return (
      <div className="space-y-16">
        {timeline.map((item, index) => (
            <div key={index} className="space-y-6">
              {/* Title */}
              <h3 className="text-3xl md:text-4xl tracking-wide font-jost font-bold">
                {item.title}
              </h3>

              {/* Organization and Date */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-white/50 font-jost font-light">
            <span className="text-sm md:text-base tracking-wide uppercase">
              {item.organization}
            </span>
                <span className="text-sm md:text-base tracking-wide uppercase">
              {item.date}
            </span>
              </div>

              {/* Description */}
              <p className="text-white/50 text-base md:text-lg leading-relaxed font-jost max-w-3xl">
                {item.description}
              </p>
              {/* Certificate button */}
              {item.certificate && (
                <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-jost font-normal text-sm hover:bg-gray-400 transition-colors"
                >
                    VIEW CERTIFICATE
                </a>
            )}
        </div>
    ))}
    </div>
  );
}