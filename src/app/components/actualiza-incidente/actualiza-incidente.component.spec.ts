import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaIncidenteComponent } from './actualiza-incidente.component';

describe('ActualizaIncidenteComponent', () => {
  let component: ActualizaIncidenteComponent;
  let fixture: ComponentFixture<ActualizaIncidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaIncidenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizaIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
