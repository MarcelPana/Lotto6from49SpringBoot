import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeJoacaComponent } from './de-joaca.component';

describe('DeJoacaComponent', () => {
  let component: DeJoacaComponent;
  let fixture: ComponentFixture<DeJoacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeJoacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeJoacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
