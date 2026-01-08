import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect, vi } from 'vitest';
import { By } from '@angular/platform-browser';
import { provideRouter, Router } from '@angular/router';
import { Header } from './header';
import { Component, DebugElement } from '@angular/core';

@Component({
  selector: 'app-default',
  template: ``
})
export class Mock {
}

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logo exist', () => {
    const image = fixture.debugElement.query(By.css('.image')).nativeElement;
    expect(image).toBeTruthy();
  });

  it('should logo text exist', () => {
    const text: HTMLElement = fixture.debugElement.query(By.css('.text')).nativeElement;
    expect(text).toBeTruthy();
    expect(text.textContent).toContain('Quiz time');
  });

  it('should default text exist', () => {
    const text: HTMLElement = fixture.debugElement.query(By.css('.default-text')).nativeElement;
    expect(text).toBeTruthy();
    expect(text.textContent).toContain('Just do it');
  });

  it('should have a link to root', () => {
    const logoLink: DebugElement = fixture.debugElement.query(By.css('.logo'));
    expect(logoLink).toBeTruthy();
    expect(logoLink.attributes['routerLink']).toEqual("/");
  });

  it('should navigate to root on click', async () => {
    const navigateSpy = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
    const linkElement = fixture.debugElement.query(By.css('.logo'));
    expect(linkElement).toBeTruthy();
    linkElement.nativeElement.click();
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledTimes(1);
  });
});
