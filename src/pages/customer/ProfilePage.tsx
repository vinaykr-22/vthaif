import { useAuthStore } from '@/store/authStore';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuthStore();
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">My Profile</h1>
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-6 mb-8">
          <div className="relative"><img src={user?.avatar} alt="" className="h-24 w-24 rounded-2xl object-cover ring-4 ring-border" /><button className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"><Camera className="h-4 w-4" /></button></div>
          <div><h2 className="text-xl font-semibold text-foreground">{user?.name}</h2><p className="text-muted-foreground capitalize">{user?.role}</p></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[{ icon: <User className="h-4 w-4" />, label: 'Full Name', value: user?.name }, { icon: <Mail className="h-4 w-4" />, label: 'Email', value: user?.email }, { icon: <Phone className="h-4 w-4" />, label: 'Phone', value: user?.phone || 'Not set' }, { icon: <MapPin className="h-4 w-4" />, label: 'Location', value: user?.location || 'Not set' }].map(f => (
            <div key={f.label}><label className="text-sm font-medium text-foreground mb-1.5 block">{f.label}</label><div className="flex items-center gap-2 rounded-xl border border-input bg-background px-4 py-3"><span className="text-muted-foreground">{f.icon}</span><input defaultValue={f.value} className="flex-1 bg-transparent text-sm outline-none" /></div></div>
          ))}
        </div>
        <button className="mt-6 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">Save Changes</button>
      </div>
    </motion.div>
  );
}
