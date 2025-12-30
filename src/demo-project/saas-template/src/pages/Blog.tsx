import { ArrowRight, Clock, User } from 'lucide-react';
import { Button, Badge } from '../components/ui';
import { useTheme } from '../lib/ThemeContext';

interface BlogProps {
  onNavigate: (path: string) => void;
}

const Blog = ({ onNavigate }: BlogProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const featuredPost = {
    title: 'Introducing AI Workflows',
    excerpt: 'Discover how our new AI features can transform the way your team works.',
    author: 'Alex R.',
    date: 'Dec 15, 2024',
    readTime: '8 min',
    category: 'Product',
  };

  const posts = [
    {
      title: 'Remote Team Collaboration',
      excerpt: 'Proven strategies to keep your team connected.',
      author: 'Jordan K.',
      date: 'Dec 12',
      readTime: '5 min',
      category: 'Tips',
    },
    {
      title: 'Security in the Cloud',
      excerpt: 'A guide to keeping your data safe.',
      author: 'Taylor N.',
      date: 'Dec 10',
      readTime: '7 min',
      category: 'Security',
    },
    {
      title: 'Scaling Your Startup',
      excerpt: 'Lessons from 0 to 10K customers.',
      author: 'Sam C.',
      date: 'Dec 8',
      readTime: '10 min',
      category: 'Growth',
    },
  ];

  const categories = ['All', 'Product', 'Tips', 'Security', 'Growth'];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 lg:mb-16">
        <Badge variant="primary" className="mb-4 sm:mb-6">Blog</Badge>
        <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
          Insights & Updates
        </h1>
        <p className={`text-sm sm:text-base lg:text-xl max-w-2xl ${isDark ? 'text-white/50' : 'text-black/50'}`}>
          Stories and updates from our team.
        </p>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((category, idx) => (
            <button
              key={category}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                idx === 0
                  ? isDark ? 'bg-white text-black' : 'bg-black text-white'
                  : isDark 
                    ? 'bg-white/10 text-white/70 hover:bg-white/20' 
                    : 'bg-black/10 text-black/70 hover:bg-black/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 lg:mb-16">
        <div
          className={`p-5 sm:p-6 lg:p-8 xl:p-12 rounded-2xl lg:rounded-3xl border cursor-pointer transition-all ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
              : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
          }`}
        >
          <Badge variant="primary" className="mb-3 sm:mb-4">{featuredPost.category}</Badge>
          <h2 className={`text-xl sm:text-2xl lg:text-4xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            {featuredPost.title}
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-3xl ${isDark ? 'text-white/60' : 'text-black/60'}`}>
            {featuredPost.excerpt}
          </p>
          <div className={`flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <User size={14} className="sm:w-4 sm:h-4" />
              <span>{featuredPost.author}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock size={14} className="sm:w-4 sm:h-4" />
              <span>{featuredPost.readTime}</span>
            </div>
            <span>{featuredPost.date}</span>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 lg:mb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className={`p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl border cursor-pointer transition-all ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
                  : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
              }`}
            >
              <Badge variant="default" className="mb-3 sm:mb-4">{post.category}</Badge>
              <h3 className={`text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                {post.title}
              </h3>
              <p className={`text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                {post.excerpt}
              </p>
              <div className={`flex items-center justify-between text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                <span>{post.author}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={`py-12 sm:py-16 lg:py-24 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            Subscribe to updates
          </h2>
          <p className={`text-sm sm:text-base mb-6 sm:mb-8 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            Get the latest insights in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm transition-all ${
                isDark 
                  ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/20 focus:border-white/30' 
                  : 'bg-black/5 border border-black/10 text-black placeholder:text-black/40 focus:ring-2 focus:ring-black/20 focus:border-black/30'
              } focus:outline-none`}
            />
            <Button className="w-full sm:w-auto">
              Subscribe
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
