import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxmTextareaComponent } from './ngxm-textarea.component';

describe('NgxmTextareaComponent', () => {
  let component: NgxmTextareaComponent;
  let fixture: ComponentFixture<NgxmTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxmTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxmTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
