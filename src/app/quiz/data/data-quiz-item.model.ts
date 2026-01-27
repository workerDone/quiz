import { QuizQuestion } from '../quiz-view/quiz-question';

export interface DataQuizItemModel {
  name: string;
  id: number;
  value: QuizQuestion[];
}