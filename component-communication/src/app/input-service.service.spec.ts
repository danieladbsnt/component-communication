import { TestBed } from '@angular/core/testing';

import { InputServiceService } from './communication.service';

describe('InputServiceService', () => {
  let service: InputServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
