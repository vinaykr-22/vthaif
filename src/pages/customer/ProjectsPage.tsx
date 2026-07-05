import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FolderKanban, Calendar, DollarSign } from 'lucide-react';
import { cn } from '@/utils/cn';
import { mockProjects } from '@/mock/data';

export default function ProjectsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">My Projects</h1>
      <div className="space-y-4">
        {mockProjects.map(p => (
          <Link key={p.id} to={`/projects/${p.id}`} className="block rounded-xl border border-border bg-card p-5 hover:shadow-soft hover:border-primary/20 transition-all">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">{p.title}</h3>
              <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-medium capitalize", p.status === 'in_progress' ? "bg-primary/10 text-primary" : p.status === 'completed' ? "bg-success/10 text-success" : "bg-warning/10 text-warning")}>{p.status.replace('_', ' ')}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{p.description.slice(0, 120)}...</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1"><FolderKanban className="h-3.5 w-3.5" />{p.builderName}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{p.estimatedEndDate}</span>
              <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" />${p.budget.toLocaleString()}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2"><div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${p.progress}%` }} /></div>
            <p className="text-xs text-muted-foreground mt-1 text-right">{p.progress}% complete</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
