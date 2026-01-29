import { QuizQuestionModel } from '../quiz-view/quiz-question.model';

export interface QuizItemModel {
  name: string;
  id: string;
  value: QuizQuestionModel[];
}