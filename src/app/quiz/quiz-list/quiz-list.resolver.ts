import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { first, Observable } from 'rxjs';
import { QuizListApiService } from './quiz-list-api.service';
import { QuizListItemModel } from './quiz-list-item.model';

export const quizListResolver: ResolveFn<QuizListItemModel[]> = (): Observable<QuizListItemModel[]> => {
  const quizListApiService = inject(QuizListApiService);
  return quizListApiService.getQuizList().pipe(first());
};