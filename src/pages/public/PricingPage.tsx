import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/utils/cn';
import { mockPricingPlans } from '@/mock/data';

export default function PricingPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Start free and upgrade as your needs grow. No hidden fees, no surprises.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {mockPricingPlans.map((plan, i) => (
            <motion.div key={plan.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={cn("rounded-2xl border bg-card p-8 relative", plan.isPopular ? "border-primary shadow-glow scale-105" : "border-border")}>
              {plan.isPopular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">Most Popular</div>}
              <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              <div className="mb-6"><span className="text-4xl font-bold text-foreground">${plan.price}</span>{plan.price > 0 && <span className="text-muted-foreground">/{plan.period}</span>}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (<li key={f} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" /><span className="text-muted-foreground">{f}</span></li>))}
              </ul>
              <button className={cn("w-full rounded-xl py-3 text-sm font-semibold transition-colors", plan.isPopular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-border text-foreground hover:bg-accent")}>{plan.ctaText}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
