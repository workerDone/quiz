import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Main } from './main';
import { Component } from '@angular/core';
import { Wrapper } from '../common/ui/wrapper/wrapper';

@Component({
  selector: 'app-wrapper',
  template: '<ng-content select="app-name"></ng-content><ng-content></ng-content>',
})
export class MockWrapper {
}

describe('Main', () => {
  let component: Main;
  let fixture: ComponentFixture<Main>;

  beforeEach(async () => {
    TestBed.overrideComponent(Main, {
      remove: {imports: [Wrapper]},
      add: {imports: [MockWrapper]},
    })

    await TestBed.configureTestingModule({
      imports: [Main]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
