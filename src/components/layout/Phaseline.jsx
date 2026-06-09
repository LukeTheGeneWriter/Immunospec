import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { label: 'Computational Design', status: 'complete' },
  { label: 'Preclinical Validation', status: 'active' },
  { label: 'IND Filing', status: 'upcoming' },
  { label: 'Phase I', status: 'upcoming' },
  { label: 'Phase II', status: 'upcoming' },
  { label: 'Phase III', status: 'upcoming' },
  { label: 'Market', status: 'upcoming' },
];

export default function Phaseline() {
  const activeIndex = milestones.findIndex(m => m.status === 'active');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/97 backdrop-blur-xl border-t border-border/60">
      <div className="max-w-7xl mx-auto px-5 md:px-12 py-5 flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 whitespace-nowrap">
          <span className="text-sm font-bold text-foreground">Path to Patients</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-primary flex-shrink-0">
            <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex-1 flex items-center gap-1.5 px-2">
          {milestones.map((m, i) => {
            const isComplete = m.status === 'complete';
            const isActive = m.status === 'active';
            const isLast = i === milestones.length - 1;
            return (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-2 group relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className={`flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isComplete
                        ? 'w-5 h-5 rounded-full bg-primary border-2 border-primary'
                        : isActive
                        ? 'w-5 h-5 rounded-full bg-background border-2 border-primary'
                        : 'w-4 h-4 rounded-full bg-muted border-2 border-border/60'
                    }`}
                    style={isActive ? {
                      boxShadow: '0 0 10px 4px hsl(276 80% 78% / 0.6), 0 0 24px 8px hsl(276 80% 78% / 0.25)'
                    } : {}}
                  >
                    {isComplete && (
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5l2 2 4-4" stroke="hsl(260 15% 7%)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </motion.div>
                  <span className={`hidden lg:block text-[10px] font-medium whitespace-nowrap absolute -bottom-5 ${
                    isComplete ? 'text-primary/70' : isActive ? 'text-primary' : 'text-muted-foreground/40'
                  }`}>
                    {m.label}
                  </span>
                </div>
                {!isLast && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                    className={`flex-1 h-px ${
                      isComplete ? 'bg-primary/60' : 'bg-border/40'
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </div>
  );
}
