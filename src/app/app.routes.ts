import { Routes } from '@angular/router';
import { authorizationGuard } from './common/security/authorization-guard';
import { Main } from './main/main';
import { Quiz } from './quiz/quiz';
import { Login } from './login/login';

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
            loadComponent: () => import('./quiz/quiz-list/quiz-list').then(component => component.QuizList),
          },
          {
            path: ':id',
            loadComponent: () => import('./quiz/quiz-view/quiz-view').then(component => component.QuizView),
          }
        ]
      }
    ]
  }
];
