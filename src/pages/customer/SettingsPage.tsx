import { motion } from 'framer-motion';
import { User, Bell, Shield, Moon, Globe } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';

export default function SettingsPage() {
  const { theme, setTheme } = useThemeStore();
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      <div className="space-y-6">
        {[
          { icon: <Moon className="h-5 w-5" />, title: 'Appearance', desc: 'Customize the look of the app', content: (
            <div className="flex gap-2 mt-3">{(['light', 'dark', 'system'] as const).map(t => <button key={t} onClick={() => setTheme(t)} className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition-colors ${theme === t ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-accent'}`}>{t}</button>)}</div>
          )},
          { icon: <Bell className="h-5 w-5" />, title: 'Notifications', desc: 'Manage your notification preferences', content: (
            <div className="space-y-3 mt-3">{['Email notifications', 'Push notifications', 'Project updates', 'Quote alerts'].map(n => <label key={n} className="flex items-center justify-between"><span className="text-sm text-muted-foreground">{n}</span><input type="checkbox" defaultChecked className="rounded border-input" /></label>)}</div>
          )},
          { icon: <Shield className="h-5 w-5" />, title: 'Privacy & Security', desc: 'Manage your security settings', content: (
            <div className="mt-3 space-y-2"><button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors">Change Password</button><button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors ml-2">Enable 2FA</button></div>
          )},
        ].map(s => (
          <div key={s.title} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">{s.icon}</div><div><h3 className="font-semibold text-foreground">{s.title}</h3><p className="text-sm text-muted-foreground">{s.desc}</p></div></div>
            {s.content}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
