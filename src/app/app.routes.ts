import { Routes } from '@angular/router';
import { authorizationGuard } from './common/security/authorization-guard';
import { Main } from './main/main';
import { Quiz } from './quiz/quiz';
import { Login } from './login/login';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [authorizationGuard],
    component: Main,
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
      }
    ]
  }
];
