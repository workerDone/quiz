import { QuizQuestionLevel } from '../quiz-question-level';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndexes: number[];
  allowMultipleAnswers: boolean;
  explanation: string;
  level: QuizQuestionLevel;
  topic: string;
}