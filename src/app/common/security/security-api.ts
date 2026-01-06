import { inject, Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
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

  isAuthorized(): boolean | null {
    return this.securityStore.authorized();
  }

  checkAuthorization(): void {
    of(this.localStorage.getItem(LocalStorageConstants.userName)).pipe(delay(3000)).subscribe(userName => {
      if (!!userName) {
        this.authorize();
      } else {
        this.securityStore.setAuthorized(false);
        this.securityStore.setRealm(Realm.Login);
      }
    });
  }

  logout(): void {
    this.localStorage.removeItem(LocalStorageConstants.userName);
    this.securityStore.logout();
  }

  login(userName: string): Observable<void> {
    return of(void 0)
      .pipe(
        delay(1000),
        tap(() => {
          this.localStorage.setItem(LocalStorageConstants.userName, userName);
          this.authorize();
        }));
  }

  private authorize() {
    this.securityStore.setAuthorized(true);
    this.securityStore.setRealm(Realm.Main);
  }
}
