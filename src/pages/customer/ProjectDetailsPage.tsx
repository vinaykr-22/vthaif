import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock, DollarSign, Calendar, FileText, Image, MessageSquare } from 'lucide-react';
import { cn } from '@/utils/cn';
import { mockProjects } from '@/mock/data';

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const project = mockProjects.find(p => p.id === id) || mockProjects[0];

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div><h1 className="text-2xl font-bold text-foreground">{project.title}</h1><p className="text-muted-foreground">{project.builderName} • {project.location}</p></div>

      {/* Progress */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-2"><span className="text-sm font-medium">Overall Progress</span><span className="text-sm font-bold text-primary">{project.progress}%</span></div>
        <div className="w-full bg-muted rounded-full h-3"><div className="bg-primary h-3 rounded-full transition-all" style={{ width: `${project.progress}%` }} /></div>
        <div className="grid grid-cols-3 gap-4 mt-4 text-center">
          <div><p className="text-lg font-bold text-foreground">${project.budget.toLocaleString()}</p><p className="text-xs text-muted-foreground">Budget</p></div>
          <div><p className="text-lg font-bold text-foreground">${project.spent.toLocaleString()}</p><p className="text-xs text-muted-foreground">Spent</p></div>
          <div><p className="text-lg font-bold text-foreground">{project.estimatedEndDate}</p><p className="text-xs text-muted-foreground">Due Date</p></div>
        </div>
      </div>

      {/* Milestones */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="font-semibold text-foreground mb-4">Milestones</h2>
        <div className="space-y-4">
          {project.milestones.map((m, i) => (
            <div key={m.id} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                {m.status === 'completed' ? <CheckCircle2 className="h-6 w-6 text-success" /> : m.status === 'in_progress' ? <Clock className="h-6 w-6 text-primary animate-pulse" /> : <Circle className="h-6 w-6 text-border" />}
                {i < project.milestones.length - 1 && <div className={cn("w-0.5 h-12 mt-1", m.status === 'completed' ? "bg-success" : "bg-border")} />}
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center justify-between"><h3 className="font-medium text-foreground">{m.title}</h3>{m.payment && <span className="text-sm font-medium text-foreground">${m.payment.toLocaleString()}</span>}</div>
                <p className="text-sm text-muted-foreground">{m.description}</p>
                <p className="text-xs text-muted-foreground mt-1">Due: {m.dueDate}{m.completedDate ? ` • Completed: ${m.completedDate}` : ''}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Updates */}
      {project.updates.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-semibold text-foreground mb-4">Recent Updates</h2>
          <div className="space-y-3">{project.updates.map(u => (<div key={u.id} className="rounded-lg bg-muted/50 p-4"><p className="text-sm text-foreground">{u.message}</p><p className="text-xs text-muted-foreground mt-1">{u.createdBy} • {u.createdAt}</p></div>))}</div>
        </div>
      )}

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-semibold text-foreground mb-4">Photo Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{project.gallery.map(img => (<div key={img.id} className="rounded-xl overflow-hidden aspect-video"><img src={img.url} alt={img.caption} className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" /></div>))}</div>
        </div>
      )}
    </motion.div>
  );
}
