import { TestBed, inject } from '@angular/core/testing';
import { BugManagementGuard } from './bug-management.guard';
describe('BugManagementGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BugManagementGuard]
        });
    });
    it('should ...', inject([BugManagementGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=bug-management.guard.spec.js.map