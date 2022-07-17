import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseNumbersComponent } from './choose-numbers.component';

describe('ChooseNumbersComponent', () => {
  let component: ChooseNumbersComponent;
  let fixture: ComponentFixture<ChooseNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
