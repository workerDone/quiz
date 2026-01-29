import { TestBed } from '@angular/core/testing';

import { QuizViewApiService } from './quiz-view-api.service';

describe('QuizViewApi', () => {
  let service: QuizViewApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizViewApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
