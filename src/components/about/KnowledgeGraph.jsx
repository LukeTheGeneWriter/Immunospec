import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Data ────────────────────────────────────────────────────────────────────

const CENTER = {
  id: 'center',
  label: 'Immunospec',
  summary: 'A patient-led biotech engineering antigen-specific immune tolerance.',
};

const HUBS = [
  {
    id: 'science',
    label: 'Science',
    angle: 330,
    color: '#7ee87e',        // accent green
    strokeColor: 'hsl(88 70% 50%)',
    card: {
      title: 'The Science',
      body: 'Immunospec is building a collection of antigen-specific tolerance induction methods — mRNA, modified peptide, and vectored DNA — to address over 80 distinct autoimmune diseases. Our lead program is an mRNA reverse vaccine for Type 1 Diabetes prevention.',
      detail: 'mRNA is ideal for T-cell driven diseases where the antigen has few post-translational modifications. For diseases like Rheumatoid Arthritis, we create, modify, and encapsulate the antigen to induce tolerance. For the most persistent autoimmune diseases, a constant tolerogenic signal via DNA delivered to hematopoietic stem cells may be required.',
      link: null,
    },
    nodes: [
      { label: 'mRNA Reverse Vaccine', sub: 'Lead program · T1D prevention' },
      { label: 'Modified Peptide Tolerance', sub: 'For antigen-complex diseases like RA' },
      { label: 'Vectored DNA Delivery', sub: 'Hematopoietic stem cell targeting' },
      { label: '80+ Targetable Conditions', sub: 'Antigen-specific across all autoimmunity' },
    ],
  },
  {
    id: 'business',
    label: 'Business',
    angle: 210,
    color: '#c084fc',        // primary lavender
    strokeColor: 'hsl(276 80% 78%)',
    card: {
      title: 'Why We Do Business This Way',
      body: 'Pharma and biotech routinely fail patients by only engaging them as customers — not partners. Immunospec raises capital from patients, their families, and aligned investors so the people with the highest stake have the loudest voice.',
      detail: 'We use Regulation Crowdfunding to keep the door open to everyday investors. Confirmed autoimmune patients receive Patient Equity — a share class with 2× voting power — ensuring we can never be redirected away from the mission of producing the right drug at the right price.',
      link: '/support',
      linkLabel: 'See investment options →',
    },
    nodes: [
      { label: 'Patient Equity (2× Votes)', sub: 'Confirmed patients hold governing power' },
      { label: 'Regulation Crowdfunding', sub: 'Open investment under SEC Reg CF' },
      { label: 'Mission-Aligned Capital', sub: 'No VC pressure to compromise access' },
      { label: 'Right Drug · Right Price', sub: 'Affordability as a design constraint' },
    ],
  },
  {
    id: 'clinical',
    label: 'Clinical',
    angle: 90,
    color: '#a78bfa',        // chart-2 mid-purple
    strokeColor: 'hsl(270 70% 65%)',
    card: {
      title: 'Clinical Progress',
      body: 'Computational design of the mRNA platform is complete. We have modeled tolerance induction to any unmodified peptide antigen and are now moving into laboratory validation using human blood — the most relevant and translatable preclinical model.',
      detail: 'Using primary human PBMCs and whole-blood assays avoids the well-documented failures of mouse models in autoimmune research. Our goal is a clear tolerogenic signal in human immune cells before filing an IND for a Phase I first-in-human safety trial.',
      link: '/roadmap',
      linkLabel: 'View full roadmap →',
    },
    nodes: [
      { label: 'Computational Design ✓', sub: 'mRNA platform architecture complete' },
      { label: 'Human Blood Validation', sub: 'PBMC & whole-blood assays — in progress' },
      { label: 'Lead Candidate: T1D mRNA', sub: 'Scalable, minimally invasive platform' },
      { label: 'IND Filing (planned)', sub: 'Phase I safety & dosing' },
    ],
  },
];

// ─── Geometry ────────────────────────────────────────────────────────────────

function polar(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

const CX = 500, CY = 420;
const HUB_R = 155;
const NODE_R = 295;
const FAN = 58;

// ─── Info Card (HTML overlay) ────────────────────────────────────────────────

function InfoCard({ hub, onClose }) {
  return (
    <AnimatePresence>
      {hub && (
        <motion.div
          key={hub.id}
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.97 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-x-0 bottom-0 mx-auto max-w-xl z-20 pointer-events-auto"
        >
          <div
            className="rounded-2xl border bg-card/95 backdrop-blur-xl p-6 shadow-2xl"
            style={{ borderColor: hub.strokeColor + '55' }}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-bold" style={{ color: hub.color }}>{hub.card.title}</h3>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors mt-0.5">
                <X size={16} />
              </button>
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-3">{hub.card.body}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{hub.card.detail}</p>

            {/* Node list */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {hub.nodes.map((n, i) => (
                <div key={i} className="rounded-lg px-3 py-2 bg-muted/60 border border-border/40">
                  <div className="text-xs font-semibold text-foreground leading-snug">{n.label}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 leading-snug">{n.sub}</div>
                </div>
              ))}
            </div>

            {hub.card.link && (
              <Link
                to={hub.card.link}
                className="inline-flex items-center gap-1.5 text-xs font-semibold hover:gap-2.5 transition-all"
                style={{ color: hub.color }}
              >
                {hub.card.linkLabel} <ArrowRight size={12} />
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function KnowledgeGraph() {
  const [activeHub, setActiveHub] = useState(null);
  const [hoveredHub, setHoveredHub] = useState(null);

  const activeHubData = HUBS.find(h => h.id === activeHub) || null;

  function toggleHub(id) {
    setActiveHub(prev => (prev === id ? null : id));
  }

  return (
    <div className="relative w-full">
      {/* SVG Graph */}
      <svg
        viewBox="0 0 1000 840"
        className="w-full"
        style={{ minHeight: 320 }}
      >
        <defs>
          <radialGradient id="cGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(276 80% 78%)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="hsl(276 80% 78%)" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <ellipse cx={CX} cy={CY} rx={220} ry={200} fill="url(#cGlow)" />

        {HUBS.map((hub, hi) => {
          const hubPos = polar(CX, CY, HUB_R, hub.angle);
          const isActive = activeHub === hub.id;
          const isHovered = hoveredHub === hub.id;
          const highlight = isActive || isHovered;

          const nodePositions = hub.nodes.map((_, ni) => {
            const offset = (ni - (hub.nodes.length - 1) / 2) * (FAN / (hub.nodes.length - 1));
            return polar(CX, CY, NODE_R, hub.angle + offset);
          });

          return (
            <g key={hub.id}>
              {/* Center → Hub */}
              <motion.line
                x1={CX} y1={CY} x2={hubPos.x} y2={hubPos.y}
                stroke={hub.strokeColor}
                strokeWidth={highlight ? 2.5 : 1.4}
                strokeOpacity={highlight ? 0.85 : 0.3}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + hi * 0.15 }}
                style={{ transition: 'stroke-width 0.2s, stroke-opacity 0.2s' }}
              />

              {/* Hub → Nodes */}
              {nodePositions.map((nPos, ni) => (
                <motion.line
                  key={ni}
                  x1={hubPos.x} y1={hubPos.y} x2={nPos.x} y2={nPos.y}
                  stroke={hub.strokeColor}
                  strokeWidth={highlight ? 1.4 : 0.7}
                  strokeOpacity={highlight ? 0.5 : 0.15}
                  strokeDasharray="5 5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.55 + hi * 0.15 + ni * 0.07 }}
                  style={{ transition: 'stroke-width 0.2s, stroke-opacity 0.2s' }}
                />
              ))}

              {/* Node dots + labels */}
              {hub.nodes.map((node, ni) => {
                const nPos = nodePositions[ni];
                const isRight = nPos.x > CX + 30;
                const isLeft = nPos.x < CX - 30;
                const anchor = isRight ? 'start' : isLeft ? 'end' : 'middle';
                const tx = isRight ? nPos.x + 12 : isLeft ? nPos.x - 12 : nPos.x;
                const labelBelow = nPos.y > CY + 80;
                const labelAbove = nPos.y < CY - 80;
                const ty = labelBelow ? nPos.y + 20 : labelAbove ? nPos.y - 14 : nPos.y + 5;

                return (
                  <motion.g
                    key={ni}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.65 + hi * 0.15 + ni * 0.08 }}
                  >
                    <circle
                      cx={nPos.x} cy={nPos.y} r={highlight ? 6 : 4}
                      fill={hub.color}
                      fillOpacity={highlight ? 1 : 0.4}
                      style={{ transition: 'r 0.2s, fill-opacity 0.2s' }}
                    />
                    <text
                      x={tx} y={ty}
                      textAnchor={anchor}
                      fill="hsl(270 20% 92%)"
                      fillOpacity={highlight ? 1 : 0.4}
                      fontSize="13"
                      fontWeight={highlight ? '600' : '400'}
                      fontFamily="Inter Tight, sans-serif"
                      style={{ transition: 'fill-opacity 0.2s', userSelect: 'none' }}
                    >
                      {node.label}
                    </text>
                    {highlight && (
                      <text
                        x={tx} y={ty + 16}
                        textAnchor={anchor}
                        fill={hub.color}
                        fillOpacity={0.7}
                        fontSize="10.5"
                        fontFamily="Inter Tight, sans-serif"
                        style={{ userSelect: 'none' }}
                      >
                        {node.sub}
                      </text>
                    )}
                  </motion.g>
                );
              })}

              {/* Hub circle */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.2 + hi * 0.15 }}
                style={{ transformOrigin: `${hubPos.x}px ${hubPos.y}px`, cursor: 'pointer' }}
                onClick={() => toggleHub(hub.id)}
                onMouseEnter={() => setHoveredHub(hub.id)}
                onMouseLeave={() => setHoveredHub(null)}
              >
                {isActive && (
                  <circle cx={hubPos.x} cy={hubPos.y} r={48} fill={hub.color} fillOpacity={0.1} filter="url(#glow)" />
                )}
                <circle
                  cx={hubPos.x} cy={hubPos.y} r={38}
                  fill="hsl(260 15% 10%)"
                  stroke={hub.strokeColor}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  strokeOpacity={isActive ? 1 : highlight ? 0.85 : 0.55}
                  style={{ transition: 'stroke-width 0.2s, stroke-opacity 0.2s' }}
                />
                <text
                  x={hubPos.x} y={hubPos.y + 6}
                  textAnchor="middle"
                  fill={hub.color}
                  fontSize="15"
                  fontWeight="700"
                  fontFamily="Inter Tight, sans-serif"
                  style={{ userSelect: 'none' }}
                >
                  {hub.label}
                </text>
              </motion.g>
            </g>
          );
        })}

        {/* Center node */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 15, delay: 0.08 }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        >
          <circle cx={CX} cy={CY} r={66} fill="hsl(260 15% 8%)" stroke="hsl(276 80% 78%)" strokeWidth={2.5} strokeOpacity={0.75} />
          <circle cx={CX} cy={CY} r={56} fill="hsl(260 15% 12%)" stroke="hsl(276 80% 78%)" strokeWidth={0.8} strokeOpacity={0.25} />
          <text x={CX} y={CY - 7} textAnchor="middle" fill="hsl(270 20% 95%)" fontSize="17" fontWeight="700" fontFamily="Inter Tight, sans-serif" style={{ userSelect: 'none' }}>
            Immuno
          </text>
          <text x={CX} y={CY + 14} textAnchor="middle" fill="hsl(276 80% 78%)" fontSize="17" fontWeight="700" fontFamily="Inter Tight, sans-serif" style={{ userSelect: 'none' }}>
            spec
          </text>
        </motion.g>

        {/* Tap hint */}
        <text x={CX} y={CY + 90} textAnchor="middle" fill="hsl(270 15% 55%)" fontSize="11.5" fontFamily="Inter Tight, sans-serif" style={{ userSelect: 'none' }}>
          tap a hub to learn more
        </text>
      </svg>

      {/* Info card overlay — sits below graph */}
      <div className="relative mt-2" style={{ minHeight: activeHubData ? 260 : 0 }}>
        <InfoCard hub={activeHubData} onClose={() => setActiveHub(null)} />
      </div>
    </div>
  );
}
