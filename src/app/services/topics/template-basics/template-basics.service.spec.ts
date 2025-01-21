import { TestBed } from '@angular/core/testing';

import { TemplateBasicsService } from './template-basics.service';

describe('TemplateBasicsService', () => {
  let service: TemplateBasicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateBasicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
