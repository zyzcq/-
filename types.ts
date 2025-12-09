export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  JUDGMENT = 'JUDGMENT',
  SHORT_ANSWER = 'SHORT_ANSWER',
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[]; // For Single Choice
  correctAnswer: string; // 'A', 'B', 'C', 'D' or '正确'/'错误' or the full text for short answer
  category: string;
  mnemonic?: string; // For short answer
  explanation?: string; // For short answer
}

export interface UserProgress {
  answered: Record<string, boolean>; // id -> true (if answered)
  correct: Record<string, boolean>; // id -> true (if correct)
  wrongIds: string[]; // List of IDs answered incorrectly
}

export type AppMode = 'HOME' | 'PRACTICE_ALL' | 'PRACTICE_CHOICE' | 'PRACTICE_JUDGMENT' | 'REVIEW_ERRORS' | 'FLASHCARDS';
