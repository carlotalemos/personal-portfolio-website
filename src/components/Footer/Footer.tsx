"use client";

import { useRef } from 'react';

export default function Footer() {
  const speed = 40;

  const gradients = {
    linkedin: 'linear-gradient(90deg,#0ea5e9,#ffffff)',
    github: 'linear-gradient(90deg,#7c3aed,#ffffff)',
    cv: 'linear-gradient(90deg,#ef4444,#ffffff)',
    email: 'linear-gradient(90deg,#30A646,#ffffff)'
  };

  const urls = {
    linkedin: 'https://www.linkedin.com/in/carlotamlemos',
    github: 'https://github.com/carlotalemos',
    cv: '/docs/cv.pdf',
    email: 'mailto:carlota.lemos48@gmail.com'
  };

  const words = [
    { key: 'linkedin', label: 'linkedin', grad: gradients.linkedin, url: urls.linkedin },
    { key: 'github', label: 'github', grad: gradients.github, url: urls.github },
    { key: 'cv', label: 'cv', grad: gradients.cv, url: urls.cv },
    { key: 'email', label: 'email', grad: gradients.email, url: urls.email }

  ];

  const gradientStyle = (g?: string): React.CSSProperties => ({
    background: g,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  });

  const itemClass = 'inline-block px-6 font-syncopate text-[200px] md:text-[150px] font-bold leading-none';

  const trackRef = useRef<HTMLDivElement | null>(null);

  const pause = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'; };
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running'; };

  return (
    <footer className="py-10 mt-30">
      <div className="max-h-max max-w-max">
        <div className="overflow-hidden whitespace-nowrap">
          <div
            ref={trackRef}
            className="inline-block animate-scroll"
            style={{ animationDuration: `${speed}s` }}
            onPointerDown={pause}
            onPointerUp={resume}
            onPointerLeave={resume}
            onTouchStart={pause}
            onTouchEnd={resume}
          >
            <span className="inline-block">
              {words.map((w) => (
                <a
                  key={`a-${w.key}`}
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-6 ${itemClass}`}
                  style={gradientStyle(w.grad)}
                >
                  {w.label}
                </a>
              ))}
            </span>

            <span className="inline-block" aria-hidden="true" style={{ pointerEvents: 'auto' }}>
              {words.map((w) => (
                <a
                  key={`b-${w.key}`}
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  className={`inline-block px-6 ${itemClass}`}
                  style={gradientStyle(w.grad)}
                >
                  {w.label}
                </a>
              ))}
            </span>
          </div>
        </div>

        <p className="text-center text-white/50 text-sm mt-3 mb-0">©2026 Carlota Lemos</p>
      </div>
    </footer>
  );
}
