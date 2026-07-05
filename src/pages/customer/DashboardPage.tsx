import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FolderKanban, FileText, Heart, Bell, Sparkles, DollarSign, ArrowRight, TrendingUp, Star, MapPin, Calendar } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { mockProjects, mockQuotes, mockBuilders, mockNotifications } from '@/mock/data';

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.4 } }) };

export default function DashboardPage() {
  const { user } = useAuthStore();

  const stats = [
    { icon: <FolderKanban className="h-5 w-5" />, label: 'Active Projects', value: mockProjects.filter(p => p.status === 'in_progress').length, color: 'text-primary bg-primary/10' },
    { icon: <FileText className="h-5 w-5" />, label: 'Pending Quotes', value: mockQuotes.filter(q => q.status === 'pending').length, color: 'text-warning bg-warning/10' },
    { icon: <Heart className="h-5 w-5" />, label: 'Saved Builders', value: 5, color: 'text-destructive bg-destructive/10' },
    { icon: <Bell className="h-5 w-5" />, label: 'Unread Notifications', value: mockNotifications.filter(n => !n.isRead).length, color: 'text-success bg-success/10' },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.06 } } }} className="space-y-6">
      {/* Header */}
      <motion.div variants={fadeUp} custom={0}>
        <h1 className="text-2xl font-bold text-foreground">Welcome back, {user?.name?.split(' ')[0]} 👋</h1>
        <p className="text-muted-foreground">Here's what's happening with your projects.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} variants={fadeUp} custom={i + 1} className="rounded-xl border border-border bg-card p-5 hover:shadow-soft transition-shadow">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.color} mb-3`}>{stat.icon}</div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Projects */}
        <motion.div variants={fadeUp} custom={5} className="lg:col-span-2 rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between p-5 border-b border-border">
            <h2 className="font-semibold text-foreground">Active Projects</h2>
            <Link to="/projects" className="text-sm text-primary hover:underline flex items-center gap-1">View all <ArrowRight className="h-3 w-3" /></Link>
          </div>
          <div className="p-5 space-y-4">
            {mockProjects.slice(0, 2).map(project => (
              <div key={project.id} className="rounded-xl bg-muted/50 p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-foreground text-sm">{project.title}</h3>
                  <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium capitalize">{project.status.replace('_', ' ')}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{project.builderName} • {project.location}</p>
                <div className="w-full bg-muted rounded-full h-2 mb-1"><div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${project.progress}%` }} /></div>
                <p className="text-xs text-muted-foreground text-right">{project.progress}% complete</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div variants={fadeUp} custom={6} className="rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between p-5 border-b border-border">
            <h2 className="font-semibold text-foreground">Recent Notifications</h2>
            <Link to="/notifications" className="text-sm text-primary hover:underline">See all</Link>
          </div>
          <div className="p-3 space-y-1">
            {mockNotifications.slice(0, 4).map(n => (
              <div key={n.id} className={`rounded-lg p-3 text-sm ${n.isRead ? '' : 'bg-primary/5'}`}>
                <p className="font-medium text-foreground text-sm">{n.title}</p>
                <p className="text-xs text-muted-foreground line-clamp-1">{n.message}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recommended Builders */}
      <motion.div variants={fadeUp} custom={7} className="rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /><h2 className="font-semibold text-foreground">AI Recommended Builders</h2></div>
          <Link to="/recommendations" className="text-sm text-primary hover:underline flex items-center gap-1">View all <ArrowRight className="h-3 w-3" /></Link>
        </div>
        <div className="p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockBuilders.slice(0, 3).map(builder => (
            <Link key={builder.id} to={`/builders/${builder.id}`} className="rounded-xl border border-border p-4 hover:shadow-soft hover:border-primary/20 transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <img src={builder.avatar} alt="" className="h-10 w-10 rounded-lg object-cover" />
                <div className="min-w-0"><p className="font-medium text-foreground text-sm truncate group-hover:text-primary transition-colors">{builder.businessName}</p><div className="flex items-center gap-1 text-xs text-muted-foreground"><Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />{builder.rating} • <MapPin className="h-3 w-3" />{builder.location}</div></div>
              </div>
              <div className="flex flex-wrap gap-1">{builder.specializations.slice(0, 2).map(s => <span key={s} className="rounded bg-secondary px-1.5 py-0.5 text-2xs">{s}</span>)}</div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
