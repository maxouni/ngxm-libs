import { TestBed } from '@angular/core/testing';

import { NgxmTextareaService } from './ngxm-textarea.service';

describe('NgxmTextareaService', () => {
  let service: NgxmTextareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxmTextareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
