import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Brain, TrendingUp, AlertTriangle, Star, MapPin, DollarSign, Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { mockRecommendations } from '@/mock/data';

export default function RecommendationsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center gap-3"><Sparkles className="h-6 w-6 text-primary" /><div><h1 className="text-2xl font-bold text-foreground">AI Recommendations</h1><p className="text-muted-foreground">Builders matched to your project requirements</p></div></div>
      <div className="space-y-6">
        {mockRecommendations.map((rec, i) => (
          <motion.div key={rec.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-soft-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <img src={rec.builder.avatar} alt="" className="h-16 w-16 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="flex items-center gap-2"><h3 className="text-lg font-semibold text-foreground">{rec.builder.businessName}</h3></div>
                  <p className="text-sm text-muted-foreground">{rec.builder.ownerName} • {rec.builder.location}</p>
                  <div className="flex items-center gap-2 mt-1"><Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /><span className="text-sm font-medium">{rec.builder.rating}</span><span className="text-xs text-muted-foreground">({rec.builder.reviewCount} reviews)</span></div>
                </div>
                <div className="text-center"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"><span className="text-2xl font-bold text-primary">{rec.matchScore}%</span></div><p className="text-xs text-primary font-medium mt-1">AI Match</p></div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{rec.reason}</p>
              <div className="grid sm:grid-cols-3 gap-3 mb-4">
                <div className="rounded-lg bg-muted/50 p-3"><div className="flex items-center gap-1 text-xs text-muted-foreground mb-1"><DollarSign className="h-3 w-3" />Budget</div><p className="text-sm font-medium text-foreground">${rec.estimatedBudget.min.toLocaleString()} - ${rec.estimatedBudget.max.toLocaleString()}</p></div>
                <div className="rounded-lg bg-muted/50 p-3"><div className="flex items-center gap-1 text-xs text-muted-foreground mb-1"><Clock className="h-3 w-3" />Timeline</div><p className="text-sm font-medium text-foreground">{rec.estimatedTimeline}</p></div>
                <div className="rounded-lg bg-muted/50 p-3"><div className="flex items-center gap-1 text-xs text-muted-foreground mb-1"><AlertTriangle className="h-3 w-3" />Risk</div><p className={cn("text-sm font-medium capitalize", rec.riskLevel === 'low' ? 'text-success' : rec.riskLevel === 'medium' ? 'text-warning' : 'text-destructive')}>{rec.riskLevel}</p></div>
              </div>
              <div className="flex gap-2 flex-wrap mb-4">{rec.strengths.map(s => <span key={s} className="rounded-full bg-success/10 text-success px-2.5 py-0.5 text-xs font-medium">✓ {s}</span>)}</div>
              <div className="flex gap-3">
                <Link to={`/builders/${rec.builder.id}`} className="flex-1 rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground text-center hover:bg-primary/90 transition-colors">View Profile</Link>
                <button className="rounded-xl border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors">Request Quote</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
