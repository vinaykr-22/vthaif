import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">Have questions? We'd love to hear from you.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            {[{ icon: <Mail className="h-5 w-5" />, title: 'Email', text: 'hello@buildwise.com' }, { icon: <Phone className="h-5 w-5" />, title: 'Phone', text: '+1 (555) 000-0000' }, { icon: <MapPin className="h-5 w-5" />, title: 'Office', text: '100 Market St, San Francisco, CA 94105' }].map(c => (
              <div key={c.title} className="flex items-start gap-4"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">{c.icon}</div><div><h3 className="font-semibold text-foreground">{c.title}</h3><p className="text-muted-foreground">{c.text}</p></div></div>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            {submitted ? (
              <div className="text-center py-12"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 mx-auto mb-4"><Send className="h-8 w-8 text-success" /></div><h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3><p className="text-muted-foreground">We'll get back to you within 24 hours.</p></div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4"><input type="text" placeholder="First Name" required className="rounded-xl border border-input bg-background px-4 py-3 text-sm" /><input type="text" placeholder="Last Name" required className="rounded-xl border border-input bg-background px-4 py-3 text-sm" /></div>
                <input type="email" placeholder="Email" required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm" />
                <input type="text" placeholder="Subject" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm" />
                <textarea placeholder="Your message..." rows={5} required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm resize-none" />
                <button type="submit" className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
