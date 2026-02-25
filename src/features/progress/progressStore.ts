export interface UserProgress {
  completedLessonIds: string[];
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string | null;
  startedAt: string;
}

const STORAGE_KEY = "nihongo-journey-progress-v1";

const todayIso = () => new Date().toISOString().slice(0, 10);

const diffDays = (aIso: string, bIso: string) => {
  const a = new Date(`${aIso}T00:00:00`).getTime();
  const b = new Date(`${bIso}T00:00:00`).getTime();
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
};

const getDefaultProgress = (): UserProgress => ({
  completedLessonIds: [],
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: null,
  startedAt: todayIso()
});

export const loadProgress = (): UserProgress => {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return getDefaultProgress();
  }

  try {
    const parsed = JSON.parse(raw) as UserProgress;
    return {
      ...getDefaultProgress(),
      ...parsed,
      completedLessonIds: Array.isArray(parsed.completedLessonIds) ? parsed.completedLessonIds : []
    };
  } catch {
    return getDefaultProgress();
  }
};

export const saveProgress = (progress: UserProgress) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const registerDailyActivity = (progress: UserProgress): UserProgress => {
  const today = todayIso();

  if (progress.lastActiveDate === today) {
    return progress;
  }

  const daysSinceLast = progress.lastActiveDate ? diffDays(progress.lastActiveDate, today) : null;
  let nextStreak = 1;

  if (daysSinceLast === 1) {
    nextStreak = progress.currentStreak + 1;
  }

  if (daysSinceLast === 0) {
    nextStreak = progress.currentStreak;
  }

  return {
    ...progress,
    lastActiveDate: today,
    currentStreak: nextStreak,
    longestStreak: Math.max(progress.longestStreak, nextStreak)
  };
};

export const completeLesson = (progress: UserProgress, lessonId: string): UserProgress => {
  if (progress.completedLessonIds.includes(lessonId)) {
    return progress;
  }

  return {
    ...progress,
    completedLessonIds: [...progress.completedLessonIds, lessonId]
  };
};

export const getCompletionRatio = (completedCount: number, totalCount: number) => {
  if (!totalCount) {
    return 0;
  }

  return Math.round((completedCount / totalCount) * 100);
};
