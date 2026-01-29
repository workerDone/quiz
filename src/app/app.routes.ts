import { Routes } from '@angular/router';
import { authorizationGuard } from './common/security/authorization-guard';
import { Main } from './main/main';
import { Quiz } from './quiz/quiz';
import { Login } from './login/login';
import { quizViewResolver } from './quiz/quiz-view/quiz-view.resolver';
import { quizListResolver } from './quiz/quiz-list/quiz-list.resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'quiz',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    canActivate: [authorizationGuard],
    component: Main,
    children: [
      {
        path: 'quiz',
        component: Quiz,
        children: [
          {
            path: '',
            resolve: {
              quizList: quizListResolver
            },
            loadComponent: () => import('./quiz/quiz-list/quiz-list').then(component => component.QuizList),
          },
          {
            path: ':id',
            resolve: {
              quiz: quizViewResolver
            },
            loadComponent: () => import('./quiz/quiz-view/quiz-view').then(component => component.QuizView),
          }
        ]
      }
    ]
  }
];
