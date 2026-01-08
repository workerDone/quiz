import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'vitest';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterLink } from '@angular/router';
import { Header } from './header';
import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  template: ``
})
export class Mock {
}

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header, RouterLink],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
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
});
