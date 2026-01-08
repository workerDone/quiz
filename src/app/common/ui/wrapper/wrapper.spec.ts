import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Wrapper } from './wrapper';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-header',
  template: '',
})
export class MockHeader {
}
@Component({
  selector: 'app-footer',
  template: '',
})
export class MockFooter {
}

describe('Wrapper', () => {
  let component: Wrapper;
  let fixture: ComponentFixture<Wrapper>;

  beforeEach(async () => {
    TestBed.overrideComponent(Wrapper, {
      remove: {imports: [Header, Footer]},
      add: {imports: [MockHeader, MockFooter]},
    })
    await TestBed.configureTestingModule({
      imports: [Wrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
