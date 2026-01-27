import { TestBed } from '@angular/core/testing';

import { QuizViewApi } from './quiz-view-api';

describe('QuizViewApi', () => {
  let service: QuizViewApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizViewApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
