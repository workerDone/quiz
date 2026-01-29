import { Component, computed, inject, OnDestroy, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatCheckbox } from '@angular/material/checkbox';
import { first, Observable } from 'rxjs';
import { DataQuizItemModel } from '../data/data-quiz-item.model';
import { ActivatedRoute } from '@angular/router';
import { QuizViewStore } from './quiz-view-store';
import { MatButton } from '@angular/material/button';
import { QuizViewResult } from './quiz-view-result';
import { QuizQuestionService } from '../quiz-question.service';
import { QuizQuestionLevel } from '../quiz-question-level';
import { NgClass } from '@angular/common';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import { MatDivider } from '@angular/material/list';

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
    NgClass,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatDivider,
  ]
})
export class QuizView implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  quizViewStore = inject(QuizViewStore);
  selectedAnswers: Map<number, number[]> = new Map();
  quizResult: QuizViewResult | null = null;
  questionLevelTest = computed(() => this.getQuestionLevelText(this.quizViewStore.currentQuestionLevel()));
  readonly juniorQuizQuestionLevel = QuizQuestionLevel.Junior;

  constructor(private quizQuestionService: QuizQuestionService) {
  }

  ngOnInit(): void {
    (this.route.data as Observable<{ quiz: DataQuizItemModel }>)
      .pipe(first()).subscribe(data => {
      this.quizViewStore.setQuestions(data.quiz.value);
    });
  }

  ngOnDestroy(): void {
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
    this.quizResult = this.quizQuestionService.calculateScore(this.quizViewStore.questions(),
      userAnswers);
    console.log(this.quizResult);
  }


  restartQuiz(): void {
    this.quizViewStore.resetQuestion();
    this.selectedAnswers.clear();
    this.quizResult = null;
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
