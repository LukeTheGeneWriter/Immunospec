import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border/30 pb-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="https://media.base44.com/images/public/69f758fd49752596d71c7ef0/01aa6c29f_Immunospec_noback_logo_2025.png"
                alt="Immunospec logo"
                className="h-10 w-auto" />
              
              <span className="text-base font-semibold tracking-tight">
                immuno<span className="text-primary">spec</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">A family of therapeutics that teach the immune system to recognize and protect healthy tissue — preventing and reversing autoimmunity.

            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Navigate</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">About Us</Link>
              <Link to="/roadmap" className="text-sm text-foreground/70 hover:text-primary transition-colors">Roadmap</Link>
              <Link to="/blog" className="text-sm text-foreground/70 hover:text-primary transition-colors">Insights</Link>
              <Link to="/support" className="text-sm text-foreground/70 hover:text-primary transition-colors">Support Us</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:luke@immunospec.com" className="text-sm text-foreground/70 hover:text-primary transition-colors">luke@immunospec.com</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-muted-foreground">© 2026 Immunospec. All rights reserved.</span>
          <span className="text-xs text-muted-foreground">Advancing the Architecture of Immune Tolerance</span>
        </div>
      </div>
    </footer>);

}
