import { TestBed, inject } from '@angular/core/testing';
import { UserManagementGuard } from './user-management.guard';
describe('UserManagementGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserManagementGuard]
        });
    });
    it('should ...', inject([UserManagementGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=user-management.guard.spec.js.map