import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function SelfToPolypeptideBanner() {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-primary/5 to-primary/15 rounded-t-2xl overflow-hidden flex items-center justify-center relative border-b border-primary/10">
      <svg viewBox="0 0 400 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Background grid */}
        {[...Array(8)].map((_, i) => (
          <line key={`v${i}`} x1={i * 57} y1="0" x2={i * 57} y2="160" stroke="hsl(276,80%,78%)" strokeOpacity="0.06" strokeWidth="1" />
        ))}
        {[...Array(5)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="hsl(276,80%,78%)" strokeOpacity="0.06" strokeWidth="1" />
        ))}

        {/* SELF cell — circular shape with MHC marker */}
        <g transform="translate(80, 80)">
          {/* Cell membrane */}
          <circle cx="0" cy="0" r="38" fill="hsl(276,80%,78%)" fillOpacity="0.1" stroke="hsl(276,80%,78%)" strokeOpacity="0.5" strokeWidth="1.5" />
          {/* Nucleus */}
          <circle cx="0" cy="0" r="16" fill="hsl(276,80%,78%)" fillOpacity="0.2" stroke="hsl(276,80%,78%)" strokeOpacity="0.4" strokeWidth="1" />
          {/* MHC surface markers */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * 38;
            const y = Math.sin(rad) * 38;
            return <circle key={i} cx={x} cy={y} r="3" fill="hsl(276,80%,78%)" fillOpacity="0.8" />;
          })}
          {/* "Self" label */}
          <text x="0" y="5" textAnchor="middle" fontSize="11" fontFamily="Inter Tight, sans-serif" fontWeight="600" fill="hsl(276,80%,78%)" fillOpacity="0.9">Self</text>
        </g>

        {/* Arrow */}
        <g transform="translate(200, 80)">
          <line x1="-30" y1="0" x2="30" y2="0" stroke="hsl(276,80%,78%)" strokeOpacity="0.7" strokeWidth="2" strokeDasharray="5,3" />
          <polygon points="30,0 20,-5 20,5" fill="hsl(276,80%,78%)" fillOpacity="0.7" />
        </g>

        {/* Polypeptide chain */}
        <g transform="translate(310, 80)">
          {/* Chain backbone */}
          {[
            [-45, 0], [-30, -14], [-15, 0], [0, -14], [15, 0], [30, -14], [45, 0]
          ].map(([x, y], i, arr) => i < arr.length - 1 ? (
            <line key={i} x1={x} y1={y} x2={arr[i+1][0]} y2={arr[i+1][1]}
              stroke="hsl(276,80%,78%)" strokeOpacity="0.5" strokeWidth="1.5" />
          ) : null)}
          {/* Amino acid nodes */}
          {[
            [-45, 0], [-30, -14], [-15, 0], [0, -14], [15, 0], [30, -14], [45, 0]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="6"
              fill={i % 2 === 0 ? 'hsl(276,80%,78%)' : 'hsl(260,15%,10%)'}
              stroke="hsl(276,80%,78%)" strokeOpacity="0.7" strokeWidth="1.5"
              fillOpacity={i % 2 === 0 ? 0.3 : 1}
            />
          ))}
          {/* Polypeptide label */}
          <text x="0" y="28" textAnchor="middle" fontSize="10" fontFamily="Inter Tight, sans-serif" fontWeight="500" fill="hsl(276,80%,78%)" fillOpacity="0.7">polypeptide</text>
          {/* Curly braces hint */}
          <text x="-55" y="3" fontSize="28" fontFamily="monospace" fill="hsl(276,80%,78%)" fillOpacity="0.3">{"{"}</text>
          <text x="48" y="3" fontSize="28" fontFamily="monospace" fill="hsl(276,80%,78%)" fillOpacity="0.3">{"}"}</text>
        </g>
      </svg>
    </div>
  );
}

const PROTEIN_IMG = "https://media.base44.com/images/public/69f758fd49752596d71c7ef0/cc8ddad6e_Figure15-1024x940.png";

// [left%, top%, size(px), rotation(deg), opacity]
const BG_PROTEINS = [
  [2,   5,  52, 20,  0.18],
  [18,  60, 44, 110, 0.14],
  [72,  8,  48, 200, 0.16],
  [85,  55, 40, 70,  0.13],
  [55,  70, 36, 310, 0.12],
  [35,  -5, 38, 150, 0.12],
  [62,  35, 30, 240, 0.10],
  [8,   38, 32, 330, 0.11],
  [90,  20, 34, 50,  0.10],
  [48,  50, 28, 180, 0.09],
];

// Accent green tint filter
const ACCENT_FILTER = 'sepia(1) saturate(3) hue-rotate(50deg) brightness(0.75)';

function CrosshairsProteinsBanner() {
  return (
    <div className="w-full h-56 bg-gradient-to-br from-accent/5 to-accent/15 rounded-t-2xl overflow-hidden relative border-b border-accent/10">
      {/* Background proteins */}
      {BG_PROTEINS.map(([l, t, sz, rot, op], i) => (
        <img
          key={i}
          src={PROTEIN_IMG}
          alt=""
          aria-hidden="true"
          className="absolute object-contain pointer-events-none"
          style={{
            left: `${l}%`,
            top: `${t}%`,
            width: `${sz}px`,
            opacity: op,
            filter: ACCENT_FILTER,
            transform: `rotate(${rot}deg)`,
          }}
        />
      ))}

      {/* Main centered protein + crosshairs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-40 h-40">
          <img
            src={PROTEIN_IMG}
            alt="Protein structure"
            className="w-full h-full object-contain"
            style={{ filter: ACCENT_FILTER, opacity: 0.85 }}
          />
          {/* Simple crosshairs */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
            {/* Single circle */}
            <circle cx="80" cy="80" r="72" fill="none" stroke="hsl(88,70%,50%)" strokeOpacity="0.7" strokeWidth="1.5" />
            {/* Four arms with gap in center */}
            <line x1="0"   y1="80" x2="55"  y2="80" stroke="hsl(88,70%,50%)" strokeOpacity="0.85" strokeWidth="1.5" />
            <line x1="105" y1="80" x2="160" y2="80" stroke="hsl(88,70%,50%)" strokeOpacity="0.85" strokeWidth="1.5" />
            <line x1="80"  y1="0"  x2="80"  y2="55" stroke="hsl(88,70%,50%)" strokeOpacity="0.85" strokeWidth="1.5" />
            <line x1="80"  y1="105" x2="80" y2="160" stroke="hsl(88,70%,50%)" strokeOpacity="0.85" strokeWidth="1.5" />
            {/* Center dot */}
            <circle cx="80" cy="80" r="3" fill="hsl(88,70%,50%)" fillOpacity="0.9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function SciencePreview() {
  return (
    <section className="py-28 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}>

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
            The Science
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Remission without suppression</h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-16">Conventional treatments just dampen the immune system. Every day, they cost money and cause side effects while inhibiting responses to pathogens. Immunospec is different; it directly targets immune memory for a specific, prolonged effect. Designed to prevent or reverse autoimmunity, not treat it for life.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Natural Immune Tolerance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0 }}
            className="group rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden">
            <SelfToPolypeptideBanner />
            <div className="p-8">
              <h3 className="text-lg font-semibold mb-3">Natural Immune Tolerance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Talks to the immune system in a language it can understand. Induces immune memory for long-term recognition of 'self' tissue.</p>
            </div>
          </motion.div>

          {/* Antigen-Specific */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden">
            <CrosshairsProteinsBanner />
            <div className="p-8">
              <h3 className="text-lg font-semibold mb-3">Antigen-Specific</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Only targets the immune cells that are attacking healthy tissue. Fixing the misdirected response and leaving the rest of immunity intact.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
            Explore the science
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
