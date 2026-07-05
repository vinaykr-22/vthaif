import { motion } from 'framer-motion';
import { Star, DollarSign, Clock, Shield, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { mockQuotes } from '@/mock/data';

export default function QuoteComparisonPage() {
  const quotes = mockQuotes.filter(q => q.projectTitle === 'Kitchen Remodel');
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Compare Quotes</h1>
      <p className="text-muted-foreground">Kitchen Remodel — {quotes.length} quotes</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Criteria</th>
              {quotes.map(q => (<th key={q.id} className="p-4 text-center min-w-[200px]"><div className="flex flex-col items-center gap-2"><img src={q.builderAvatar} alt="" className="h-12 w-12 rounded-xl object-cover" /><span className="font-semibold text-foreground text-sm">{q.builderName}</span></div></th>))}
            </tr>
          </thead>
          <tbody>
            {[
              { label: 'Price', render: (q: typeof quotes[0]) => <span className="text-lg font-bold text-foreground">${q.price.toLocaleString()}</span> },
              { label: 'Timeline', render: (q: typeof quotes[0]) => <span className="font-medium text-foreground">{q.timeline}</span> },
              { label: 'Materials', render: (q: typeof quotes[0]) => <span className="text-sm text-muted-foreground">{q.materials}</span> },
              { label: 'Warranty', render: (q: typeof quotes[0]) => <span className="font-medium text-foreground">{q.warranty}</span> },
              { label: 'Rating', render: (q: typeof quotes[0]) => <div className="flex items-center justify-center gap-1"><Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /><span className="font-medium">{q.builderRating}</span></div> },
              { label: 'AI Score', render: (q: typeof quotes[0]) => <div className={cn("inline-flex rounded-full px-3 py-1 text-sm font-bold", (q.aiScore || 0) >= 90 ? "bg-success/10 text-success" : (q.aiScore || 0) >= 75 ? "bg-primary/10 text-primary" : "bg-warning/10 text-warning")}>{q.aiScore}%</div> },
            ].map(row => (
              <tr key={row.label} className="border-b border-border">
                <td className="p-4 text-sm font-medium text-muted-foreground">{row.label}</td>
                {quotes.map(q => (<td key={q.id} className="p-4 text-center">{row.render(q)}</td>))}
              </tr>
            ))}
            <tr>
              <td className="p-4"></td>
              {quotes.map(q => (<td key={q.id} className="p-4 text-center"><div className="flex flex-col gap-2"><button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">Hire Builder</button><button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors flex items-center justify-center gap-1"><MessageSquare className="h-3.5 w-3.5" /> Chat</button></div></td>))}
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
