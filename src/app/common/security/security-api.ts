import { inject, Injectable } from '@angular/core';
import { SecurityStore } from './security-store';
import { LocalStorage } from '../local-storage';
import { LocalStorageConstants } from '../local-storage-constants';
import { Router } from '@angular/router';
import { Realm } from './realm';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SecurityApi {

  private securityStore = inject(SecurityStore);
  private localStorage = inject(LocalStorage);
  private router = inject(Router);

  isAuthorized(): boolean | null {
    return this.securityStore.authorized();
  }

  checkAuthorization(): void {
    of(this.localStorage.getItem(LocalStorageConstants.userName)).subscribe(userName => {
      if (!!userName) {
        this.securityStore.setAuthorized(true);
        this.securityStore.setRealm(Realm.Main);
      } else {
        this.securityStore.setAuthorized(false);
        this.securityStore.setRealm(null);
      }
    });
  }

  logout(): void {
    this.localStorage.removeItem(LocalStorageConstants.userName);
    this.securityStore.logout();
  }
}
