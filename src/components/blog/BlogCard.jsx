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

export default function BlogCard({ post, index, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
    >
      <Link to={`/blog/${post.id}`}>
        <div className={`relative overflow-hidden rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 ${
          featured ? 'p-8 sm:p-10' : 'p-6 sm:p-8'
        }`}>
          {post.cover_image && (
            <div className={`mb-6 rounded-xl overflow-hidden ${featured ? 'h-64' : 'h-40'}`}>
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}

          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
              {categoryLabels[post.category] || post.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.created_date ? format(new Date(post.created_date), 'MMM d, yyyy') : ''}
            </span>
          </div>

          <h3 className={`font-bold tracking-tight mb-3 group-hover:text-primary transition-colors duration-300 ${
            featured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
          }`}>
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-2 text-xs text-primary font-medium">
            Read more
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
