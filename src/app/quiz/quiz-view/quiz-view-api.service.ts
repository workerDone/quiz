import { inject, Injectable } from '@angular/core';
import { combineLatest, first, map, Observable, of } from 'rxjs';
import { quizListData } from '../data/quiz-list.data';
import { LocalStorageConstants } from '../../common/local-storage-constants';
import { LocalStorage } from '../../common/local-storage';
import { QuizResultModel } from '../quiz-result/quiz-result.model';
import { QuizListItemModel } from '../quiz-list/quiz-list-item.model';

@Injectable({
  providedIn: 'root',
})
export class QuizViewApiService {
  private localStorage = inject(LocalStorage);

  getQuiz(quizId: string): Observable<QuizListItemModel> {
    return combineLatest([of(quizListData.find(quiz => quiz.id === quizId)!), this.getQuizResult(quizId)])
      .pipe(first(), map(([quiz, result]) => ({ ...quiz, result })));
  }

  getQuizResult(quizId: string): Observable<QuizResultModel | null> {
    const quizResult: string | null = this.localStorage.getItem(this.getQuizKey(quizId));
    if (quizResult) {
      return of(JSON.parse(quizResult));
    }
    return of(null);
  }

  saveQuizResult(quizId: string, result: QuizResultModel): Observable<void> {
    this.localStorage.setItem(this.getQuizKey(quizId), JSON.stringify(result));
    return of(undefined);
  }

  deleteQuizResult(quizId: string): Observable<void> {
    this.localStorage.removeItem(this.getQuizKey(quizId));
    return of(undefined);
  }

  private getQuizKey(quizId: string): string {
    const username: string = this.localStorage.getItem(LocalStorageConstants.userName)!
    return `${username}-quiz-${quizId}-result`;
  }
}
