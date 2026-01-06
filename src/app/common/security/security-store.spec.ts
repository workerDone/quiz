import { TestBed } from '@angular/core/testing';
import { SecurityStore } from './security-store';
import { Realm } from './realm';

describe('SecurityStore', () => {
  let service: SecurityStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityStore],
    });
    service = TestBed.inject(SecurityStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be initialState', () => {
    expect(service.realm()).toBeNull();
    expect(service.authorized()).toBeNull();
    expect(service.redirectRoute()).toBeNull();
  });

  it('should authorize user', () => {
    const expectedResult = true;
    service.setAuthorized(expectedResult);
    expect(service.authorized()).toBe(expectedResult);
  });

  it('should unauthorize user', () => {
    const expectedResult = false;
    service.setAuthorized(expectedResult);
    expect(service.authorized()).toBe(expectedResult);
  });

  it('should reset user authorization', () => {
    const expectedResult = null;
    service.setAuthorized(expectedResult);
    expect(service.authorized()).toBe(expectedResult);
  });

  it('should redirect route be null', () => {
    const expectedResult = null;
    service.setRedirectRoute(expectedResult);
    expect(service.redirectRoute()).toBeNull();
  });

  it('should set redirect route', () => {
    const expectedResult = 'quiz';
    service.setRedirectRoute(expectedResult);
    expect(service.redirectRoute()).toBe(expectedResult);
  });

  it('should reset realm to null', () => {
    const expectedResult = null;
    service.setRealm(expectedResult);
    expect(service.realm()).toBe(expectedResult);
  });

  it('should set main realm', () => {
    const expectedResult = Realm.Main;
    service.setRealm(expectedResult);
    expect(service.realm()).toBe(expectedResult);
  });

  it('should set login realm', () => {
    const expectedResult = Realm.Login;
    service.setRealm(expectedResult);
    expect(service.realm()).toBe(expectedResult);
  });
});
