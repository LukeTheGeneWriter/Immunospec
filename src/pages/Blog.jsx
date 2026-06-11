import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import PostListItem from '../components/blog/PostListItem';
import { Newspaper, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPublishedPosts } from '@/data/blogPosts';

const tabs = [
  { key: 'news', label: 'News', icon: Newspaper, description: 'Company updates, press coverage, and milestones.' },
  { key: 'research', label: 'Research', icon: FlaskConical, description: 'Science deep-dives, publications, and clinical insights.' },
];

export default function Blog() {
  const [activeTab, setActiveTab] = useState('news');

  // Use static blog posts data
  const { data: posts = [] } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => getPublishedPosts(),
    initialData: getPublishedPosts(),
  });

  const filtered = posts.filter(p => (p.type || 'research') === activeTab);
  const activeTabConfig = tabs.find(t => t.key === activeTab);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">Insights</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Dispatches from the
              <span className="text-primary"> frontier</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Research updates, clinical milestones, and perspectives on the future of inverse vaccinology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">

          {/* Tab Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center justify-center gap-2.5 px-5 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                      : 'bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab description */}
          <p className="text-sm text-muted-foreground mb-8 pl-1">{activeTabConfig.description}</p>

          {/* Divider */}
          <div className="border-t border-border/40 mb-2" />

          {/* Posts */}
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                {React.createElement(activeTabConfig.icon, { size: 20, className: 'text-primary' })}
              </div>
              <h3 className="text-lg font-semibold mb-2">Nothing here yet</h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                {activeTab === 'news'
                  ? 'Company announcements and press coverage will appear here.'
                  : 'Research publications and science updates will appear here.'}
              </p>
              <Link
                to="/blog/coming-soon"
                className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all"
              >
                More info on our timeline →
              </Link>
            </motion.div>
          ) : (
            <div>
              {filtered.map((post, i) => (
                <PostListItem key={post.id} post={post} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
