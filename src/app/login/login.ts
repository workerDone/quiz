import { Component, inject, signal, WritableSignal } from '@angular/core';
import { first } from 'rxjs';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardTitle } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgTemplateOutlet } from '@angular/common';
import { SecurityApi } from '../common/security/security-api';

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
    NgTemplateOutlet
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

  submit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    this.securityApi.login(this.loginForm.controls.userName.value!).pipe(first()).subscribe(() => {
      this.isLoading.set(false);
    })
  }
}
