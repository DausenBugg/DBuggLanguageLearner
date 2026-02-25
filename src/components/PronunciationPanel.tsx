import { useMemo, useState } from "react";
import { useSpeech } from "../features/speaking/useSpeech";

interface PronunciationPanelProps {
  target: string;
}

const normalize = (text: string) => text.replace(/\s+/g, "").trim();

export const PronunciationPanel = ({ target }: PronunciationPanelProps) => {
  const { canRecognize, isListening, error, recognize } = useSpeech();
  const [result, setResult] = useState<{ transcript: string; score: number } | null>(null);

  const unavailable = !canRecognize;

  const status = useMemo(() => {
    if (!result) {
      return "Try pronouncing the target phrase.";
    }

    if (result.score >= 85) {
      return "Great! Your pronunciation is very close.";
    }

    if (result.score >= 60) {
      return "Good attempt. Slow down and stress each mora clearly.";
    }

    return "Keep practicing. Listen again and repeat with smaller chunks.";
  }, [result]);

  const onScore = async () => {
    const recognized = await recognize();
    if (!recognized) {
      return;
    }

    const t = normalize(target);
    const r = normalize(recognized.transcript);
    const similarity = t && r ? Math.max(0, 1 - Math.abs(t.length - r.length) / Math.max(t.length, r.length)) : 0;
    const score = Math.round((recognized.confidence * 0.7 + similarity * 0.3) * 100);

    setResult({ transcript: recognized.transcript, score });
  };

  return (
    <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5">
      <h3 className="text-lg font-semibold text-emerald-100">Pronunciation Scoring</h3>
      <p className="mt-2 text-sm text-emerald-50">Target: {target}</p>
      <button
        onClick={onScore}
        disabled={unavailable || isListening}
        className="mt-4 rounded-xl border border-emerald-200/40 px-4 py-2 text-sm text-emerald-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isListening ? "Listening..." : "Score my pronunciation"}
      </button>
      <p className="mt-3 text-sm text-emerald-100">{status}</p>
      {result ? <p className="text-sm text-emerald-200">Heard: {result.transcript} · Score: {result.score}%</p> : null}
      {error ? <p className="mt-2 text-sm text-rose-300">{error}</p> : null}
      {unavailable ? <p className="mt-2 text-sm text-amber-200">Browser speech recognition is unavailable here.</p> : null}
    </section>
  );
};
