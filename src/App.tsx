import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { lessons } from "./content/courseData";
import { useProgress } from "./features/progress/useProgress";
import { AttributionPage } from "./pages/Attribution";
import { Home } from "./pages/Home";
import { Lesson } from "./pages/Lesson";
import { ProgressPage } from "./pages/Progress";

const navItems = [
  { to: "/", label: "Lessons" },
  { to: "/progress", label: "Progress" },
  { to: "/attribution", label: "Attribution" }
];

function App() {
  const location = useLocation();
  const { progress, completionPercent, markLessonComplete, touchDailyActivity } = useProgress(lessons.length);

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 py-6 md:px-8">
      <header className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
        <p className="text-xs uppercase tracking-wide text-cyan-300">Nihongo Journey</p>
        <h1 className="mt-1 text-2xl font-semibold text-white">6-Month Japanese for Travelers</h1>
        <p className="mt-2 text-sm text-slate-300">Speaking-first lessons with customs, writing essentials, and daily streak motivation.</p>
        <nav className="mt-4 flex flex-wrap gap-2">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={touchDailyActivity}
                className={`rounded-lg border px-3 py-1.5 text-sm ${
                  active
                    ? "border-cyan-300/50 bg-cyan-400/20 text-cyan-100"
                    : "border-slate-700 bg-slate-950/40 text-slate-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home progress={progress} completionPercent={completionPercent} />} />
          <Route
            path="/lesson/:lessonId"
            element={<Lesson onComplete={markLessonComplete} completedLessonIds={progress.completedLessonIds} />}
          />
          <Route path="/progress" element={<ProgressPage progress={progress} completionPercent={completionPercent} />} />
          <Route path="/attribution" element={<AttributionPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
