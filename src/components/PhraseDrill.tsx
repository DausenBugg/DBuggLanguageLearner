import { useSpeech } from "../features/speaking/useSpeech";

interface PhraseDrillProps {
  japanese: string;
  romaji: string;
  english: string;
}

export const PhraseDrill = ({ japanese, romaji, english }: PhraseDrillProps) => {
  const { speak, canSpeak, error } = useSpeech();

  return (
    <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
      <p className="text-xl text-white">{japanese}</p>
      <p className="text-sm text-cyan-100">{romaji}</p>
      <p className="text-sm text-slate-200">{english}</p>
      <button
        onClick={() => speak(japanese)}
        disabled={!canSpeak}
        className="mt-3 rounded-lg border border-cyan-200/40 px-3 py-1.5 text-sm text-cyan-50 disabled:opacity-50"
      >
        Play audio
      </button>
      {error ? <p className="mt-2 text-xs text-rose-300">{error}</p> : null}
    </div>
  );
};
