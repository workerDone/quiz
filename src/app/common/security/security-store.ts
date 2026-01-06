import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Realm } from './realm';

type SecurityState = { realm: Realm | null; authorized: boolean | null, redirectRoute: string | null };

const initialState: SecurityState = {
  realm: null,
  authorized: null,
  redirectRoute: null,
};

export const SecurityStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    setAuthorized(authorized: boolean| null): void {
      patchState(store, { authorized });
    },
    setRealm(realm: Realm | null): void {
      patchState(store, { realm });
    },
    setRedirectRoute(redirectRoute: string | null): void {
      patchState(store, { redirectRoute });
    },
    logout(): void {
      patchState(store, initialState);
    }
  }))
);

export type SecurityStore = InstanceType<typeof SecurityStore>;