import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { CultureTip } from "../components/CultureTip";
import { DialoguePlayer } from "../components/DialoguePlayer";
import { PhraseDrill } from "../components/PhraseDrill";
import { PronunciationPanel } from "../components/PronunciationPanel";
import { lessons } from "../content/courseData";

interface LessonProps {
  onComplete: (lessonId: string) => void;
  completedLessonIds: string[];
}

export const Lesson = ({ onComplete, completedLessonIds }: LessonProps) => {
  const { lessonId } = useParams();
  const lesson = useMemo(() => lessons.find((item) => item.id === lessonId), [lessonId]);

  if (!lesson) {
    return (
      <div className="rounded-2xl border border-rose-400/40 bg-rose-400/10 p-5">
        <p className="text-rose-100">Lesson not found.</p>
        <Link className="mt-2 inline-block text-sm text-rose-200 underline" to="/">
          Return home
        </Link>
      </div>
    );
  }

  const completed = completedLessonIds.includes(lesson.id);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
        <p className="text-xs uppercase tracking-wide text-cyan-300">Month {lesson.month} · Week {lesson.week}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{lesson.title}</h1>
        <p className="mt-2 text-slate-300">{lesson.objective}</p>
        <button
          onClick={() => onComplete(lesson.id)}
          disabled={completed}
          className="mt-4 rounded-xl border border-cyan-300/40 bg-cyan-400/20 px-4 py-2 text-sm text-cyan-100 disabled:opacity-50"
        >
          {completed ? "Completed" : "Mark complete"}
        </button>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {lesson.phrases.map((phrase) => (
          <PhraseDrill
            key={`${lesson.id}-${phrase.japanese}`}
            japanese={phrase.japanese}
            romaji={phrase.romaji}
            english={phrase.english}
          />
        ))}
      </section>

      {lesson.roleplay?.length ? <DialoguePlayer turns={lesson.roleplay} /> : null}
      {lesson.speakingModes.includes("scoring") ? <PronunciationPanel target={lesson.phrases[0]?.japanese ?? ""} /> : null}

      <CultureTip tips={lesson.customs} />
    </div>
  );
};
