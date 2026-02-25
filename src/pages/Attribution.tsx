import { mediaManifest } from "../content/mediaManifest";

export const AttributionPage = () => (
  <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
    <h1 className="text-2xl font-semibold text-white">Image Attribution</h1>
    <p className="text-sm text-slate-300">Lesson images are sourced from license-safe libraries and listed below.</p>
    <ul className="space-y-2 text-sm text-slate-200">
      {mediaManifest.map((item) => (
        <li key={item.lessonId} className="rounded-xl border border-slate-700 bg-slate-950/50 p-3">
          <p className="font-medium">{item.lessonId}</p>
          <p>{item.source} · {item.author} · {item.license}</p>
          <a href={item.url} target="_blank" rel="noreferrer" className="text-cyan-300 underline">
            Source link
          </a>
        </li>
      ))}
    </ul>
  </div>
);
