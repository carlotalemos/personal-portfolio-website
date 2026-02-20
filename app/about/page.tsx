import ScrollingText from '@/components/RotatingText';
import Footer from '@/components/Footer';
import SkillsGrid from '@/components/SkillsGrid';
import Timeline from '@/components/Timeline';
import { personalInfo, languages } from '@/lib/data';

export default function AboutPage() {
  return (
      <div className="text-white min-h-screen pt-32">
        {/* Hero section with profile image */}
        <section className="relative flex items-center justify-center mb-8">
          {/* Title */}
          <div className="relative z-10 w-full">
            <h1 className="text-center font-syncopate text-[60px] leading-none tracking-tighter">
              about
            </h1>
          </div>
        </section>

        {/* Rotating banner */}
        <div className="mb-20">
          <ScrollingText
              text="welcome — 2º year student — computer engineer — frontend — portfolio — © 2026"
              speed={80}
              className="font-jost text-[25px] tracking-wider text-white/50"
          />
        </div>

        {/* Bio section */}
        <section className="max-w-4xl mx-auto px-8 py-12">
          <div className="mb-8">
            <div className="w-16 h-0.5 bg-white/50 mx-auto mb-8"></div>
          </div>

          <p className="text-white text-lg leading-relaxed mb-6 font-jost font-medium text-[22px]">
            {personalInfo.bio}
          </p>

          <p className="text-white/50 text-base leading-relaxed mb-8 font-jost font-medium text-[22px]">
            {personalInfo.bioParagraph2}
          </p>

          <div className="flex justify-center mt-3">
            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-jost font-normal hover:bg-gray-200 transition-colors">
              VIEW CV
            </button>
          </div>
        </section>

        {/* Skills section */}
        <section className="max-w-4xl mx-auto px-8 py-12">
          <h2 className="text-center font-syncopate text-[30px] mb-2">
            skills <span className="text-white/50">—</span> IV
          </h2>
          <div className="mt-12">
            <SkillsGrid />
          </div>
        </section>

        {/* Languages section */}
        <section className="max-w-4xl mx-auto px-8 py-12">
          <h2 className="text-center font-syncopate text-[30px] mb-8">
            languages <span className="text-white/50">—</span> IV
          </h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between border border-white/50 hover:border-white transition-colors px-6 py-4 rounded">
                  <span className="text-lg tracking-wide font-jost">{lang.name}</span>
                  <span className="text-white font-jost">{lang.level}</span>
                </div>
            ))}
          </div>
        </section>

        {/* Timeline section */}
        <section className="max-w-4xl mx-auto px-8 py-12">
          <h2 className="text-center font-syncopate text-[30px] mb-8">
            timeline <span className="text-white/50">—</span> V
          </h2>
          <div className="mt-12">
            <Timeline />
          </div>
        </section>

        {/* Projects button */}
        <div className="flex items-center justify-center gap-4 mt-16 mb-20">
          <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-jost font-normal hover:bg-gray-200 transition-colors">
            PROJECTS
          </button>

          <button aria-label="next" className="flex items-center justify-center bg-white text-black w-14 h-14 rounded-full hover:bg-gray-400 transition-colors">
            <svg className="w-5 h-5 transform rotate-320" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Footer */}
        <Footer />
      </div>
  );
}