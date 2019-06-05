import { TestBed } from '@angular/core/testing';

import { AddHeader } from './add-header.service';

describe('AddHeader', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddHeader = TestBed.get(AddHeader);
    expect(service).toBeTruthy();
  });
});
