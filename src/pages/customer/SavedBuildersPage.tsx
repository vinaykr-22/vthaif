import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockBuilders } from '@/mock/data';

export default function SavedBuildersPage() {
  const saved = mockBuilders.slice(0, 4);
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Saved Builders</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {saved.map(b => (
          <Link key={b.id} to={`/builders/${b.id}`} className="rounded-xl border border-border bg-card p-4 hover:shadow-soft transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <img src={b.avatar} alt="" className="h-12 w-12 rounded-lg object-cover" />
              <div>
                <p className="font-semibold text-foreground">{b.businessName}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />{b.rating}
                  <MapPin className="h-3 w-3" />{b.location}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{b.shortBio}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
