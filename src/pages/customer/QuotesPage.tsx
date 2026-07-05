import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { cn } from '@/utils/cn';
import { mockQuotes } from '@/mock/data';

export default function QuotesPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">My Quotes</h1>
        <Link to="/quotes/compare" className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Compare Quotes</Link>
      </div>
      <div className="space-y-4">
        {mockQuotes.map(q => (
          <div key={q.id} className="rounded-xl border border-border bg-card p-5 hover:shadow-soft transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">{q.projectTitle}</h3>
              <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
                q.status === 'pending' ? "bg-warning/10 text-warning" :
                q.status === 'accepted' ? "bg-success/10 text-success" :
                "bg-destructive/10 text-destructive"
              )}>{q.status}</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <img src={q.builderAvatar} alt="" className="h-8 w-8 rounded-lg object-cover" />
              <span className="text-sm text-foreground">{q.builderName}</span>
              <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
              <span className="text-sm">{q.builderRating}</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div><span className="text-muted-foreground">Price</span><p className="font-semibold text-foreground">${q.price.toLocaleString()}</p></div>
              <div><span className="text-muted-foreground">Timeline</span><p className="font-medium text-foreground">{q.timeline}</p></div>
              <div><span className="text-muted-foreground">AI Score</span><p className="font-medium text-primary">{q.aiScore}%</p></div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
