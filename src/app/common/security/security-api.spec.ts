import { TestBed } from '@angular/core/testing';

import { SecurityApi } from './security-api';
import { SecurityStore } from './security-store';
import { signal } from '@angular/core';
import { Realm } from './realm';
import { LocalStorage } from '../local-storage';
import { firstValueFrom } from 'rxjs';
import { provideRouter } from '@angular/router';
import { Main } from '../../main/main';
import { authorizationGuard } from './authorization-guard';
import { Login } from '../../login/login';
import { RouterTestingHarness } from '@angular/router/testing';
import { LocalStorageConstants } from '../local-storage-constants';

describe('SecurityApi', () => {
  let service: SecurityApi;
  let securityStoreMock: Partial<SecurityStore>;
  let localStorageMock: Partial<LocalStorage>;

  function setup(username: string | null) {
    securityStoreMock = {
      logout: vi.fn(),
      setRealm: vi.fn(),
      setAuthorized: vi.fn()
    }
    localStorageMock = {
      setItem: vi.fn(),
      getItem: vi.fn(() => username),
      removeItem: vi.fn(),
    }
    TestBed.configureTestingModule({
      providers:[
        { provide: SecurityStore, useValue: securityStoreMock },
        { provide: LocalStorage, useValue: localStorageMock },
      ]
    });
    service = TestBed.inject(SecurityApi);
  }

  it('should be created', () => {
    setup(null);
    expect(service).toBeTruthy();
  });

  it('should authorize user if exist', async () => {
    setup('username');
    await firstValueFrom(service.checkAuthorization());
    expect(securityStoreMock.setAuthorized).toHaveBeenCalledWith(true);
    expect(securityStoreMock.setRealm).toHaveBeenCalledWith(Realm.Main);
  });

  it('should log out user if not authorized', async () => {
    setup(null);
    await firstValueFrom(service.checkAuthorization());
    expect(securityStoreMock.setAuthorized).toHaveBeenCalledWith(false);
    expect(securityStoreMock.setRealm).toHaveBeenCalledWith(Realm.Login);
  });

  it('should log out user if exist', async () => {
    setup('username');
    await firstValueFrom(service.checkAuthorization());
    service.logout();
    expect(localStorageMock.removeItem).toHaveBeenCalledWith(LocalStorageConstants.userName);
    expect(securityStoreMock.logout).toBeCalled()
  });

  it('should authorize user after login', async () => {
    setup(null);
    const username = 'username';
    await firstValueFrom(service.login(username));
    expect(localStorageMock.setItem).toHaveBeenCalledWith(LocalStorageConstants.userName, username);
    expect(securityStoreMock.setAuthorized).toHaveBeenCalledWith(true);
    expect(securityStoreMock.setRealm).toHaveBeenCalledWith(Realm.Main);
  });
});
