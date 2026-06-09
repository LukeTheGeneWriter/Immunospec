import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <div className="pt-20">
      <section className="py-20 sm:py-28">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
              Luke — The Bioengineer
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-8">
              More information
              <span className="text-primary"> coming soon</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-16">
              Immunospec is an early-stage company, and marketing is our lowest priority as of now. We will continually update the website with more information and news. You're welcome to add your email to our mailing list to get updates as we fill in the site. Please be patient, as our highest priorities are scientific pursuit, business development, and planning our clinical roadmap.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <h2 className="text-base font-semibold">Stay in the loop</h2>
                <p className="text-xs text-muted-foreground">No spam — only meaningful updates.</p>
              </div>
            </div>

            {submitted ? (
              <div className="flex items-center gap-3 py-4 text-accent">
                <CheckCircle2 size={20} />
                <span className="text-sm font-medium">You're on the list. We'll be in touch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-border/50 focus:border-primary/50 text-sm flex-1"
                />
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 text-sm font-medium shrink-0"
                >
                  {submitting ? 'Adding...' : (
                    <>Notify me <ArrowRight size={14} className="ml-1" /></>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
