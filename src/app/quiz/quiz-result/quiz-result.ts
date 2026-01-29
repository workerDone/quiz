import { Component, input, output } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { NgClass } from '@angular/common';
import { QuizResultModel } from './quiz-result.model';

@Component({
  selector: 'app-quiz-result',
  imports: [
    MatAccordion,
    MatButton,
    MatCard,
    MatCardContent,
    MatDivider,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatIcon,
    MatProgressBar,
    NgClass
  ],
  templateUrl: './quiz-result.html',
  styleUrl: './quiz-result.scss',
})
export class QuizResult {
  quizResult = input.required<QuizResultModel>();
  restartQuiz = output<void>();
}
