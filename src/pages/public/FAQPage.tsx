import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';
import { mockFAQs } from '@/mock/data';

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const categories = [...new Set(mockFAQs.map(f => f.category))];
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = activeCategory === 'all' ? mockFAQs : mockFAQs.filter(f => f.category === activeCategory);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">Find answers to common questions about BuildWise.</p>
        </motion.div>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button onClick={() => setActiveCategory('all')} className={cn("rounded-full px-4 py-2 text-sm font-medium transition-colors", activeCategory === 'all' ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent")}>All</button>
          {categories.map(c => <button key={c} onClick={() => setActiveCategory(c)} className={cn("rounded-full px-4 py-2 text-sm font-medium transition-colors", activeCategory === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent")}>{c}</button>)}
        </div>
        <div className="space-y-3">
          {filtered.map(faq => (
            <motion.div key={faq.id} layout className="rounded-xl border border-border bg-card overflow-hidden">
              <button onClick={() => setOpenId(openId === faq.id ? null : faq.id)} className="flex w-full items-center justify-between p-5 text-left">
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform flex-shrink-0", openId === faq.id && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
