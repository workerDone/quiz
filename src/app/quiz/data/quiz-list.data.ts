import { javaScriptQuizData } from './java-script-quiz';
import { angularQuizData } from './angular-quiz';
import { typeScriptQuizData } from './type-script-quiz';
import { QuizItemModel } from './quiz-item.model';

export const quizListData: QuizItemModel[] = [
  {
    name: 'JavaScript',
    value: javaScriptQuizData,
    id: '0',
  },
  {
    name: 'Angular',
    value: angularQuizData,
    id: '1'
  },
  {
    name: 'TypeScript',
    value: typeScriptQuizData,
    id: '2'
  }
];