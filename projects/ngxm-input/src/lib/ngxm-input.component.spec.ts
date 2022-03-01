import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxmInputComponent } from './ngxm-input.component';

describe('NgxmInputComponent', () => {
  let component: NgxmInputComponent;
  let fixture: ComponentFixture<NgxmInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxmInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxmInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
