import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInputComponent } from './page-input.component';

describe('PageInputComponent', () => {
  let component: PageInputComponent;
  let fixture: ComponentFixture<PageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
