'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatedText } from './AnimatedText';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Nexus E-Commerce',
    description: 'A high-performance e-commerce platform built with Next.js and Stripe integration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Quantum Analytics',
    description: 'Real-time data visualization dashboard for enterprise-level analytics.',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Aura Social',
    description: 'A minimalist social media application focused on privacy and user experience.',
    tech: ['React Native', 'Firebase', 'Redux'],
    color: 'from-blue-500 to-indigo-600',
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.project-card', {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <AnimatedText
            text="SELECTED WORKS"
            className="text-sm font-mono text-accent tracking-widest mb-4"
          />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </div>
        <p className="text-foreground/40 max-w-md">
          A collection of projects that showcase my technical skills and design philosophy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-card group relative bg-card border border-border rounded-2xl overflow-hidden"
          >
            <div className={`aspect-video bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-foreground/60 mb-6 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-foreground/40">
                    #{t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <div className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
