import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { format } from 'date-fns';

const categoryLabels = {
  clinical_trials: 'Clinical Trials',
  patient_impact: 'Patient Impact',
  molecular_engineering: 'Molecular Engineering',
  company_news: 'Company News',
  research: 'Research',
};

export default function PostListItem({ post, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link to={`/blog/${post.id}`} className="group flex gap-5 sm:gap-7 py-6 border-b border-border/40 hover:border-primary/30 transition-colors duration-300">
        {/* Thumbnail */}
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-card border border-border/40">
          {post.cover_image ? (
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary/5">
              <div className="w-6 h-6 rounded-full bg-primary/20" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-center gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
              {categoryLabels[post.category] || post.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.created_date ? format(new Date(post.created_date), 'MMM d, yyyy') : ''}
            </span>
            {post.author && (
              <span className="text-xs text-muted-foreground hidden sm:block">· {post.author}</span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold tracking-tight leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 hidden sm:block">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Arrow */}
        <div className="hidden sm:flex items-center flex-shrink-0 self-center">
          <ArrowUpRight size={18} className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}
