import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { expect } from 'vitest';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  function getLink(href: string): DebugElement {
    const links: DebugElement[] = fixture.debugElement.queryAll(By.css('a'));
    return links.find(link => link.attributes['href'] === href)!;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const logoLink: HTMLElement = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(logoLink).toBeTruthy();
  });

  it('should have a text', () => {
    const logoLink: HTMLElement = fixture.debugElement.query(By.css('.text')).nativeElement;
    expect(logoLink).toBeTruthy();
  });

  it('should have a linkedin link', () => {
    expect(getLink('https://www.linkedin.com/in/mykola-chmut')).toBeTruthy();
  });

  it('should have a telegram link', () => {
    expect(getLink('https:/t.me/mykola_chmut')).toBeTruthy();
  });
});
