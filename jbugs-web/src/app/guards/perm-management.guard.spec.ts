import { TestBed, async, inject } from '@angular/core/testing';

import { PermManagementGuard } from './perm-management.guard';

describe('PermManagementGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermManagementGuard]
    });
  });

  it('should ...', inject([PermManagementGuard], (guard: PermManagementGuard) => {
    expect(guard).toBeTruthy();
  }));
});
