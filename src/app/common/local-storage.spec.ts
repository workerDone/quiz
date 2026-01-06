import { TestBed } from '@angular/core/testing';

import { LocalStorage } from './local-storage';
import { LocalStorageConstants } from './local-storage-constants';

describe('LocalStorage', () => {
  let service: LocalStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return username if exist', () => {
    const username = 'username';
    service.setItem(LocalStorageConstants.userName, username);
    const savedUsername = service.getItem(LocalStorageConstants.userName);
    expect(savedUsername).toEqual(username);
    service.clear();
  });

  it('should return empty username if not exist', () => {
    const userName = service.getItem(LocalStorageConstants.userName);
    expect(userName).toBeNull();
    service.clear();
  });

  it('should return empty username if clear local storage', () => {
    const username = 'username';
    service.setItem(LocalStorageConstants.userName, username);
    const savedUsername = service.getItem(LocalStorageConstants.userName);
    expect(savedUsername).toEqual(username);
    service.clear();
    expect(service.getItem(LocalStorageConstants.userName)).toBeNull();
    service.clear();
  });

  it('should return empty username if remove username from local storage', () => {
    const username = 'username';
    service.setItem(LocalStorageConstants.userName, username);
    const savedUsername = service.getItem(LocalStorageConstants.userName);
    expect(savedUsername).toEqual(username);
    service.removeItem(LocalStorageConstants.userName);
    expect(service.getItem(LocalStorageConstants.userName)).toBeNull();
    service.clear();
  });
});
