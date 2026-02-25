interface ProgressRingProps {
  percent: number;
  label: string;
}

export const ProgressRing = ({ percent, label }: ProgressRingProps) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference - (percent / 100) * circumference;

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <svg className="h-24 w-24" viewBox="0 0 100 100" role="img" aria-label={label}>
        <circle cx="50" cy="50" r={radius} stroke="#1e293b" strokeWidth="8" fill="none" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#22d3ee"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dash}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="text-2xl font-semibold text-white">{percent}%</p>
      </div>
    </div>
  );
};
