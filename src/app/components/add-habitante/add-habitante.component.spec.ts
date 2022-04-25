import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHabitanteComponent } from './add-habitante.component';

describe('AddHabitanteComponent', () => {
  let component: AddHabitanteComponent;
  let fixture: ComponentFixture<AddHabitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHabitanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHabitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
