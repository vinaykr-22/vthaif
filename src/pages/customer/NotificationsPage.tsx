import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Check, CheckCheck, Filter } from 'lucide-react';
import { cn } from '@/utils/cn';
import { mockNotifications } from '@/mock/data';
import { NOTIFICATION_CATEGORIES } from '@/constants';

export default function NotificationsPage() {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState(mockNotifications);
  const filtered = filter === 'all' ? notifications : notifications.filter(n => n.category === filter);
  const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between"><h1 className="text-2xl font-bold text-foreground">Notifications</h1><button onClick={markAllRead} className="flex items-center gap-1 text-sm text-primary hover:underline"><CheckCheck className="h-4 w-4" /> Mark all read</button></div>
      <div className="flex gap-2 flex-wrap">{NOTIFICATION_CATEGORIES.map(c => <button key={c.value} onClick={() => setFilter(c.value)} className={cn("rounded-full px-4 py-1.5 text-sm font-medium transition-colors", filter === c.value ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent")}>{c.label}</button>)}</div>
      <div className="space-y-2">
        {filtered.map(n => (
          <div key={n.id} className={cn("rounded-xl border border-border bg-card p-4 flex items-start gap-3 transition-colors", !n.isRead && "bg-primary/5 border-primary/20")}>
            <div className={cn("flex h-9 w-9 items-center justify-center rounded-lg flex-shrink-0", n.category === 'project' ? 'bg-primary/10 text-primary' : n.category === 'quote' ? 'bg-warning/10 text-warning' : n.category === 'chat' ? 'bg-success/10 text-success' : 'bg-secondary text-muted-foreground')}><Bell className="h-4 w-4" /></div>
            <div className="flex-1"><p className="text-sm font-medium text-foreground">{n.title}</p><p className="text-sm text-muted-foreground">{n.message}</p><p className="text-xs text-muted-foreground mt-1">{new Date(n.createdAt).toLocaleString()}</p></div>
            {!n.isRead && <div className="h-2 w-2 rounded-full bg-primary mt-2" />}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
