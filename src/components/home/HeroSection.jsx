import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGE = "https://media.base44.com/images/public/69f758fd49752596d71c7ef0/647f0522d_generated_4f868123.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Microscopic cellular structures enveloped in protective teal bioluminescent mist"
          className="w-full h-full object-cover opacity-20" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
      </div>

      {/* Tolerance Halo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-primary/15 blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center">
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
            Your immunity.
            <br />
            <span className="text-primary">Back on your side.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10 mx-auto">Autoimmune disease: when the immune system attacks healthy tissue. To correct the root cause of lifelong disease, Immunospec restates what healthy cells look like. No daily medicine, no immunosuppression, and no more autoimmunity. Made for patients, owned by patients.

          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border/60 text-foreground font-medium rounded-full hover:border-primary/60 hover:text-primary transition-all duration-300 text-sm">
              
              Learn the Science
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border/60 text-foreground font-medium rounded-full hover:border-primary/60 hover:text-primary transition-all duration-300 text-sm">
              
              Invest via Reg CF
            </Link>
          </div>
        </motion.div>


      </div>
    </section>);

}
