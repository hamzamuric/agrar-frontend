import { TestBed } from '@angular/core/testing';

import { ImovinaService } from './imovina.service';

describe('ImovinaService', () => {
  let service: ImovinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImovinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
