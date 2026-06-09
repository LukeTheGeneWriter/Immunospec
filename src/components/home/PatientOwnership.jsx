import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Vote, Users, TrendingUp, ArrowRight, Star } from 'lucide-react';

const pillars = [
{
  icon: Users,
  title: 'Patient-Led',
  description: 'Founded and governed by people living with autoimmune disease. Every strategic decision is anchored in the patient experience.'
},
{
  icon: Vote,
  title: 'Double Voting Power',
  description: 'Confirmed patients receive a special class of stock with 2× voting rights — ensuring those most impacted always have the loudest voice.'
},
{
  icon: TrendingUp,
  title: 'Reg CF Investment',
  description: 'Raising funds under Regulation Crowdfunding, opening early-stage investment to the patients and families who believe in this mission.'
}];


export default function PatientOwnership() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-primary/8 blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="rounded-3xl border border-primary/20 bg-card/40 backdrop-blur-sm overflow-hidden">
          {/* Header band */}
          <div className="px-8 sm:px-12 py-8 border-b border-primary/20 bg-primary/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://media.base44.com/images/public/69f758fd49752596d71c7ef0/01aa6c29f_Immunospec_noback_logo_2025.png"
                alt="Immunospec"
                className="h-10 w-auto" />
              
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Patient Ownership Model</span>
            </div>
            <span className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border/50">
              Reg CF · SEC Registered Offering
            </span>
          </div>

          <div className="px-8 sm:px-12 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
                  This platform belongs
                  <br />
                  <span className="text-primary">to the patients</span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">Immunospec was built on a radical premise: the people who need this therapy should own it. We are the first biotech to offer confirmed autoimmune patients a special class of stock — Patient Equity — with twice the voting power of standard shares.

                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">With Regulation Crowdfunding (Reg CF), there is no wealth barrier to investing in Immunospec. Instead, all investors must demonstrate financial literacy through SEC-regulated platforms. Before Reg CF, companies could ask for donations from anyone, but now, we can give equity in return. Company ownership matters. Become a part of Immunospec today; use your shares to steer the company.

                </p>
                <Link
                  to="/support"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 text-sm">
                  
                  Invest & Own a Piece
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="space-y-4">
                {pillars.map((p, i) =>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-muted/50 border border-border hover:border-primary/40 transition-colors duration-400">
                  
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <p.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">{p.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                    </div>
                  </motion.div>
                )}

                {/* Disclaimer */}
                <p className="text-[10px] text-muted-foreground/60 pt-2 leading-relaxed">
                  Investing involves risk. This is not financial advice. All offerings made under Regulation Crowdfunding are subject to SEC rules. Read our offering documents before investing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
