interface StreakBadgeProps {
  current: number;
  longest: number;
}

export const StreakBadge = ({ current, longest }: StreakBadgeProps) => (
  <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4">
    <p className="text-xs uppercase tracking-wide text-cyan-200">Daily streak</p>
    <p className="mt-1 text-2xl font-bold text-cyan-100">🔥 {current} days</p>
    <p className="mt-1 text-sm text-cyan-200/80">Best: {longest} days</p>
  </div>
);
