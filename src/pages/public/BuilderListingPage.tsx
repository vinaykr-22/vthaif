import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, CheckCircle2, SlidersHorizontal, Grid3X3, List, ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';
import { mockBuilders } from '@/mock/data';
import { SORT_OPTIONS, LOCATIONS, SPECIALIZATIONS } from '@/constants';

export default function BuilderListingPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = mockBuilders.filter(b =>
    b.businessName.toLowerCase().includes(search.toLowerCase()) ||
    b.ownerName.toLowerCase().includes(search.toLowerCase()) ||
    b.specializations.some(s => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Builders</h1>
          <p className="text-muted-foreground mb-8">Browse our network of verified construction professionals</p>
        </motion.div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search builders, specializations..." className="w-full rounded-xl border border-input bg-background py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-ring focus:border-transparent transition-all" />
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 rounded-xl border border-input px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors">
            <SlidersHorizontal className="h-4 w-4" /> Filters <ChevronDown className={cn("h-3 w-3 transition-transform", showFilters && "rotate-180")} />
          </button>
          <div className="flex rounded-xl border border-input overflow-hidden">
            <button onClick={() => setView('grid')} className={cn("px-3 py-2.5", view === 'grid' ? 'bg-accent' : 'hover:bg-accent/50')}><Grid3X3 className="h-4 w-4" /></button>
            <button onClick={() => setView('list')} className={cn("px-3 py-2.5 border-l border-input", view === 'list' ? 'bg-accent' : 'hover:bg-accent/50')}><List className="h-4 w-4" /></button>
          </div>
        </div>

        {showFilters && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="rounded-xl border border-border bg-card p-4 mb-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <select className="rounded-lg border border-input bg-background px-3 py-2 text-sm"><option value="">All Locations</option>{LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}</select>
            <select className="rounded-lg border border-input bg-background px-3 py-2 text-sm"><option value="">All Specializations</option>{SPECIALIZATIONS.map(s => <option key={s} value={s}>{s}</option>)}</select>
            <select className="rounded-lg border border-input bg-background px-3 py-2 text-sm"><option value="">Min Rating</option>{[4.5,4.0,3.5,3.0].map(r => <option key={r} value={r}>⭐ {r}+</option>)}</select>
            <select className="rounded-lg border border-input bg-background px-3 py-2 text-sm"><option value="">Sort By</option>{SORT_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}</select>
          </motion.div>
        )}

        <p className="text-sm text-muted-foreground mb-6">{filtered.length} builders found</p>

        {/* Builder Grid */}
        <div className={cn("grid gap-6", view === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1')}>
          {filtered.map((builder, i) => (
            <motion.div key={builder.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Link to={`/builders/${builder.id}`} className={cn("group block rounded-2xl border border-border bg-card overflow-hidden hover:shadow-soft-md hover:border-primary/20 transition-all duration-300", view === 'list' && 'flex')}>
                <div className={cn("relative overflow-hidden", view === 'grid' ? 'h-48' : 'h-32 w-48 flex-shrink-0')}>
                  <img src={builder.coverImage || builder.gallery[0]?.url} alt={builder.businessName} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {builder.isVerified && <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-success/90 px-2 py-0.5 text-xs font-medium text-white"><CheckCircle2 className="h-3 w-3" /> Verified</div>}
                </div>
                <div className="p-4 flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <img src={builder.avatar} alt={builder.ownerName} className="h-10 w-10 rounded-lg object-cover ring-2 ring-border" />
                    <div className="min-w-0"><h3 className="font-semibold text-foreground truncate">{builder.businessName}</h3><p className="text-xs text-muted-foreground">{builder.ownerName} • {builder.experience}y exp</p></div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{builder.shortBio}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" /><span className="font-medium">{builder.rating}</span><span className="text-muted-foreground">({builder.reviewCount})</span></span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" />{builder.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-border">
                    {builder.specializations.slice(0, 3).map(s => <span key={s} className="rounded-md bg-secondary px-2 py-0.5 text-xs">{s}</span>)}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
