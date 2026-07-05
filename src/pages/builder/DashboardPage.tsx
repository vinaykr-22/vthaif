import { motion } from 'framer-motion';
import { Users, FileText, FolderKanban, DollarSign, Star, Eye, ShieldCheck, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { mockAnalytics, mockLeads } from '@/mock/data';
import { useAuthStore } from '@/store/authStore';
import { cn } from '@/utils/cn';

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06 } }) };

export default function DashboardPage() {
  const { user } = useAuthStore();
  const stats = [
    { icon: <Users className="h-5 w-5" />, label: 'Active Leads', value: '12', change: '+3', color: 'text-primary bg-primary/10' },
    { icon: <FileText className="h-5 w-5" />, label: 'Pending Quotes', value: '5', change: '+2', color: 'text-warning bg-warning/10' },
    { icon: <FolderKanban className="h-5 w-5" />, label: 'Active Projects', value: '4', change: '0', color: 'text-success bg-success/10' },
    { icon: <DollarSign className="h-5 w-5" />, label: 'Revenue (MTD)', value: '$118K', change: '+12%', color: 'text-primary bg-primary/10' },
    { icon: <Star className="h-5 w-5" />, label: 'Rating', value: '4.9', change: '+0.1', color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-500/10' },
    { icon: <Eye className="h-5 w-5" />, label: 'Profile Views', value: '910', change: '+11%', color: 'text-purple-500 bg-purple-50 dark:bg-purple-500/10' },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.06 } } }} className="space-y-6">
      <motion.div variants={fadeUp} custom={0}>
        <h1 className="text-2xl font-bold text-foreground">Builder Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {user?.name}. Here's your business overview.</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} variants={fadeUp} custom={i + 1} className="rounded-xl border border-border bg-card p-4 hover:shadow-soft transition-shadow">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${s.color} mb-3`}>{s.icon}</div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <div className="flex items-center justify-between"><p className="text-sm text-muted-foreground">{s.label}</p><span className="text-xs font-medium text-success flex items-center gap-0.5"><TrendingUp className="h-3 w-3" />{s.change}</span></div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div variants={fadeUp} custom={7} className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={mockAnalytics.revenue}><CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" /><XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} /><YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} /><Tooltip /><Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} /></BarChart>
          </ResponsiveContainer>
        </motion.div>
        <motion.div variants={fadeUp} custom={8} className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Monthly Leads</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mockAnalytics.monthlyLeads}><CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" /><XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} /><YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} /><Tooltip /><Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: 'hsl(var(--primary))' }} /></LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Leads */}
      <motion.div variants={fadeUp} custom={9} className="rounded-xl border border-border bg-card">
        <div className="p-5 border-b border-border"><h3 className="font-semibold text-foreground">Recent Leads</h3></div>
        <div className="divide-y divide-border">
          {mockLeads.map(lead => (
            <div key={lead.id} className="p-4 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm">{lead.customerName}</p>
                <p className="text-xs text-muted-foreground">{lead.projectType} • {lead.location}</p>
              </div>
              <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-medium capitalize", lead.status === 'new' ? "bg-primary/10 text-primary" : lead.status === 'contacted' ? "bg-warning/10 text-warning" : "bg-success/10 text-success")}>{lead.status}</span>
              <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", lead.priority === 'high' ? "bg-destructive/10 text-destructive" : "bg-secondary text-secondary-foreground")}>{lead.priority}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
