import { TestBed } from '@angular/core/testing';

import { NgxmInputService } from './ngxm-input.service';

describe('NgxmInputService', () => {
  let service: NgxmInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxmInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
