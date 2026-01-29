import { QuizQuestionModel } from '../quiz-view/quiz-question.model';

export interface QuizAnswerResultModel {
  question: QuizQuestionModel;
  selectedIndexes: number[];
  isCorrect: boolean;
  explanation: string
}