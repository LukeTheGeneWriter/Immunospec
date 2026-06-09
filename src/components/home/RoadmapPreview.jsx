import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const phases = [
{ name: 'Comp. Design', status: 'complete', year: '2024–2025' },
{ name: 'Preclinical Validation', status: 'active', year: '2025–2027' },
{ name: "Clinical Trials", status: 'upcoming', year: "2028\u20132036" },
{ name: 'Market', status: 'upcoming', year: '2036+' }];


export default function RoadmapPreview() {
  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16">
          
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
            The Trajectory
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            The path <span className="text-primary">to patients</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            To provide a well-tested solution to patients, Immunospec must progress through these milestones. View the full roadmap for details and progress on each of these challenges.
          </p>
        </motion.div>

        <div className="flex items-center justify-start gap-2 sm:gap-4 overflow-x-auto pb-4">
          {phases.map((phase, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center gap-2 sm:gap-4">
            
              <div className={`flex flex-col items-center gap-2 px-4 py-5 rounded-xl border min-w-[100px] sm:min-w-[120px] transition-all duration-500 ${
            phase.status === 'complete' ?
            'bg-primary/15 border-primary/50' :
            phase.status === 'active' ?
            'bg-primary/10 border-primary/40 shadow-lg shadow-primary/20' :
            'bg-card border-border'}`
            }>
                <div className={`w-3 h-3 rounded-full ${
              phase.status === 'complete' ? 'bg-primary' :
              phase.status === 'active' ? 'bg-primary animate-pulse' :
              'bg-muted-foreground/30'}`
              } />
                <span className={`text-xs sm:text-sm font-semibold ${
              phase.status === 'upcoming' ? 'text-muted-foreground' : 'text-foreground'}`
              }>{phase.name}</span>
                <span className="text-[10px] text-muted-foreground">{phase.year}</span>
              </div>
              {i < phases.length - 1 &&
            <div className="flex items-center gap-0 flex-shrink-0">
              <div className={`w-8 sm:w-14 h-px ${phase.status === 'complete' ? 'bg-primary' : 'bg-border/50'}`} />
              <ArrowRight size={32} className={`-ml-1 flex-shrink-0 ${phase.status === 'complete' ? 'text-primary' : 'text-border/50'}`} />
              <div className={`w-8 sm:w-14 h-px ${phase.status === 'complete' ? 'bg-primary' : 'bg-border/50'}`} />
            </div>
            }
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12">
          
          <Link
            to="/roadmap"
            className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
            
            View full roadmap
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>);

}
