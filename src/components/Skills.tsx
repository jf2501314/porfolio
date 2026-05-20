'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatedText } from './AnimatedText';
import { 
  Code2, 
  Database, 
  Layout, 
  Settings, 
  Cpu, 
  Globe,
  Layers,
  Terminal
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="text-accent" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
  },
  {
    title: 'Backend',
    icon: <Database className="text-accent" />,
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
  },
  {
    title: 'Tools & DevOps',
    icon: <Settings className="text-accent" />,
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD'],
  },
];

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.skill-card', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef} className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText
            text="TECH STACK"
            className="text-sm font-mono text-accent tracking-widest mb-4"
          />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My Toolbox
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="skill-card p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-colors group"
            >
              <div className="mb-6 p-3 bg-accent/10 w-fit rounded-xl group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 border border-border rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
