import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Main } from './main';
import { Component } from '@angular/core';
import { expect, vi } from 'vitest';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SecurityApi } from '../common/security/security-api';
import { Wrapper } from '../common/ui/wrapper/wrapper';
import { Realm } from '../common/security/realm';
import { PathResolver } from '../common/path-resolver';

@Component({
  selector: 'app-wrapper',
  template: '<ng-content select="app-name"></ng-content><ng-content></ng-content>',
})
export class MockWrapper {
}

describe('Main', () => {
  let component: Main;
  let fixture: ComponentFixture<Main>;
  let securityApiMock: Partial<SecurityApi>;
  let router: Router;
  let pathResolver: PathResolver;
  const usernameMock = 'username';

  beforeEach(async () => {
    TestBed.overrideComponent(Main, {
      remove: { imports: [Wrapper] },
      add: { imports: [MockWrapper] },
    })

    securityApiMock = {
      getUsername: vi.fn().mockReturnValue(usernameMock),
      logout: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [Main],
      providers: [
        { provide: SecurityApi, useValue: securityApiMock },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Main);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    pathResolver = TestBed.inject(PathResolver);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show username', () => {
    const text: HTMLElement = fixture.debugElement.query(By.css('.username')).nativeElement;
    expect(securityApiMock.getUsername).toBeCalledTimes(1);
    expect(component.username()).toEqual(usernameMock);
    expect(text.textContent).toContain(usernameMock);
  });

  it('should have logout button', () => {
    const button: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button).toBeTruthy();
  });

  it('should logout after press logout button', () => {
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const button: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button).toBeTruthy();
    button.click();
    expect(securityApiMock.logout).toBeCalledTimes(1);
    expect(navigateSpy).toBeCalledTimes(1);
    expect(navigateSpy).toHaveBeenCalledWith([`/${pathResolver.getRealmLandingPath(Realm.Login)}`]);
  });
});
