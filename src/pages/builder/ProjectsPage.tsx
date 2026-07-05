import { motion } from 'framer-motion';

export default function BuilderProjectsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Builder Projects</h1>
        <p className="text-muted-foreground">Manage your active projects</p>
      </div>
      <div className="rounded-xl border border-border bg-card p-12 text-center">
        <div className="text-6xl mb-4">🚧</div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Coming Soon</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          This page is under construction. The full builder projects interface will be available in the next phase.
        </p>
      </div>
    </motion.div>
  );
}
