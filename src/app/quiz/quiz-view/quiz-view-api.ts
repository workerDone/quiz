import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dataQuizList } from '../data/data-quiz-list';
import { DataQuizItemModel } from '../data/data-quiz-item.model';

@Injectable({
  providedIn: 'root',
})
export class QuizViewApi {

  getQuiz(quizId: number): Observable<DataQuizItemModel> {
    console.log(quizId);
    return of(dataQuizList.find(quiz => quiz.id === quizId)!);
  }
}
