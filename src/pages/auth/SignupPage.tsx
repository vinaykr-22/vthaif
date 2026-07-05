import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Building2, Eye, EyeOff, ArrowRight, HardHat, Home } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useAuthStore } from '@/store/authStore';
import type { UserRole } from '@/types';

export default function SignupPage() {
  const [role, setRole] = useState<UserRole>('customer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup({ name, email, password, role });
    navigate(role === 'customer' ? '/dashboard' : '/builder/dashboard');
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center py-12 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Building2 className="h-6 w-6" /></div><span className="text-2xl font-bold text-foreground">BuildWise</span></Link>
          <h1 className="text-2xl font-bold text-foreground">Create your account</h1>
          <p className="text-muted-foreground mt-1">Join thousands of users building with confidence</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[{ value: 'customer' as const, icon: <Home className="h-5 w-5" />, label: 'Homeowner', desc: 'Find & hire builders' }, { value: 'builder' as const, icon: <HardHat className="h-5 w-5" />, label: 'Builder', desc: 'Get hired for projects' }].map(r => (
              <button key={r.value} onClick={() => setRole(r.value)} type="button" className={cn("rounded-xl border-2 p-4 text-center transition-all", role === r.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/30")}>
                <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg mx-auto mb-2", role === r.value ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>{r.icon}</div>
                <p className="text-sm font-semibold text-foreground">{r.label}</p>
                <p className="text-xs text-muted-foreground">{r.desc}</p>
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label><div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" required className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-sm" /></div></div>
            <div><label className="block text-sm font-medium text-foreground mb-1.5">Email</label><div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-sm" /></div></div>
            <div><label className="block text-sm font-medium text-foreground mb-1.5">Password</label><div className="relative"><Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Min 8 characters" required minLength={8} className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-10 text-sm" /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button></div></div>
            <label className="flex items-start gap-2 text-sm"><input type="checkbox" required className="rounded border-input mt-0.5" /><span className="text-muted-foreground">I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a></span></label>
            <button type="submit" disabled={isLoading} className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">{isLoading ? 'Creating account...' : <>Create Account <ArrowRight className="h-4 w-4" /></>}</button>
          </form>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6">Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link></p>
      </motion.div>
    </div>
  );
}
