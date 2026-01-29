import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { first, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizListItemModel } from './quiz-list-item.model';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';

@Component({
  selector: 'app-quiz-list',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef
  ],
  templateUrl: './quiz-list.html',
  styleUrl: './quiz-list.scss',
})
export class QuizList implements OnInit {
  quizList: WritableSignal<QuizListItemModel[]> = signal([]);
  readonly displayedColumns = ['id', 'name', 'result'];
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit() {
    (this.route.data as Observable<{ quizList: QuizListItemModel[] }>)
      .pipe(first()).subscribe(data => {
      this.quizList.set(data.quizList);
    });
  }

  startQuiz(quiz: QuizListItemModel) {
    this.router.navigate(['/quiz', quiz.id]);
  }
}
