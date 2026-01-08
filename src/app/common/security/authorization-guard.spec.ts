import { TestBed } from '@angular/core/testing';
import { CanActivateFn, provideRouter } from '@angular/router';
import { authorizationGuard } from './authorization-guard';
import { RouterTestingHarness } from '@angular/router/testing';
import { Login } from '../../login/login';
import { Main } from '../../main/main';
import { SecurityStore } from './security-store';
import { signal } from '@angular/core';
import { Realm } from './realm';
import { expect } from 'vitest';

describe('authorizationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authorizationGuard(...guardParameters));

  let harness: RouterTestingHarness;
  let securityStoreMock: Partial<SecurityStore>;

  async function setup(authorized: boolean | null) {
    securityStoreMock = {
      realm: signal<Realm | null>(authorized == null ? null : authorized ? Realm.Main : Realm.Login),
      authorized: signal<boolean | null>(authorized),
      setRedirectRoute: vi.fn()
    }
    TestBed.configureTestingModule({
      providers: [
        { provide: SecurityStore, useValue: securityStoreMock },
        provideRouter([
          { path: 'quiz', component: Main, canActivate: [authorizationGuard] },
          { path: 'login', component: Login },
        ]),
      ],
    });
    harness = await RouterTestingHarness.create();
  }

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('allows navigation when user is authorized', async () => {
    await setup(true);
    await harness.navigateByUrl('quiz', Main);
    expect(harness.routeNativeElement).toBeTruthy()
  });

  it('redirects to login when user is not authorized', async () => {
    await setup(false);
    await harness.navigateByUrl('/quiz', Login);
    expect(harness.routeNativeElement?.textContent).toContain('Login');
  });
});