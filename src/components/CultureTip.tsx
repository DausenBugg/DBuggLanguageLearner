interface CultureTipProps {
  tips: string[];
}

export const CultureTip = ({ tips }: CultureTipProps) => (
  <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
    <h3 className="text-lg font-semibold text-amber-100">Tourist Culture Tips</h3>
    <ul className="mt-3 space-y-2 text-sm text-amber-50/90">
      {tips.map((tip) => (
        <li key={tip}>• {tip}</li>
      ))}
    </ul>
  </section>
);
