// Simple frontmatter parser (browser-compatible, no Node.js dependencies)
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: content.trim() };
  }

  const frontmatterStr = match[1];
  const markdownContent = match[2];

  // Parse YAML-like frontmatter (simple key: value pairs)
  const data = {};
  const lines = frontmatterStr.split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Parse booleans
    if (value === 'true') value = true;
    else if (value === 'false') value = false;
    // Parse null
    else if (value === 'null' || value === '') value = null;

    data[key] = value;
  }

  return { data, content: markdownContent.trim() };
}

// Auto-discover all markdown files in the blog content directory
const blogFiles = import.meta.glob('/src/content/blog/*.md', { as: 'raw', eager: true });

// Parse all blog posts from markdown files
export const blogPosts = Object.entries(blogFiles).map(([filepath, content]) => {
  const { data: frontmatter, content: markdownContent } = parseFrontmatter(content);

  // Extract the filename without extension to use as ID/slug
  const filename = filepath.split('/').pop().replace('.md', '');

  return {
    id: frontmatter.id || filename,
    title: frontmatter.title || 'Untitled',
    content: markdownContent,
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
