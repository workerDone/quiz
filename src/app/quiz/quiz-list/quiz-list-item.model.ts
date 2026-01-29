import { QuizItemModel } from '../data/quiz-item.model';
import { QuizResultModel } from '../quiz-result/quiz-result.model';

export interface QuizListItemModel extends QuizItemModel {
  result: QuizResultModel | null;
}