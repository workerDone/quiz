import { QuizLevel } from '../quiz-level';

export interface QuizViewModel {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndexes: number[];
  allowMultipleAnswers: boolean;
  explanation: string;
  level: QuizLevel;
  topic: string;
}