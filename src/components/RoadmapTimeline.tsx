import { MonthPlan } from "../types/course";

interface RoadmapTimelineProps {
  plans: MonthPlan[];
  completedMonthCount: number;
}

export const RoadmapTimeline = ({ plans, completedMonthCount }: RoadmapTimelineProps) => (
  <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
    <h2 className="text-xl font-semibold text-white">6-Month Journey</h2>
    <div className="mt-4 grid gap-3 md:grid-cols-2">
      {plans.map((plan) => {
        const unlocked = plan.month <= completedMonthCount + 1;
        return (
          <article
            key={plan.month}
            className={`rounded-xl border p-4 ${
              unlocked
                ? "border-cyan-300/40 bg-cyan-400/10"
                : "border-slate-700 bg-slate-900/50"
            }`}
          >
            <p className="text-xs uppercase tracking-wide text-slate-300">Month {plan.month}</p>
            <h3 className="mt-1 font-semibold text-white">{plan.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{plan.mission}</p>
          </article>
        );
      })}
    </div>
  </section>
);
