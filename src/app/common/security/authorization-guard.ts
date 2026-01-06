import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, filter, first, map, Observable } from 'rxjs';
import { Realm } from './realm';
import { SecurityStore } from './security-store';
import { SecurityApi } from './security-api';

export const authorizationGuard: CanActivateFn = (_, state): Observable<boolean | UrlTree> | UrlTree => {
  const securityApi = inject(SecurityApi);
  const securityStore = inject(SecurityStore);
  const router = inject(Router);
  securityApi.checkAuthorization();
  return combineLatest([
    toObservable(securityStore.authorized),
    toObservable(securityStore.realm)
  ]).pipe(
    filter(([authorized, realm]) => authorized != null && realm !== null),
    map((authorized, realm) => {
      if (securityStore.realm() === Realm.Main && authorized) {
        return true;
      }
      securityStore.setRedirectRoute(state.url);
      return router.createUrlTree(['/login']);
    }),
    first()
  );
};
