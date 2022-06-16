import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTextareaComponent } from './page-textarea.component';

describe('PageTextareaComponent', () => {
  let component: PageTextareaComponent;
  let fixture: ComponentFixture<PageTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
