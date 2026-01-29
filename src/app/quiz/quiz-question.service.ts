import { Injectable } from '@angular/core';
import { QuizQuestion } from './quiz-view/quiz-question';
import { UserAnswer } from './quiz-view/user-answer';
import { QuizAnswerResult } from './quiz-view/quiz-answer-result';
import { QuizViewResult } from './quiz-view/quiz-view-result';

@Injectable({
  providedIn: 'root',
})
export class QuizQuestionService {

  calculateScore(questions: QuizQuestion[], answers: UserAnswer[]): QuizViewResult {
    let correctAnswers = 0;
    const answerResults: QuizAnswerResult[] = [];
    questions.forEach(question => {
      const userAnswer = answers.find(a => a.questionId === question.id);
      const selectedIndexes = userAnswer?.selectedIndexes || [];
      const isCorrect = this.isAnswerCorrect(question.correctAnswerIndexes, selectedIndexes);
      if (isCorrect) {
        correctAnswers++;
      }
      answerResults.push({
        question,
        selectedIndexes,
        isCorrect,
        explanation: question.explanation
      });
    });
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    return {
      correctAnswers,
      score: correctAnswers,
      percentage,
      answers: answerResults
    };
  }

  private isAnswerCorrect(correctAnswerIndexes: number[], selectedIndexes: number[]): boolean {
    const sortedCorrectIndexes = correctAnswerIndexes.sort((a, b) => a - b);
    const sortedSelectedIndexes = selectedIndexes.sort((a, b) => a - b);
    if (sortedCorrectIndexes.length !== sortedSelectedIndexes.length) {
      return false;
    }
    return sortedCorrectIndexes.every((index, i) => index === sortedSelectedIndexes[i]);
  }
}
