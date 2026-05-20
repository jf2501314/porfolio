'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatedText } from './AnimatedText';

const experiences = [
  {
    company: 'TechFlow Systems',
    role: 'Senior Full Stack Developer',
    period: '2023 - Present',
    description: 'Leading the development of a cloud-native SaaS platform. Mentoring junior developers and implementing best practices for React and Node.js.',
  },
  {
    company: 'Creative Pulse Agency',
    role: 'Frontend Developer',
    period: '2021 - 2023',
    description: 'Developed high-end marketing websites and interactive web experiences for global brands using Next.js and GSAP.',
  },
  {
    company: 'StartUp Hub',
    role: 'Junior Web Developer',
    period: '2020 - 2021',
    description: 'Built and maintained various client projects. Focused on responsive design and performance optimization.',
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the vertical line
    gsap.fromTo(lineRef.current, 
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: true,
        }
      }
    );

    // Animate entries
    gsap.from('.exp-entry', {
      opacity: 0,
      x: -30,
      duration: 1,
      stagger: 0.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="experience" ref={containerRef} className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <AnimatedText
          text="MY JOURNEY"
          className="text-sm font-mono text-accent tracking-widest mb-4"
        />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Work Experience
        </h2>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div 
          ref={lineRef}
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-accent origin-top hidden md:block" 
        />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company} 
              className={`exp-entry relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot on line */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-[6px] top-2 hidden md:block" />
              
              <div className="md:w-1/2">
                <div className={`p-8 bg-card border border-border rounded-2xl ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  <span className="text-accent font-mono text-sm mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-foreground/60 font-medium mb-4">{exp.company}</h4>
                  <p className="text-foreground/40 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
