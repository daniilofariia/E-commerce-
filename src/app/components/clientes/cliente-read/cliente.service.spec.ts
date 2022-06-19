
import { TestBed } from '@angular/core/testing';

import { clientesservice } from './cliente.service';


describe('clienteservice', () => {
  let service: clientesservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(clientesservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});