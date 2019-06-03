import { TestBed, inject } from '@angular/core/testing';
import { PermManagementGuard } from './perm-management.guard';
describe('PermManagementGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PermManagementGuard]
        });
    });
    it('should ...', inject([PermManagementGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=perm-management.guard.spec.js.map