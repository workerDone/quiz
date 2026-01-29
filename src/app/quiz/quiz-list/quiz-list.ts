import { Component, inject, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { QuizListApiService } from './quiz-list-api.service';

@Component({
  selector: 'app-quiz-list',
  imports: [],
  templateUrl: './quiz-list.html',
  styleUrl: './quiz-list.scss',
})
export class QuizList implements OnInit {
  quizListApiService = inject(QuizListApiService);

  ngOnInit() {
    this.quizListApiService.getQuizList().pipe(first()).subscribe(e => console.log(e));
  }

}
