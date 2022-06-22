import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersNumbersComponent } from './users-numbers.component';

describe('UsersNumbersComponent', () => {
  let component: UsersNumbersComponent;
  let fixture: ComponentFixture<UsersNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
