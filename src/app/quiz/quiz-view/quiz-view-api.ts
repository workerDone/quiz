import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuizViewModel } from './quiz-view.model';
import { dataQuizList } from '../data/data-quiz-list';

@Injectable({
  providedIn: 'root',
})
export class QuizViewApi {

  getQuiz(quizId: number): Observable<QuizViewModel[]> {
    return of(dataQuizList.find(quiz => quiz.id === quizId)?.value || []);
  }
}
