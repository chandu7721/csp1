import { TestBed } from '@angular/core/testing';

import { CRUDService } from './curd.service';

describe('CurdService', () => {
  let service: CRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

