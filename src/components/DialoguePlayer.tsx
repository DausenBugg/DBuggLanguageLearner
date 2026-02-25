import { useState } from "react";
import { RoleplayTurn } from "../types/course";

interface DialoguePlayerProps {
  turns: RoleplayTurn[];
}

export const DialoguePlayer = ({ turns }: DialoguePlayerProps) => {
  const [activeTurnIndex, setActiveTurnIndex] = useState(0);
  const active = turns[activeTurnIndex] ?? turns[0];

  if (!active) {
    return null;
  }

  const onChoice = (replyTurnId: string) => {
    const nextIndex = turns.findIndex((turn) => turn.id === replyTurnId);
    if (nextIndex >= 0) {
      setActiveTurnIndex(nextIndex);
    }
  };

  const onRestart = () => {
    setActiveTurnIndex(0);
  };

  const onNext = () => {
    if (activeTurnIndex < turns.length - 1) {
      setActiveTurnIndex(activeTurnIndex + 1);
    }
  };

  return (
    <section className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-400/10 p-5">
      <h3 className="text-lg font-semibold text-fuchsia-100">Guided Roleplay</h3>
      <div className="mt-3 rounded-xl bg-slate-950/50 p-4">
        <p className="text-xs uppercase tracking-wide text-fuchsia-200">{active.speaker === "guide" ? "Guide" : "You"}</p>
        <p className="mt-2 text-xl text-white">{active.japanese}</p>
        <p className="text-sm text-slate-300">{active.romaji}</p>
        <p className="text-sm text-fuchsia-200">{active.english}</p>
      </div>
      {active.choices?.length ? (
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {active.choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => onChoice(choice.replyTurnId)}
              className="rounded-xl border border-fuchsia-300/40 bg-fuchsia-950/40 px-3 py-2 text-sm text-fuchsia-100 transition hover:bg-fuchsia-900/40"
            >
              {choice.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={onNext}
            disabled={activeTurnIndex >= turns.length - 1}
            className="rounded-xl border border-fuchsia-300/40 bg-fuchsia-950/40 px-3 py-2 text-sm text-fuchsia-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next turn
          </button>
          <button
            onClick={onRestart}
            disabled={activeTurnIndex === 0}
            className="rounded-xl border border-fuchsia-200/40 px-3 py-2 text-sm text-fuchsia-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Restart roleplay
          </button>
        </div>
      )}
    </section>
  );
};
