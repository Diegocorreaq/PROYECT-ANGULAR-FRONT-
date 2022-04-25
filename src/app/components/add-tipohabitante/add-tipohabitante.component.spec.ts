import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipohabitanteComponent } from './add-tipohabitante.component';

describe('AddTipohabitanteComponent', () => {
  let component: AddTipohabitanteComponent;
  let fixture: ComponentFixture<AddTipohabitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipohabitanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipohabitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
