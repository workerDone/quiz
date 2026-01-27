import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { first, Observable } from 'rxjs';
import { QuizViewApi } from './quiz-view-api';
import { DataQuizItemModel } from '../data/data-quiz-item.model';

export const quizViewResolver: ResolveFn<DataQuizItemModel> = (
  route: ActivatedRouteSnapshot,
): Observable<DataQuizItemModel> => {
  const quizViewApi = inject(QuizViewApi);
  const quizId = route.paramMap.get('id')!;
  return quizViewApi.getQuiz(Number(quizId)).pipe(first());
};