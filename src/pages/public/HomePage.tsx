import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search, ArrowRight, Star, Shield, Zap, Users,
  TrendingUp, CheckCircle2, Building2, Brain,
  ChevronRight, Quote, MapPin, Clock,
} from 'lucide-react';
import { cn } from '@/utils/cn';
import { mockBuilders, mockTestimonials, mockStatistics } from '@/mock/data';
import { useAuthStore } from '@/store/authStore';

const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const features = [
  { icon: <Shield className="h-6 w-6" />, title: 'Verified Builders', description: 'Every builder is thoroughly vetted with license, insurance, and portfolio verification.' },
  { icon: <Brain className="h-6 w-6" />, title: 'AI-Powered Matching', description: 'Our AI analyzes your project needs to recommend the best-fit builders automatically.' },
  { icon: <Quote className="h-6 w-6" />, title: 'Quote Comparison', description: 'Compare detailed quotes side by side — price, timeline, materials, and warranty.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Project Tracking', description: 'Real-time dashboards with milestones, progress photos, and payment tracking.' },
  { icon: <Zap className="h-6 w-6" />, title: 'Fast & Efficient', description: 'Get matched with builders in minutes, not weeks. Streamlined from search to hire.' },
  { icon: <Users className="h-6 w-6" />, title: 'Direct Communication', description: 'Chat directly with builders, share documents, and stay aligned throughout your project.' },
];

const howItWorks = [
  { step: '01', title: 'Tell Us Your Project', description: 'Describe your construction needs, budget, location, and timeline.' },
  { step: '02', title: 'Get AI Recommendations', description: 'Our AI matches you with verified builders based on your specific requirements.' },
  { step: '03', title: 'Compare & Choose', description: 'Review profiles, compare quotes, and select the best builder for your project.' },
  { step: '04', title: 'Track Progress', description: 'Monitor your project in real-time with our comprehensive dashboard.' },
];

export default function HomePage() {
  const { loginAs } = useAuthStore();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-400/10 blur-3xl" />
          <div className="absolute top-20 -left-20 h-60 w-60 rounded-full bg-primary-300/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm mb-6">
                <Zap className="h-3.5 w-3.5 text-yellow-400" />
                <span>AI-Powered Builder Matching</span>
              </motion.div>

              <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                Build Smart.{' '}
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Build Right.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="text-lg sm:text-xl text-blue-100/80 max-w-lg mb-8 leading-relaxed">
                Find verified construction professionals, compare quotes intelligently, and manage your building projects with confidence — all in one platform.
              </motion.p>

              {/* Search Bar */}
              <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="What are you building?"
                    className="w-full rounded-xl border-0 bg-white/95 py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 shadow-soft-lg focus:ring-2 focus:ring-blue-300 focus:bg-white transition-all"
                  />
                </div>
                <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-primary-900 shadow-soft-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                  <Search className="h-5 w-5" />
                  Find Builders
                </button>
              </motion.div>

              {/* Quick login buttons (dev helper) */}
              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-2">
                <span className="text-sm text-blue-200/60">Quick demo:</span>
                {(['customer', 'builder', 'admin'] as const).map((role) => (
                  <button
                    key={role}
                    onClick={() => loginAs(role)}
                    className="rounded-lg border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-blue-100 hover:bg-white/20 transition-colors capitalize backdrop-blur-sm"
                  >
                    Login as {role}
                  </button>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeUp} custom={5} className="flex flex-wrap items-center gap-8 mt-10 pt-8 border-t border-white/10">
                {mockStatistics.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-blue-200/70">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side — Featured builder cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                {/* Floating cards */}
                <div className="space-y-4">
                  {mockBuilders.slice(0, 3).map((builder, i) => (
                    <motion.div
                      key={builder.id}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                      className={cn(
                        'glass-card p-4 rounded-2xl flex items-center gap-4',
                        i === 1 && 'ml-8',
                        i === 2 && 'ml-4'
                      )}
                    >
                      <img src={builder.avatar} alt={builder.ownerName} className="h-14 w-14 rounded-xl object-cover" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-foreground truncate">{builder.businessName}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-0.5">
                            <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                            <span className="text-xs font-medium text-foreground">{builder.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{builder.projectCount} projects</span>
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{builder.location}</span>
                        </div>
                      </div>
                      {builder.isVerified && (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/10">
                          <CheckCircle2 className="h-5 w-5 text-success" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* AI Score floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="absolute -right-4 top-4 glass-card p-3 rounded-xl shadow-soft-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">AI Match</p>
                      <p className="text-lg font-bold text-primary">95%</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Simple Process
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From finding the right builder to tracking your project — we've simplified every step.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="text-6xl font-black text-primary/5 group-hover:text-primary/10 transition-colors mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                {i < howItWorks.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-8 -right-4 h-5 w-5 text-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Why BuildWise
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Build With Confidence
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've reimagined the construction hiring process with cutting-edge technology and verified professionals.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group rounded-2xl border border-border bg-card p-6 hover:shadow-soft-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Builders */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Top Professionals</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Builders</h2>
            </div>
            <Link
              to="/builders"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all builders <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockBuilders.slice(0, 3).map((builder, i) => (
              <motion.div
                key={builder.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/builders/${builder.id}`}
                  className="group block rounded-2xl border border-border bg-card overflow-hidden hover:shadow-soft-md hover:border-primary/20 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={builder.coverImage || builder.gallery[0]?.url}
                      alt={builder.businessName}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {builder.isVerified && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-success/90 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        <CheckCircle2 className="h-3 w-3" /> Verified
                      </div>
                    )}
                    {builder.isPremium && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-yellow-500/90 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        <Star className="h-3 w-3 fill-current" /> Premium
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <img src={builder.avatar} alt={builder.ownerName} className="h-11 w-11 rounded-xl object-cover ring-2 ring-border" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground truncate">{builder.businessName}</h3>
                        <p className="text-sm text-muted-foreground">{builder.ownerName}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{builder.shortBio}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-medium text-foreground">{builder.rating}</span>
                          <span className="text-muted-foreground">({builder.reviewCount})</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {builder.location}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border">
                      {builder.specializations.slice(0, 3).map((spec) => (
                        <span key={spec} className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/builders" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              View all builders <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Trusted by Thousands</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what homeowners and developers are saying about their BuildWise experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mockTestimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 hover:shadow-soft transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={cn('h-4 w-4', j < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-border')}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img src={testimonial.avatar} alt={testimonial.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 gradient-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {mockStatistics.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-blue-100/70">{stat.label}</div>
                {stat.change && (
                  <div className="flex items-center justify-center gap-1 mt-2 text-xs text-green-300">
                    <TrendingUp className="h-3 w-3" />
                    +{stat.change}% {stat.changeLabel}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Build With Confidence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of homeowners who found their perfect builder through BuildWise. Start your journey today — it's free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-soft hover:bg-primary/90 transition-colors"
              >
                Get Started Free <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 font-semibold text-foreground hover:bg-accent transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
