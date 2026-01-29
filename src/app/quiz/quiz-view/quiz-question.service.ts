import { Injectable } from '@angular/core';
import { QuizQuestionModel } from './quiz-question.model';
import { UserAnswer } from './user-answer';
import { QuizAnswerResultModel } from '../quiz-result/quiz-answer-result.model';
import { QuizResultModel } from '../quiz-result/quiz-result.model';

@Injectable({
  providedIn: 'root',
})
export class QuizQuestionService {

  calculateScore(questions: QuizQuestionModel[], answers: UserAnswer[]): QuizResultModel {
    let correctAnswers = 0;
    const answerResults: QuizAnswerResultModel[] = [];
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
