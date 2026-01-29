import { inject, Injectable } from '@angular/core';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';
import { quizListData } from '../data/quiz-list.data';
import { QuizViewApiService } from '../quiz-view/quiz-view-api.service';
import { QuizListItemModel } from './quiz-list-item.model';

@Injectable({
  providedIn: 'root',
})
export class QuizListApiService {

  private quizViewApiService = inject(QuizViewApiService);

  getQuizList(): Observable<QuizListItemModel[]> {
    return of(quizListData).pipe(
      switchMap(quizListData =>
        combineLatest([...quizListData.map(quiz => this.quizViewApiService.getQuizResult(quiz.id))])
          .pipe(map(quizResults =>
            quizResults.map((result, index) => ({ ...quizListData[index], result })))),)
    );
  }
}
