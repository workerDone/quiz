import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { QuizQuestionModel } from './quiz-question.model';
import { computed } from '@angular/core';

export interface QuizState {
  questions: QuizQuestionModel[];
  currentQuestionIndex: number;
}

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
};

export const QuizViewStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ currentQuestionIndex, questions }) => ({
    progress: computed(() => (currentQuestionIndex() + 1) / questions().length * 100),
    currentQuestion: computed(() => questions()[currentQuestionIndex()]),
    currentQuestionLevel: computed(() => questions()[currentQuestionIndex()].level),
  })),
  withMethods((store) => ({
      setQuestions(questions: QuizQuestionModel[]): void {
        patchState(store, { questions });
      },
      showNextQuestion(): void {
        const currentQuestionIndex = store.currentQuestionIndex() + 1;
        patchState(store, { currentQuestionIndex });
      },
      showPreviousQuestion(): void {
        const currentQuestionIndex = store.currentQuestionIndex() - 1;
        patchState(store, { currentQuestionIndex });
      },
      dispose(): void {
        patchState(store, initialState);
      },
    })
  )
);