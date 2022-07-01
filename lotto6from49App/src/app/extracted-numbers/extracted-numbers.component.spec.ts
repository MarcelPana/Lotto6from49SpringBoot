import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractedNumbersComponent } from './extracted-numbers.component';

describe('ExtractedNumbersComponent', () => {
  let component: ExtractedNumbersComponent;
  let fixture: ComponentFixture<ExtractedNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractedNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractedNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
