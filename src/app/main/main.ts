import { Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
import { Wrapper } from '../common/ui/wrapper/wrapper';
import { SecurityApi } from '../common/security/security-api';

@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet,
    Wrapper,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

  securityApi = inject(SecurityApi);
  router = inject(Router);
  username = signal(this.securityApi.getUsername());

  logout() {
    this.securityApi.logout();
    this.router.navigate(['/login']);
  }
}
