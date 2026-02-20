import ScrollingText from '@/components/RotatingText';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Home() {
    const cardGap = '48px';
    const projectImageCssWidth = 'w-[400px]';
    const projectImageCssHeight = 'h-[400px]';
    const projectImageWidth = 400;
    const projectImageHeight = 400;
     return (<div className=" text-white min-h-screen pt-64 items-center">
             <section className="relative h-screen flex items-center justify-center">
                 <div
                     className="absolute left-1/2 z-0"
                     style={{
                         top: '-400px',
                         left: '52%',
                         transform: 'translateX(-50%)',
                         width: '1200px',  // ← aumentei de 800px para 1000px
                         height: '3000px', // ← aumentei proporcionalmente de 2000px para 2500px
                     }}
                 >
                     <Image
                         src="/profile_image.png"
                         alt="Carlota Lemos"
                         width={1200}   // ← aumentei de 800 para 1000
                         height={3000}  // ← aumentei de 2000 para 2500
                         priority
                         unoptimized
                         className="object-contain w-full "
                     />
                 </div>

                 {/* Texto rotativo "CARLOTA LEMOS"*/}
                 <div className="relative z-10 w-full -mt-0 md:-mt-8 lg:-mt-14">
                     <ScrollingText
                         text="carlota lemos"
                         speed={80}
                         className="font-syncopate text-[128px] leading-none tracking-tighter"
                     />
                 </div>
             </section>

             {/* Banner rotativo */}
             <div className="-mt-105 md:-mt-113 lg:-mt-90">
                 <ScrollingText
                     text="welcome — 2º year student — computer engineer — frontend — portfolio — © 2026"
                     speed={80}
                     className="font-jost text-[25px] tracking-wider text-white/50"
                 />
             </div>

             {/* Preview About Section */}
             <section className="max-w-4xl mx-auto px-8 py-20">
                 <h2 className="text-5xl font-bold mt-20 mb-8 text-center font-syncopate text-[30px]">
                     about <span className="text-white/50">—</span> I
                 </h2>

                 <p className="text-white text-lg leading-relaxed mb-6 font-jost font-medium text-[22px]">
                     I&apos;m Carlota Lemos, a Computer Engineering student, building a strong academic foundation
                     in software engineering while focusing on Front-End development to create seamless and user-friendly
                     digital experiences.
                 </p>

                 <p className="text-white/50 text-base leading-relaxed mb-8 font-jost font-medium text-[22px]">
                     I am currently pursuing a bachelor&apos;s degree in Computer Engineering at Instituto Superior de
                     Engenharia do Porto (ISEP), expected to be completed in 2027. Since the beginning of my studies,
                     I have been particularly drawn to Front-End development, where I discovered the perfect balance
                     between creativity and technology. I enjoy working with React and modern web technologies to build
                     intuitive interfaces, while strengthening my foundation in Java, an essential part of my academic journey.
                 </p>

                 <div className="flex items-center justify-center gap-4 mt-8">
                     <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-jost font-normal ">
                         MORE ABOUT ME
                     </button>

                     <button aria-label="next" className="flex items-center justify-center bg-white text-black w-14 h-14 rounded-full hover:bg-gray-400 transition-colors">
                         <svg className="w-5 h-5 transform rotate-320" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                         </svg>
                     </button>
                 </div>
             </section>

             {/* Preview Projects Section */}
             <section className="max-w-4xl mx-auto px-8">
                 <h2 className="text-5xl font-bold mt-20 mb-8 text-center font-syncopate text-[30px]">
                     projects <span className="text-white/50">—</span> II
                 </h2>

                 <div className="space-y-8">
                     {/* Project Card 1 */}
                     <div className="flex items-center" style={{ gap: cardGap }}>
                         <div className="flex-1 flex flex-col justify-center text-right">
                             <span className="text-xs text-white/50 uppercase tracking-wider">react</span>
                             <h3 className="text-2xl font-medium mt-2 underline font-jost">Personal Portfolio</h3>
                         </div>
                         <div className={`${projectImageCssWidth} ${projectImageCssHeight}`}>
                             <Image src="/portfolio.png" alt="Personal Portfolio" width={projectImageWidth} height={projectImageHeight} className="object-cover w-full h-full" />
                         </div>
                     </div>

                     {/* Project Card 2 (image on left) */}
                     <div className="flex items-center" style={{ gap: cardGap }}>
                         <div className={`${projectImageCssWidth} ${projectImageCssHeight}`}>
                             <Image src="/LAPR3.png" alt="Logistics on Rails" width={projectImageWidth} height={projectImageHeight} className="object-cover w-full h-full" />
                         </div>
                         <div className="flex-1 flex flex-col justify-center text-left">
                             <span className="text-xs text-white/50 uppercase tracking-wider">java</span>
                             <h3 className="text-2xl font-medim mt-2 underline font-jost">Logistics on Rails</h3>
                         </div>
                     </div>

                     {/* Project Card 3 */}
                     <div className="flex items-center" style={{ gap: cardGap }}>
                         <div className="flex-1 flex flex-col justify-center text-right">
                             <span className="text-xs text-white/50 uppercase tracking-wider">react</span>
                             <h3 className="text-2xl font-medium mt-2 underline font-jost">Clinic Website</h3>
                         </div>
                         <div className={`${projectImageCssWidth} ${projectImageCssHeight}`}>
                             <Image src="/website.png" alt="Clinic Website" width={projectImageWidth} height={projectImageHeight} className="object-cover w-full h-full" />
                         </div>
                     </div>

                     {/* Project Card 4 (image on left) */}
                     <div className="flex items-center" style={{ gap: cardGap }}>
                         <div className={`${projectImageCssWidth} ${projectImageCssHeight}`}>
                             <Image src="/LAPR2.png" alt="Railroad Simulator" width={projectImageWidth} height={projectImageHeight} className="object-cover w-full h-full" />
                         </div>
                         <div className="flex-1 flex flex-col justify-center text-left">
                             <span className="text-xs text-white/50 uppercase tracking-wider">java</span>
                             <h3 className="text-2xl font-medium mt-2 underline font-jost">Railroad Simulator</h3>
                         </div>
                     </div>

                     {/* Project Card 5 */}
                     <div className="flex items-center" style={{ gap: cardGap }}>
                         <div className="flex-1 flex flex-col justify-center text-right">
                             <span className="text-xs text-white/50 uppercase tracking-wider">java</span>
                             <h3 className="text-2xl font-bold mt-2 underline font-jost">Eigenfaces Image Recognition</h3>
                         </div>
                         <div className={`${projectImageCssWidth} ${projectImageCssHeight}`}>
                             <Image src="/LAPR1.png" alt="Eigenfaces" width={projectImageWidth} height={projectImageHeight} className="object-cover w-full h-full" />
                         </div>
                     </div>
                 </div>
             </section>

             {/* Footer component */}
             <Footer />
          </div>
      );
 }

