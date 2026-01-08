import { inject, Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';
import { SecurityStore } from './security-store';
import { LocalStorage } from '../local-storage';
import { LocalStorageConstants } from '../local-storage-constants';
import { Realm } from './realm';

@Injectable({
  providedIn: 'root',
})
export class SecurityApi {

  private securityStore = inject(SecurityStore);
  private localStorage = inject(LocalStorage);

  checkAuthorization(): Observable<void> {
    return of(this.localStorage.getItem(LocalStorageConstants.userName))
      .pipe(
        delay(1000),
        tap(userName => {
          if (!!userName) {
            this.authorize();
          } else {
            this.securityStore.setAuthorized(false);
            this.securityStore.setRealm(Realm.Login);
          }
        }),
        map(() => void 0)
      );
  }

  logout(): void {
    this.localStorage.removeItem(LocalStorageConstants.userName);
    this.securityStore.logout();
  }

  login(username: string): Observable<void> {
    return of(void 0)
      .pipe(
        delay(1000),
        tap(() => {
          this.localStorage.setItem(LocalStorageConstants.userName, username);
          this.authorize();
        }));
  }

  getUsername(): string {
    return this.localStorage.getItem(LocalStorageConstants.userName)!;
  }

  private authorize() {
    this.securityStore.setAuthorized(true);
    this.securityStore.setRealm(Realm.Main);
  }
}
