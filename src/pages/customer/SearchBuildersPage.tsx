import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { mockBuilders } from '@/mock/data';
import { LOCATIONS, SPECIALIZATIONS } from '@/constants';

export default function SearchBuildersPage() {
  const [search, setSearch] = useState('');
  const filtered = mockBuilders.filter(b => b.businessName.toLowerCase().includes(search.toLowerCase()) || b.specializations.some(s => s.toLowerCase().includes(search.toLowerCase())));
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Search Builders</h1>
      <div className="flex gap-3">
        <div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, specialization, location..." className="w-full rounded-xl border border-input bg-background py-2.5 pl-10 pr-4 text-sm" /></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <select className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm"><option value="">All Locations</option>{LOCATIONS.map(l => <option key={l}>{l}</option>)}</select>
        <select className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm"><option value="">All Specializations</option>{SPECIALIZATIONS.map(s => <option key={s}>{s}</option>)}</select>
      </div>
      <div className="space-y-4">
        {filtered.map(b => (
          <Link key={b.id} to={`/builders/${b.id}`} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:shadow-soft hover:border-primary/20 transition-all">
            <img src={b.avatar} alt="" className="h-14 w-14 rounded-xl object-cover" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2"><h3 className="font-semibold text-foreground">{b.businessName}</h3>{b.isVerified && <CheckCircle2 className="h-4 w-4 text-success" />}</div>
              <p className="text-sm text-muted-foreground">{b.shortBio}</p>
              <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground"><span className="flex items-center gap-1"><Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />{b.rating}</span><span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{b.location}</span><span>{b.experience}y exp</span></div>
            </div>
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap">View Profile</button>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
