import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { SecurityApi } from './security-api';
import { SecurityStore } from './security-store';
import { filter, first, map, Observable, tap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

export const authorizationGuard: CanActivateFn = (route, state): Observable<boolean | UrlTree> | UrlTree => {
  const securityApi = inject(SecurityApi);
  const securityStore = inject(SecurityStore);
  const router = inject(Router);
  securityApi.checkAuthorization();
  return toObservable(securityStore.authorized).pipe(
    filter(authorized => authorized != null),
    tap(authorized => {
      if (!authorized && state.url !== '/') {
        securityStore.setRedirectRoute(state.url);
      }
    }),
    map(authorized => {
      if (!authorized) {
        return router.createUrlTree(['/login']);
      }
      return authorized;
    }),
    first()
  );
};
