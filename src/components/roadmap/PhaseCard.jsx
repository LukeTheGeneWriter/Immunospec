import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Circle } from 'lucide-react';

const statusConfig = {
  complete: { icon: CheckCircle2, label: 'Complete', dotClass: 'bg-primary', milestoneClass: 'text-primary' },
  active: { icon: Clock, label: 'In Progress', dotClass: 'bg-primary animate-pulse', milestoneClass: 'text-primary/60' },
  upcoming: { icon: Circle, label: 'Upcoming', dotClass: 'bg-muted-foreground/30', milestoneClass: 'text-muted-foreground/30' },
};

export default function PhaseCard({ phase, index }) {
  const config = statusConfig[phase.status];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`relative p-8 rounded-2xl border transition-all duration-500 ${
        phase.status === 'active'
          ? 'bg-primary/8 border-primary/40 shadow-lg shadow-primary/10'
          : 'bg-card border-border hover:border-primary/30'
      }`}
    >
      {/* Status Badge */}
      <div className="flex items-center gap-2 mb-5">
        <div className={`w-2.5 h-2.5 rounded-full ${config.dotClass}`} />
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{config.label}</span>
      </div>

      <h3 className="text-xl font-bold mb-1">{phase.name}</h3>
      <span className="text-sm text-primary font-medium">{phase.timeline}</span>

      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{phase.description}</p>

      {/* Milestones */}
      <div className="mt-6 space-y-3">
        {phase.milestones.map((m, i) => (
          <div key={i} className="flex items-start gap-3">
            <Icon size={14} className={`mt-0.5 flex-shrink-0 ${config.milestoneClass}`} />
            <span className="text-xs text-muted-foreground leading-relaxed">{m}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
