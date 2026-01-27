import { QuizQuestion } from './quiz-question';

export interface QuizAnswerResult {
  question: QuizQuestion;
  selectedIndexes: number[];
  isCorrect: boolean;
  explanation: string
}