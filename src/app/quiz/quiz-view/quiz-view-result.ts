import { QuizAnswerResult } from './quiz-answer-result';

export interface QuizViewResult {
  correctAnswers: number;
  score: number;
  percentage: number;
  answers: QuizAnswerResult[];
}