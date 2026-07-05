import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, CheckCircle2, Shield, Calendar, Award, ExternalLink, MessageSquare, Heart, Share2, ArrowLeft } from 'lucide-react';
import { cn } from '@/utils/cn';
import { mockBuilders, mockReviews } from '@/mock/data';

export default function BuilderDetailsPage() {
  const { id } = useParams();
  const builder = mockBuilders.find(b => b.id === id) || mockBuilders[0];
  const reviews = mockReviews.filter(r => r.builderId === builder.id);

  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link to="/builders" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4" /> Back to Builders</Link>

        {/* Cover */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
          <img src={builder.coverImage || builder.gallery[0]?.url} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end gap-4">
            <img src={builder.avatar} alt={builder.ownerName} className="h-20 w-20 rounded-2xl object-cover ring-4 ring-white shadow-lg" />
            <div className="flex-1 text-white">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{builder.businessName}</h1>
                {builder.isVerified && <CheckCircle2 className="h-6 w-6 text-success" />}
              </div>
              <p className="text-white/80">{builder.ownerName} • {builder.location}</p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button className="flex items-center gap-2 rounded-xl bg-white/20 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-white hover:bg-white/30 transition-colors"><Heart className="h-4 w-4" /> Save</button>
              <button className="flex items-center gap-2 rounded-xl bg-white/20 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-white hover:bg-white/30 transition-colors"><Share2 className="h-4 w-4" /> Share</button>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Rating', value: builder.rating.toString(), icon: <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" /> },
                { label: 'Experience', value: `${builder.experience}y`, icon: <Calendar className="h-5 w-5 text-primary" /> },
                { label: 'Projects', value: builder.projectCount.toString(), icon: <Award className="h-5 w-5 text-primary" /> },
                { label: 'Response', value: builder.responseTime, icon: <Clock className="h-5 w-5 text-primary" /> },
              ].map(s => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
                  <div className="flex justify-center mb-2">{s.icon}</div>
                  <p className="text-lg font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            {/* About */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3">About</h2>
              <p className="text-muted-foreground leading-relaxed">{builder.description}</p>
            </div>

            {/* Services */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Services</h2>
              <div className="space-y-3">
                {builder.services.map(s => (
                  <div key={s.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                    <div><p className="font-medium text-foreground text-sm">{s.name}</p><p className="text-xs text-muted-foreground">{s.description}</p></div>
                    {s.priceRange && <span className="text-sm font-medium text-primary whitespace-nowrap">{s.priceRange}</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {builder.gallery.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Gallery</h2>
                <div className="grid grid-cols-2 gap-3">
                  {builder.gallery.map(img => (
                    <div key={img.id} className="relative rounded-xl overflow-hidden aspect-video group cursor-pointer">
                      <img src={img.url} alt={img.caption} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {img.caption && <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent"><p className="text-xs text-white">{img.caption}</p></div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Reviews ({builder.reviewCount})</h2>
              <div className="space-y-4">
                {reviews.length > 0 ? reviews.map(r => (
                  <div key={r.id} className="p-4 rounded-xl bg-muted/50">
                    <div className="flex items-center gap-3 mb-2">
                      {r.customerAvatar && <img src={r.customerAvatar} alt="" className="h-8 w-8 rounded-full object-cover" />}
                      <div><p className="text-sm font-medium text-foreground">{r.customerName}</p><div className="flex items-center gap-1">{[...Array(5)].map((_, j) => <Star key={j} className={cn("h-3 w-3", j < r.rating ? "text-yellow-500 fill-yellow-500" : "text-border")} />)}</div></div>
                    </div>
                    <p className="text-sm font-medium text-foreground mb-1">{r.title}</p>
                    <p className="text-sm text-muted-foreground">{r.comment}</p>
                  </div>
                )) : <p className="text-sm text-muted-foreground">No reviews yet.</p>}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 sticky top-24">
              <div className="space-y-4">
                <button className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">Request Quote</button>
                <button className="w-full flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"><MessageSquare className="h-4 w-4" /> Chat with Builder</button>
              </div>
              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Completion Rate</span><span className="font-medium text-foreground">{builder.completionRate}%</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Min. Budget</span><span className="font-medium text-foreground">${builder.minProjectBudget?.toLocaleString()}</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Hourly Rate</span><span className="font-medium text-foreground">${builder.hourlyRate}/hr</span></div>
              </div>
              {builder.certifications.length > 0 && (
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Certifications</h3>
                  {builder.certifications.map(c => (
                    <div key={c.id} className="flex items-center gap-2 py-1.5"><Shield className="h-4 w-4 text-success" /><span className="text-sm text-foreground">{c.name}</span></div>
                  ))}
                </div>
              )}
              {builder.specializations.length > 0 && (
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Specializations</h3>
                  <div className="flex flex-wrap gap-1.5">{builder.specializations.map(s => <span key={s} className="rounded-md bg-secondary px-2 py-1 text-xs font-medium">{s}</span>)}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
