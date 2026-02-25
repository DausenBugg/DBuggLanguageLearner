import { useMemo, useState } from "react";
import {
  UserProgress,
  completeLesson,
  getCompletionRatio,
  loadProgress,
  registerDailyActivity,
  saveProgress
} from "./progressStore";

export const useProgress = (totalLessons: number) => {
  const [progress, setProgress] = useState<UserProgress>(() => registerDailyActivity(loadProgress()));

  const persist = (next: UserProgress) => {
    setProgress(next);
    saveProgress(next);
  };

  const touchDailyActivity = () => {
    const updated = registerDailyActivity(progress);
    persist(updated);
  };

  const markLessonComplete = (lessonId: string) => {
    const updated = registerDailyActivity(completeLesson(progress, lessonId));
    persist(updated);
  };

  const completionPercent = useMemo(
    () => getCompletionRatio(progress.completedLessonIds.length, totalLessons),
    [progress.completedLessonIds.length, totalLessons]
  );

  return {
    progress,
    completionPercent,
    touchDailyActivity,
    markLessonComplete
  };
};
