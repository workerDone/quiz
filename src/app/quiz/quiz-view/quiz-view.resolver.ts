import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { first, Observable } from 'rxjs';
import { QuizViewApiService } from './quiz-view-api.service';
import { QuizItemModel } from '../data/quiz-item.model';

export const quizViewResolver: ResolveFn<QuizItemModel> = (
  route: ActivatedRouteSnapshot,
): Observable<QuizItemModel> => {
  const quizViewApiService = inject(QuizViewApiService);
  const quizId = route.paramMap.get('id')!;
  return quizViewApiService.getQuiz(quizId).pipe(first());
};