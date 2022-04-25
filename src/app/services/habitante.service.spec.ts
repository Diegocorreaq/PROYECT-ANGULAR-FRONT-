import { TestBed } from '@angular/core/testing';

import { HabitanteService } from './habitante.service';

describe('HabitanteService', () => {
  let service: HabitanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
