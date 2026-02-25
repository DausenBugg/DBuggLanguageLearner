import { ProgressRing } from "../components/ProgressRing";
import { StreakBadge } from "../components/StreakBadge";
import { lessons } from "../content/courseData";
import { monthPlans } from "../content/monthPlans";
import { UserProgress } from "../features/progress/progressStore";

interface ProgressPageProps {
  progress: UserProgress;
  completionPercent: number;
}

export const ProgressPage = ({ progress, completionPercent }: ProgressPageProps) => {
  const byMonth = monthPlans.map((plan) => {
    const monthLessons = lessons.filter((lesson) => lesson.month === plan.month);
    const done = monthLessons.filter((lesson) => progress.completedLessonIds.includes(lesson.id)).length;
    const percent = monthLessons.length ? Math.round((done / monthLessons.length) * 100) : 0;

    return { month: plan.month, title: plan.title, percent, done, total: monthLessons.length };
  });

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2">
        <ProgressRing percent={completionPercent} label="Total completion" />
        <StreakBadge current={progress.currentStreak} longest={progress.longestStreak} />
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <h2 className="text-xl font-semibold text-white">Monthly completion</h2>
        <div className="mt-4 space-y-3">
          {byMonth.map((row) => (
            <div key={row.month} className="rounded-xl border border-slate-700 bg-slate-950/50 p-3">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
                <span>Month {row.month}: {row.title}</span>
                <span>{row.done}/{row.total}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div className="h-2 rounded-full bg-cyan-400" style={{ width: `${row.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
