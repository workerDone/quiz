import { javaScriptQuizData } from './java-script-quiz';
import { angularQuizData } from './angular-quiz';
import { typeScriptQuizData } from './type-script-quiz';
import { DataQuizItemModel } from './data-quiz-item.model';

export const dataQuizList: DataQuizItemModel[] = [
  {
    name: 'JavaScript',
    value: javaScriptQuizData,
    id: 0
  },
  {
    name: 'Angular',
    value: angularQuizData,
    id: 1
  },
  {
    name: 'TypeScript',
    value: typeScriptQuizData,
    id: 2
  }
];