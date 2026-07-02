import React from 'react';
import { motion } from 'framer-motion';
import PhaseCard from '../components/roadmap/PhaseCard';

const ROADMAP_IMAGE = "https://media.base44.com/images/public/69f758fd49752596d71c7ef0/55e84a996_generated_049abe54.png";

const phases = [
{
  name: 'Computational Design',
  timeline: '2024 – 2025',
  status: 'complete',
  description: 'In silico analysis of autoimmune diseases to create disease-specific reverse vaccine candidates.',
  milestones: [
  'Completed bioinformatic pipeline that generates therapeutic proteins',
  'Identified short list of candidate proteins for all classical autoimmune diseases',
  'Enhanced existing workflow to reverse-translate proteins into mRNA',
  'Designed proof-of-concept laboratory and identified validation methods',
  'Mapped out equipment, personnel, and investment needs for wet-lab validation']

},
{
  name: 'Preclinical Validation',
  timeline: '2025 – 2027',
  status: 'active',
  description: 'Analysis of reverse vaccine activity in blood provides more applicable data than lab animals.',
  milestones: [
  'Synthesize and characterize lead reverse vaccine candidates',
  'Generate real human data by observing blood ex-vivo',
  'Measure T-regulatory cell induction and characterize cells',
  'Measure antigen-specific T-effector cell deletion',
  'Optimize carrier particle formulation for safety, precision, and scalability']

},
{
  name: 'Phase I — Safety & Dosing',
  timeline: '2028 – 2030',
  status: 'upcoming',
  description: 'First-in-human trials to establish tolerability and dosing in humans.',
  milestones: [
  'IND submission to FDA',
  'Enrollment of first trial participants in multiple dose cohorts',
  'Primary endpoint: safety and tolerability over 12 weeks',
  'Immunologic analysis for tolerance induction signals',
  'Interim data readout']

},
{
  name: 'Phase II — Efficacy Signal',
  timeline: '2030 – 2032',
  status: 'upcoming',
  description: 'Larger trial explicitly measures efficacy and refines the therapeutic approach.',
  milestones: [
  'Larger trial with explicit efficacy measurements across more centers',
  'Primary endpoint: measurable antigen-specific tolerance',
  'Secondary endpoints: amelioration/reversal of autoimmune disease, or prevention',
  'Dose-response optimization',
  'Higher-resolution data readout']

},
{
  name: 'Phase III — Pivotal Trial',
  timeline: '2032 – 2035',
  status: 'upcoming',
  description: 'Large-scale, multi-center pivotal trial seeking regulatory approval.',
  milestones: [
  'Much larger trial across multiple populations',
  'Primary endpoint: preventing or reversing autoimmune disease on a global scale',
  'Long-term safety monitoring (2+ years)',
  'Regulatory submissions to FDA, EMA, and PMDA',
  'Health economics and outcomes research (HEOR)']

},
{
  name: 'Commercialization',
  timeline: '2036+',
  status: 'upcoming',
  description: 'Market launch and expansion of the tolerance induction platform across multiple autoimmune indications.',
  milestones: [
  'Regulatory approval and market authorization for lead candidate',
  'Manufacturing scale-up to meet global demand',
  'Strategic partnerships with major health systems',
  'Partner with patient groups to expand to more autoimmune conditions',
  'Post-market surveillance for real-world optimizations']

}];


export default function Roadmap() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ROADMAP_IMAGE} alt="Abstract silver fibers weaving through geometric glass shapes" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">Clinical Trajectory</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 max-w-2xl">
              The path to
              <span className="text-primary"> patients</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">To deliver a practical solution to people living with autoimmune disease, Immunospec must overcome these challenges. Here, you can track every milestone from the lab to the clinic.

            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 relative">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 via-primary/25 to-transparent" />

            <div className="space-y-4">
              {phases.map((phase, i) =>
              <div key={i} className="relative pl-16">
                  {/* Node on the line */}
                  <div className={`absolute left-5 top-8 -translate-x-1/2 flex items-center justify-center rounded-full transition-all duration-300 ${
                phase.status === 'complete' ?
                'w-7 h-7 bg-primary shadow-lg shadow-primary/40' :
                phase.status === 'active' ?
                'w-7 h-7 bg-background border-2 border-primary shadow-lg shadow-primary/30' :
                'w-5 h-5 bg-background border-2 border-border/60'}`
                }>
                    {phase.status === 'complete' &&
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                  }
                    {phase.status === 'active' &&
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  }
                  </div>
                  <PhaseCard phase={phase} index={i} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>);

}
