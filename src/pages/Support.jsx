import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { ArrowRight, Mail } from 'lucide-react';
const SUPPORT_IMAGE = "https://media.base44.com/images/public/69f758fd49752596d71c7ef0/22b0af9ca_generated_bc1e8a1f.png";

const tiers = [
  {
    name: 'Community Investor',
    amount: '$250',
    patientEquity: false,
    impact: 'Join our founding community of believers. Receive standard equity and access to quarterly investor updates.',
    facilitates: ['Standard Equity', '125 Cellular Assays', 'Investor Updates', 'Community Access'],
  },
  {
    name: 'Patient Equity',
    amount: '$1,000',
    patientEquity: true,
    impact: 'Exclusively for confirmed autoimmune patients. Receive Patient Equity shares with 2× voting power and a seat at the table.',
    facilitates: ['2× Voting Rights', 'Patient Equity Class', '500 Cellular Assays', 'Advisory Input'],
  },
  {
    name: 'Pioneer',
    amount: '$10,000',
    patientEquity: false,
    impact: 'Serious early believers who want meaningful ownership and direct impact on our clinical development timeline.',
    facilitates: ['Enhanced Equity', 'GMP Manufacturing', 'Regulatory Filing', 'Clinical Protocol Design'],
  },
  {
    name: 'Lead Investor',
    amount: '$50,000+',
    patientEquity: false,
    impact: 'Institutional-level early investment with direct access to our leadership team and data room.',
    facilitates: ['Priority Allocation', 'Data Room Access', 'Leadership Meetings', 'Co-investment Rights'],
  },
];

export default function Support() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error('Please fill in your name and email.');
      return;
    }
    setSubmitting(true);
    // Simulate submission
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Thank you for your interest! Our team will be in touch soon.');
    setForm({ name: '', email: '', organization: '', message: '' });
    setSubmitting(false);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={SUPPORT_IMAGE} alt="Immune cells in calm equilibrium with protective teal aura" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">Invest · Own · Govern</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 max-w-2xl">
              Own the cure
              <span className="text-primary"> you need</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-6">
              Immunospec is raising funds under <strong className="text-foreground">Regulation Crowdfunding (Reg CF)</strong>, opening early-stage investment to the patients, families, and allies who believe autoimmune disease deserves a real answer.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">Reg CF Offering — SEC Registered</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Investment Tiers</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-muted-foreground/60">Choose your ownership</h2>
            <p className="text-sm text-muted-foreground/50 max-w-lg">
              Confirmed autoimmune patients unlock <span className="font-medium">Patient Equity</span> — a special share class with 2× voting power, ensuring patient voices always lead.
            </p>
          </motion.div>

          {/* Coming Soon overlay block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-20"
          >
            {/* Ghosted tier grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pointer-events-none select-none opacity-25 blur-[2px]">
              {tiers.map((tier) => (
                <div key={tier.name} className="p-6 rounded-2xl bg-card border border-border">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-primary mb-3">{tier.amount}</div>
                  <p className="text-sm text-muted-foreground">{tier.impact}</p>
                </div>
              ))}
            </div>

            {/* Coming Soon badge */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="px-6 py-3 rounded-full bg-muted border border-border text-muted-foreground text-sm font-semibold tracking-widest uppercase">
                Coming Soon
              </div>
              <p className="text-xs text-muted-foreground/70 text-center max-w-xs">
                Our Reg CF offering will open on a registered SEC-compliant investment portal.
              </p>
            </div>
          </motion.div>

          {/* External platform banner button — greyed out */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-20"
          >
            <div className="relative rounded-2xl border border-border/40 bg-card/40 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 opacity-50 cursor-not-allowed overflow-hidden">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1">Invest via Reg CF</p>
                <p className="text-lg font-semibold text-muted-foreground">Invest on our SEC-registered portal</p>
                <p className="text-sm text-muted-foreground/60 mt-1">Opens when our offering goes live.</p>
              </div>
              <div className="flex items-center gap-2 px-8 py-4 rounded-full border border-border/50 bg-muted/30 text-muted-foreground font-medium text-sm whitespace-nowrap">
                Invest Now
                <ArrowRight size={15} />
              </div>
              {/* Striped "not yet" overlay */}
              <div className="absolute top-3 right-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/40 border border-border/30 rounded px-2 py-0.5">
                Not yet available
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Get in Touch</h3>
                  <p className="text-xs text-muted-foreground">For partnerships, investments, and philanthropic inquiries</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary/50 text-sm"
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary/50 text-sm"
                  />
                </div>
                <Input
                  placeholder="Organization (optional)"
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary/50 text-sm"
                />
                <Textarea
                  placeholder="Tell us about your interest in supporting Immunospec..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary/50 text-sm resize-none"
                />

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 text-sm font-medium"
                >
                  {submitting ? 'Sending...' : 'Submit Inquiry'}
                  {!submitting && <ArrowRight size={16} className="ml-2" />}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
