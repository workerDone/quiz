import { TestBed } from '@angular/core/testing';
import { PathResolver } from './path-resolver';
import { Realm } from './security/realm';

describe('PathResolver', () => {
  let service: PathResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get login page path', () => {
    expect(service.getRealmLandingPath(Realm.Login)).toEqual('login');
  });

  it('should get quiz page path', () => {
    expect(service.getRealmLandingPath(Realm.Main)).toEqual('quiz');
  });
});
