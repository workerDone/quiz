import { Component, computed, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatCheckbox } from '@angular/material/checkbox';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { first, Observable, switchMap } from 'rxjs';
import { QuizViewStore } from './quiz-view-store';
import { QuizResultModel } from '../quiz-result/quiz-result.model';
import { QuizQuestionService } from './quiz-question.service';
import { QuizQuestionLevel } from './quiz-question-level';
import { QuizResult } from '../quiz-result/quiz-result';
import { QuizViewApiService } from './quiz-view-api.service';
import { QuizListItemModel } from '../quiz-list/quiz-list-item.model';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.html',
  styleUrl: './quiz-view.scss',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatProgressBar,
    MatCardContent,
    MatChipSet,
    MatChip,
    MatIcon,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    MatButton,
    QuizResult,
  ]
})
export class QuizView implements OnInit, OnDestroy {
  quizViewStore = inject(QuizViewStore);
  selectedAnswers: Map<number, number[]> = new Map();
  quizResult: WritableSignal<QuizResultModel | null> = signal(null);
  questionLevelTest = computed(() => this.getQuestionLevelText(this.quizViewStore.currentQuestionLevel()));
  private quizQuestionService = inject(QuizQuestionService);
  private quizViewApiService = inject(QuizViewApiService);
  private route = inject(ActivatedRoute);
  readonly juniorQuizQuestionLevel = QuizQuestionLevel.Junior;

  ngOnInit(): void {
    (this.route.data as Observable<{ quiz: QuizListItemModel }>)
      .pipe(first()).subscribe(data => {
      this.quizViewStore.setQuestions(data.quiz.value);
      this.quizResult.set(data.quiz.result);
    });
  }

  ngOnDestroy(): void {
    this.quizViewStore.dispose();
  }

  selectMultipleAnswers(event: { checked: boolean }, optionIndex: number) {
    if (this.selectedAnswers.has(this.quizViewStore.currentQuestion().id)) {
      const options = this.selectedAnswers.get(this.quizViewStore.currentQuestion().id)!;
      const newOptions = event.checked ? [...options, optionIndex] : options.filter(index => index !== optionIndex);
      if (newOptions.length > 0) {
        this.selectedAnswers.set(this.quizViewStore.currentQuestion().id, newOptions);
      } else {
        this.selectedAnswers.delete(this.quizViewStore.currentQuestion().id);
      }
    } else if (event.checked) {
      this.selectedAnswers.set(this.quizViewStore.currentQuestion().id, [optionIndex]);
    }
  }

  selectAnswer(optionIndex: number) {
    this.selectedAnswers.set(this.quizViewStore.currentQuestion().id, [optionIndex]);
  }

  isAnswerSelected(optionIndex: number): boolean {
    const answers = this.selectedAnswers.get(this.quizViewStore.currentQuestion().id) || [];
    return answers.includes(optionIndex);
  }

  submitQuiz(): void {
    const userAnswers = Array.from(this.selectedAnswers.entries())
      .map(([questionId, selectedIndexes]) => ({ questionId, selectedIndexes }));
    this.quizResult.set(this.quizQuestionService.calculateScore(this.quizViewStore.questions(),
      userAnswers));
    this.route.paramMap.pipe(first(),
      switchMap((params: ParamMap) => this.quizViewApiService.saveQuizResult(params.get('id')!, this.quizResult()!)))
      .subscribe();
  }


  restartQuiz(): void {
    this.route.paramMap.pipe(first(),
      switchMap((params: ParamMap) => this.quizViewApiService.deleteQuizResult(params.get('id')!)))
      .subscribe(() => {
        this.selectedAnswers.clear();
        this.quizResult.set(null);
      });
  }

  getQuestionLevelText(level: QuizQuestionLevel): string {
    switch (level) {
      case QuizQuestionLevel.Junior:
        return 'Junior';
      case QuizQuestionLevel.Middle:
        return 'Middle';
      case QuizQuestionLevel.Senior:
        return 'Senior';
      default:
        return 'Unknown';
    }
  }
}
