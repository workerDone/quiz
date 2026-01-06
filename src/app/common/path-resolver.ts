import { Injectable } from '@angular/core';
import { Realm } from './security/realm';

const realmsPaths: Map<Realm, string> = new Map([
  [Realm.Main, 'quiz'],
  [Realm.Login, 'login'],
]);

@Injectable({
  providedIn: 'root',
})
export class PathResolver {
  getRealmLandingPath(realm: Realm): string | undefined {
    return realmsPaths.get(realm);
  }
}
