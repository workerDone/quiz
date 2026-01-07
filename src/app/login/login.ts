import { Component, inject, signal, WritableSignal } from '@angular/core';
import { first } from 'rxjs';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardTitle } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgTemplateOutlet } from '@angular/common';
import { SecurityApi } from '../common/security/security-api';
import { Router } from '@angular/router';
import { PathResolver } from '../common/path-resolver';
import { SecurityStore } from '../common/security/security-store';
import { Header } from '../common/ui/header/header';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatCardTitle,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatError,
    MatInput,
    MatButton,
    MatProgressSpinner,
    NgTemplateOutlet,
    Header
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  isLoading: WritableSignal<boolean> = signal(false);
  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
  })
  private securityApi = inject(SecurityApi);
  private router = inject(Router);
  private pathResolver = inject(PathResolver);
  private securityStore = inject(SecurityStore);

  submit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    this.securityApi.login(this.loginForm.controls.userName.value!).pipe(first()).subscribe(() => {
      this.isLoading.set(false);
      if (this.securityStore.redirectRoute() !== null) {
        this.router.navigate([this.securityStore.redirectRoute()]);
      } else {
        this.router.navigate([this.pathResolver.getRealmLandingPath(this.securityStore.realm()!)]);
      }
    })
  }
}
