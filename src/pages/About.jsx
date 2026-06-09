import React from 'react';
import { motion } from 'framer-motion';
import KnowledgeGraph from '../components/about/KnowledgeGraph';

const ABOUT_IMAGE = "https://media.base44.com/images/public/69f758fd49752596d71c7ef0/020cb455b_generated_cc9cc25e.png";

export default function About() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_IMAGE} alt="Molecular structures" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/90 to-background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">About Immunospec</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Rewriting the language of
              <span className="text-primary"> immunity</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Immunospec is a patient-led biotech developing antigen-specific tolerance methods. On this page, we'll explain our approach from three perspectives: the science, the business, and the clinical pathways. Explore what makes Immunospec unique below.

            </p>
          </motion.div>
        </div>
      </section>

      {/* Knowledge Graph — the heart of this page */}
      <section className="py-8 pb-32 relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full bg-primary/5 blur-[160px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6">
            
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-muted-foreground">
              Click a hub — <span className="text-foreground">Science, Business, or Clinical</span> — to explore our story.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}>
            
            <KnowledgeGraph />
          </motion.div>
        </div>
      </section>

    </div>);

}
