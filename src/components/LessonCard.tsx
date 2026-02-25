import { Link } from "react-router-dom";
import { LessonUnit } from "../types/course";

interface LessonCardProps {
  lesson: LessonUnit;
  isDone: boolean;
}

export const LessonCard = ({ lesson, isDone }: LessonCardProps) => (
  <Link
    to={`/lesson/${lesson.id}`}
    className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition hover:border-cyan-400/60"
  >
    {lesson.imageUrl ? (
      <img src={lesson.imageUrl} alt={lesson.title} className="h-40 w-full object-cover opacity-80 group-hover:opacity-100" />
    ) : null}
    <div className="space-y-2 p-4">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Month {lesson.month} · Week {lesson.week}</span>
        <span className="rounded-full border border-slate-700 px-2 py-0.5 uppercase">{lesson.focus}</span>
      </div>
      <h3 className="text-lg font-semibold text-slate-100">{lesson.title}</h3>
      <p className="text-sm text-slate-300">{lesson.objective}</p>
      <p className="text-sm text-cyan-300">{isDone ? "Completed" : "Start lesson"}</p>
    </div>
  </Link>
);
