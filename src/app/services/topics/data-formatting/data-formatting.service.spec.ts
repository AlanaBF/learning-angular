import { TestBed } from '@angular/core/testing';

import { DataFormattingService } from './data-formatting.service';

describe('DataFormattingService', () => {
  let service: DataFormattingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFormattingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
