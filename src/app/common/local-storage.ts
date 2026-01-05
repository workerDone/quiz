import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  setItem(key: string, value: any): void {
    if (this.isBrowser) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.error('Error saving to localStorage', e);
      }
    }
  }

  getItem(key: string): any | null {
    if (this.isBrowser) {
      try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? storedValue : null;
      } catch (e) {
        console.error('Error getting data from localStorage', e);
        return null;
      }
    }
    return null;
  }

  removeItem(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }
}
