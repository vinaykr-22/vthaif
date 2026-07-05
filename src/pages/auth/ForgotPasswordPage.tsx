import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Building2, ArrowRight, ArrowLeft, KeyRound, Lock } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email');
  const [email, setEmail] = useState('');

  return (
    <div className="flex min-h-[80vh] items-center justify-center py-12 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Building2 className="h-6 w-6" /></div></Link>
          <h1 className="text-2xl font-bold text-foreground">{step === 'email' ? 'Forgot Password?' : step === 'otp' ? 'Enter OTP' : 'Reset Password'}</h1>
          <p className="text-muted-foreground mt-1">{step === 'email' ? 'Enter your email to receive a reset code' : step === 'otp' ? `We sent a code to ${email}` : 'Enter your new password'}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
          {step === 'email' && (
            <form onSubmit={e => { e.preventDefault(); setStep('otp'); }} className="space-y-4">
              <div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-sm" /></div>
              <button type="submit" className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2">Send Reset Code <ArrowRight className="h-4 w-4" /></button>
            </form>
          )}
          {step === 'otp' && (
            <form onSubmit={e => { e.preventDefault(); setStep('reset'); }} className="space-y-4">
              <div className="flex gap-2 justify-center">{[0,1,2,3,4,5].map(i => <input key={i} type="text" maxLength={1} className="w-12 h-12 text-center rounded-xl border border-input bg-background text-lg font-bold focus:ring-2 focus:ring-ring" />)}</div>
              <button type="submit" className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2">Verify <ArrowRight className="h-4 w-4" /></button>
            </form>
          )}
          {step === 'reset' && (
            <form onSubmit={e => { e.preventDefault(); }} className="space-y-4">
              <div className="relative"><Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><input type="password" placeholder="New password" required className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-sm" /></div>
              <div className="relative"><Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><input type="password" placeholder="Confirm password" required className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-sm" /></div>
              <Link to="/login" className="block w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 text-center">Reset Password</Link>
            </form>
          )}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6"><Link to="/login" className="text-primary font-medium hover:underline inline-flex items-center gap-1"><ArrowLeft className="h-3 w-3" /> Back to Sign in</Link></p>
      </motion.div>
    </div>
  );
}
