import { LessonCard } from "../components/LessonCard";
import { RoadmapTimeline } from "../components/RoadmapTimeline";
import { ProgressRing } from "../components/ProgressRing";
import { StreakBadge } from "../components/StreakBadge";
import { lessons } from "../content/courseData";
import { monthPlans } from "../content/monthPlans";
import { UserProgress } from "../features/progress/progressStore";

interface HomeProps {
  progress: UserProgress;
  completionPercent: number;
}

export const Home = ({ progress, completionPercent }: HomeProps) => {
  const completedMonths = Math.floor(completionPercent / (100 / monthPlans.length));

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2">
        <ProgressRing percent={completionPercent} label="Program progress" />
        <StreakBadge current={progress.currentStreak} longest={progress.longestStreak} />
      </section>

      <RoadmapTimeline plans={monthPlans} completedMonthCount={completedMonths} />

      <section>
        <h2 className="text-xl font-semibold text-white">Current Lessons</h2>
        <p className="mt-1 text-sm text-slate-300">Speaking-first lessons with customs and writing essentials.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              isDone={progress.completedLessonIds.includes(lesson.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
