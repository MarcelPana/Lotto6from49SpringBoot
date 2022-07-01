import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TralalalComponent } from './tralalal.component';

describe('TralalalComponent', () => {
  let component: TralalalComponent;
  let fixture: ComponentFixture<TralalalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TralalalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TralalalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
