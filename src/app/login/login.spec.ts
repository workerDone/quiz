import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expect } from 'vitest';
import { of } from 'rxjs';
import { signal } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Login } from './login';
import { SecurityStore } from '../common/security/security-store';
import { Realm } from '../common/security/realm';
import { SecurityApi } from '../common/security/security-api';
import { Wrapper } from '../common/ui/wrapper/wrapper';
import { MockWrapper } from '../main/main.spec';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let routerMock: Partial<Router>;
  let securityStoreMock: Partial<SecurityStore>;
  let securityApiMock: Partial<SecurityApi>;

  beforeEach(async () => {
    TestBed.overrideComponent(Login, {
      remove: { imports: [Wrapper] },
      add: { imports: [MockWrapper] },
    })
    securityStoreMock = {
      realm: signal(Realm.Main),
      redirectRoute: signal('/quiz'),
    };

    securityApiMock = {
      login: vi.fn((username: string) => of(void 0),)
    };
    routerMock = {
      navigate: vi.fn((commands: readonly any[], extras?: NavigationExtras): Promise<boolean> => {
        return Promise.resolve(true);
      })
    }

    await TestBed.configureTestingModule({
      providers: [
        { provide: SecurityStore, useValue: securityStoreMock },
        { provide: SecurityApi, useValue: securityApiMock },
        { provide: Router, useValue: routerMock },
      ],
      imports: [Login]
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login title be visible', () => {
    const title = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(title.textContent).toContain('Login');
  });

  it('should have an invalid form when fields are empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('shouldn\'t show username required error message', () => {
    component.loginForm.controls.userName.setValue('username');
    component.loginForm.markAllAsTouched();
    fixture.detectChanges();
    const usernameError = fixture.debugElement.query(By.css('.error'))?.nativeElement;
    expect(usernameError).toBeUndefined();
  });

  it('should show username required error message', () => {
    component.loginForm.controls.userName.setValue(null);
    component.loginForm.markAllAsTouched();
    fixture.detectChanges();
    const usernameError = fixture.debugElement.query(By.css('.error')).nativeElement;
    expect(usernameError.textContent).toContain('User name is required');
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should validate username input', () => {
    component.loginForm.controls.userName.setValue('username');
    component.loginForm.markAllAsTouched();
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should submit button be visible', () => {
    const button: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Login');
  });

  it('should progress-spinner be in submit button', () => {
    const button: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    component.isLoading.set(true);
    fixture.detectChanges();
    expect(button).toBeTruthy();
    expect(button.querySelector('mat-progress-spinner')).toBeTruthy();
  });

  it('shouldn\'t submit if login form is invalid', () => {
    component.submit();
    expect(component.isLoading()).toBeFalsy();
  });

  it('should login and navigate to quiz page', () => {
    component.loginForm.controls.userName.setValue('username');
    fixture.detectChanges();
    const button: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button).toBeTruthy();
    expect(component.isLoading()).toBeFalsy();
    button.click();
    expect(securityApiMock.login).toHaveBeenCalledWith(component.loginForm.controls.userName.value!);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/quiz']);
  });
});
