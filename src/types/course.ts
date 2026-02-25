export type SpeakingMode = "drill" | "roleplay" | "scoring";

export interface RoleplayTurn {
  id: string;
  speaker: "guide" | "learner";
  japanese: string;
  romaji: string;
  english: string;
  choices?: { id: string; label: string; replyTurnId: string }[];
}

export interface LessonUnit {
  id: string;
  month: number;
  week: number;
  title: string;
  focus: "speaking" | "writing" | "culture";
  objective: string;
  phrases: { japanese: string; romaji: string; english: string }[];
  customs: string[];
  speakingModes: SpeakingMode[];
  imageUrl?: string;
  roleplay?: RoleplayTurn[];
}

export interface MonthPlan {
  month: number;
  title: string;
  mission: string;
  milestones: string[];
}
