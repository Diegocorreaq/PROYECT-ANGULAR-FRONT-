import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoususarioComponent } from './add-tipoususario.component';

describe('AddTipoususarioComponent', () => {
  let component: AddTipoususarioComponent;
  let fixture: ComponentFixture<AddTipoususarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoususarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoususarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
