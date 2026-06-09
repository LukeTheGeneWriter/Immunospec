import React from 'react';
import { motion } from 'framer-motion';
import { Vote } from 'lucide-react';

export default function ImpactTier({ tier, index, selected, onSelect }) {
  const isSelected = selected === tier.name;

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onSelect(tier.name)}
      className={`w-full text-left p-7 rounded-2xl backdrop-blur-sm border transition-all duration-500 relative overflow-hidden ${
        tier.patientEquity
          ? isSelected
            ? 'bg-accent/10 border-accent/50 shadow-lg shadow-accent/5'
            : 'bg-accent/5 border-accent/25 hover:border-accent/40'
          : isSelected
          ? 'bg-primary/10 border-primary/40 shadow-lg shadow-primary/5'
          : 'bg-card/30 border-border/30 hover:border-primary/20'
      }`}
    >
      {tier.patientEquity && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30">
          <Vote size={10} className="text-accent" />
          <span className="text-[10px] font-semibold text-accent uppercase tracking-wide">Patients Only · 2× Vote</span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4 pr-4">
        <div>
          <h3 className="text-lg font-bold">{tier.name}</h3>
          <span className={`text-2xl font-bold ${tier.patientEquity ? 'text-accent' : 'text-primary'}`}>{tier.amount}</span>
        </div>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 mt-1 ${
          isSelected
            ? tier.patientEquity ? 'border-accent bg-accent' : 'border-primary bg-primary'
            : 'border-border'
        }`}>
          {isSelected && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{tier.impact}</p>
      <div className="flex flex-wrap gap-2">
        {tier.facilitates.map((f, i) => (
          <span key={i} className={`text-[10px] px-2.5 py-1 rounded-full border ${
            tier.patientEquity
              ? 'bg-accent/10 border-accent/20 text-accent/80'
              : 'bg-muted border-border/50 text-muted-foreground'
          }`}>
            {f}
          </span>
        ))}
      </div>
    </motion.button>
  );
}
