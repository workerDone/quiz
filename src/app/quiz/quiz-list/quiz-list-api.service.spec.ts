import { TestBed } from '@angular/core/testing';

import { QuizListApiService } from './quiz-list-api.service';

describe('QuizListApiService', () => {
  let service: QuizListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
