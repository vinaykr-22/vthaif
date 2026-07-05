import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Heart } from 'lucide-react';
import { mockTeamMembers } from '@/mock/data';

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">About BuildWise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">We're on a mission to transform how people find and work with construction professionals — making the process transparent, efficient, and trustworthy.</p>
        </motion.div>

        {/* Mission, Vision, Problem */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <Target className="h-6 w-6" />, title: 'Our Mission', text: 'To democratize access to quality construction services by connecting homeowners with verified, reliable builders through AI-powered technology.' },
            { icon: <Eye className="h-6 w-6" />, title: 'Our Vision', text: 'A world where every construction project starts with confidence — where finding the right builder is as easy as booking a ride.' },
            { icon: <Lightbulb className="h-6 w-6" />, title: 'The Problem', text: 'The construction industry lacks transparency. Homeowners struggle with unreliable contractors, opaque pricing, and zero accountability. We\'re changing that.' },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The passionate people behind BuildWise who are building the future of construction.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockTeamMembers.map((member, i) => (
            <motion.div key={member.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-card p-6 text-center group hover:shadow-soft-md transition-shadow">
              <img src={member.avatar} alt={member.name} className="h-24 w-24 rounded-full object-cover mx-auto mb-4 ring-4 ring-border group-hover:ring-primary/20 transition-all" />
              <h3 className="font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
