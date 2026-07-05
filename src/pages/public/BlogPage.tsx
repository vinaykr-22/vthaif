import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockBlogPosts } from '@/mock/data';

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog & Insights</h1>
          <p className="text-lg text-muted-foreground">Expert tips, industry trends, and construction insights.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogPosts.map((post, i) => (
            <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-soft-md transition-shadow">
              <div className="relative h-48 overflow-hidden"><img src={post.coverImage} alt={post.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white">{post.category}</div></div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.publishedAt}</span><span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime} min read</span></div>
                <h2 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><img src={post.author.avatar} alt="" className="h-7 w-7 rounded-full object-cover" /><span className="text-xs text-muted-foreground">{post.author.name}</span></div>
                  <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Read more <ArrowRight className="h-3.5 w-3.5" /></span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
