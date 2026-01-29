import { QuizAnswerResultModel } from './quiz-answer-result.model';

export interface QuizResultModel {
  correctAnswers: number;
  score: number;
  percentage: number;
  answers: QuizAnswerResultModel[];
}