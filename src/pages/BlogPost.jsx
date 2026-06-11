import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { getPostById } from '@/data/blogPosts';

const categoryLabels = {
  clinical_trials: 'Clinical Trials',
  patient_impact: 'Patient Impact',
  molecular_engineering: 'Molecular Engineering',
  company_news: 'Company News',
  research: 'Research',
};

export default function BlogPost() {
  const { id } = useParams();

  // Use static blog posts data
  const { data: post } = useQuery({
    queryKey: ['blogPost', id],
    queryFn: () => getPostById(id),
    initialData: () => getPostById(id),
  });

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Link to="/blog" className="text-primary text-sm hover:underline">
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={14} />
            Back to Insights
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
              {categoryLabels[post.category] || post.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.created_date ? format(new Date(post.created_date), 'MMMM d, yyyy') : ''}
            </span>
            {post.author && (
              <span className="text-xs text-muted-foreground">by {post.author}</span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-8">
            {post.title}
          </h1>

          {post.cover_image && (
            <div className="rounded-2xl overflow-hidden mb-10">
              <img src={post.cover_image} alt={post.title} className="w-full h-auto" />
            </div>
          )}

          <div className="prose prose-invert prose-sm max-w-none [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_h2]:text-foreground [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:font-semibold [&_a]:text-primary [&_a]:no-underline [&_a]:hover:underline [&_blockquote]:border-primary/30 [&_blockquote]:text-muted-foreground [&_code]:text-primary [&_code]:bg-primary/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_li]:text-muted-foreground">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
