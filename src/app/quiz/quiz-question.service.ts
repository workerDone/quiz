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
      const isCorrect = this.checkAnswer(question.correctAnswerIndexes, selectedIndexes);
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

  private checkAnswer(correctAnswerIndexes: number[], selectedIndexes: number[]): boolean {
    const correctIndexes = correctAnswerIndexes.sort((a, b) => a - b);
    const userIndexes = selectedIndexes.sort((a, b) => a - b);
    if (correctIndexes.length !== userIndexes.length) {
      return false;
    }
    return correctIndexes.every((index, i) => index === userIndexes[i]);
  }
}
