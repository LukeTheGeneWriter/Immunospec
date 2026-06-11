import matter from 'gray-matter';

// Auto-discover all markdown files in the blog content directory
const blogFiles = import.meta.glob('/src/content/blog/*.md', { as: 'raw', eager: true });

// Parse all blog posts from markdown files
export const blogPosts = Object.entries(blogFiles).map(([filepath, content]) => {
  const { data: frontmatter, content: markdownContent } = matter(content);

  // Extract the filename without extension to use as ID/slug
  const filename = filepath.split('/').pop().replace('.md', '');

  return {
    id: frontmatter.id || filename,
    title: frontmatter.title || 'Untitled',
    content: markdownContent.trim(),
    category: frontmatter.category || 'company_news',
    type: frontmatter.type || 'news',
    author: frontmatter.author || 'Immunospec Team',
    created_date: frontmatter.date || new Date().toISOString(),
    cover_image: frontmatter.cover_image || null,
    published: frontmatter.published !== false,
    excerpt: frontmatter.excerpt || null,
  };
}).sort((a, b) => new Date(b.created_date) - new Date(a.created_date));

// Helper function to get all published posts
export const getPublishedPosts = () => {
  return blogPosts.filter(post => post.published);
};

// Helper function to get a single post by ID
export const getPostById = (id) => {
  return blogPosts.find(post => post.id === id) || null;
};
