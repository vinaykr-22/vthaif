import { motion } from 'framer-motion';
import { Search, FileText, Users, BarChart3, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  { icon: <Search className="h-8 w-8" />, title: 'Describe Your Project', description: 'Tell us what you want to build — home type, budget, location, timeline, and any special requirements.', color: 'bg-blue-500' },
  { icon: <Users className="h-8 w-8" />, title: 'Get Matched with Builders', description: 'Our AI analyzes your needs and matches you with the most suitable verified builders in your area.', color: 'bg-purple-500' },
  { icon: <FileText className="h-8 w-8" />, title: 'Compare Quotes', description: 'Receive detailed quotes from multiple builders. Compare prices, timelines, materials, and reviews side by side.', color: 'bg-emerald-500' },
  { icon: <BarChart3 className="h-8 w-8" />, title: 'Track Your Project', description: 'Once you hire a builder, track milestones, payments, and progress through your real-time dashboard.', color: 'bg-orange-500' },
  { icon: <Rocket className="h-8 w-8" />, title: 'Move In', description: 'Your project is complete! Leave a review to help others find great builders too.', color: 'bg-pink-500' },
];

export default function HowItWorksPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">How BuildWise Works</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Five simple steps from finding a builder to moving into your dream home.</p>
        </motion.div>
        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex items-start gap-6">
              <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl ${step.color} text-white shadow-lg`}>{step.icon}</div>
              <div>
                <div className="text-sm font-semibold text-primary mb-1">Step {i + 1}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/signup" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">Get Started Free</Link>
        </div>
      </div>
    </div>
  );
}
