import React from 'react';
import { motion } from 'framer-motion';
import HumanGlobeWireframe from './HumanGlobeWireframe';

const problemStats = [
  { value: '15M+', label: 'Americans with autoimmune disease', href: 'https://newsnetwork.mayoclinic.org/discussion/new-study-calculates-autoimmune-disease-prevalence-in-u-s/', source: 'Mayo Clinic' },
  { value: '80+', label: 'Distinct autoimmune diseases identified', href: 'https://www.niaid.nih.gov/diseases-conditions/autoimmune-diseases', source: 'NIH · NIAID' },
];

const solutionStats = [
  { value: 'Precise', label: 'Surgically addresses the self-directed immune attack for focused effects and a safety-first design', href: 'https://onlinelibrary.wiley.com/doi/full/10.1002/eji.70067', source: 'Eur. J. Immunology · Antigen-Specific Tolerance' },
  { value: 'Scalable', label: 'Manufactured using mature engineering for cost-effective scale up', href: 'https://www.nature.com/articles/s44386-025-00037-y', source: 'Nature · RNA Therapeutics' },
];

function StatCard({ stat, variant }) {
  // variant: 'problem' | 'solution'
  const valueColor = variant === 'problem' ? 'text-destructive' : 'text-accent';
  const sourceColor = variant === 'problem' ? 'text-destructive/50' : 'text-accent/50';
  const borderClass = variant === 'problem'
    ? "border-destructive/20 hover:border-destructive/40"
    : "border-accent/20 hover:border-accent/40";

  const inner = (
    <>
      <div className={`text-3xl sm:text-4xl font-bold mb-2 ${valueColor}`}>{stat.value}</div>
      <div className="text-sm text-muted-foreground leading-relaxed">{stat.label}</div>
      {stat.source && <div className={`text-[10px] mt-2 ${sourceColor}`}>{stat.source} ↗</div>}
    </>
  );

  const baseClass = "p-7 rounded-2xl bg-card/80 backdrop-blur-sm border transition-colors duration-500";

  return stat.href ? (
    <a href={stat.href} target="_blank" rel="noopener noreferrer" className={`${baseClass} ${borderClass} block`}>
      {inner}
    </a>
  ) : (
    <div className={`${baseClass} ${borderClass}`}>{inner}</div>
  );
}

export default function ProblemSolution() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-20">

      {/* The Problem */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Background human anatomy image */}
        <div className="absolute right-0 top-[-5%] h-[175%] pointer-events-none select-none"
          style={{ filter: 'drop-shadow(0 0 48px hsl(0,80%,55%)) drop-shadow(0 0 16px hsl(0,90%,65%)) drop-shadow(0 0 4px hsl(0,100%,70%))' }}>
          <img
            src="https://media.base44.com/images/public/69f758fd49752596d71c7ef0/67f6edf20_Gemini_Generated_Image_ecvl0pecvl0pecvl-Photoroom.png"
            alt=""
            aria-hidden="true"
            className="h-full w-auto object-contain opacity-20"
            style={{ filter: 'sepia(1) saturate(4) hue-rotate(300deg) brightness(0.6)' }}
          />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-destructive/70 mb-3 block">The Problem</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-10">
          Autoimmunity is everywhere.<br />
          <span className="text-destructive">Solutions are nowhere.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problemStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <StatCard stat={stat} variant="problem" />
            </motion.div>
          ))}
          <HumanGlobeWireframe />
        </div>
      </motion.div>

      {/* The Solution */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Background globe image */}
        <div className="absolute right-[-12%] top-[0%] h-[96%] pointer-events-none select-none"
          style={{ filter: 'drop-shadow(0 0 32px hsl(88,70%,50%)) drop-shadow(0 0 8px hsl(88,70%,60%))' }}>
          <img
            src="https://media.base44.com/images/public/69f758fd49752596d71c7ef0/4b66ea37e_Untitled.png"
            alt=""
            aria-hidden="true"
            className="h-full w-auto object-contain opacity-20"
            style={{ filter: 'sepia(1) saturate(6) hue-rotate(50deg) brightness(0.7)' }}
          />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/70 mb-3 block">The Solution</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-10">
          Reverse vaccines for<br />
          <span className="text-accent">precision and scale.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {solutionStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <StatCard stat={stat} variant="solution" />
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
