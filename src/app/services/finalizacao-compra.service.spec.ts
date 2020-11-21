import { TestBed } from '@angular/core/testing';

import { FinalizacaoCompraService } from './finalizacao-compra.service';

describe('FinalizacaoCompraService', () => {
  let service: FinalizacaoCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalizacaoCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
