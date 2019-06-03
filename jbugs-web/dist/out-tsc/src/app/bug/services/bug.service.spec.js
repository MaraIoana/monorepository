import { TestBed } from '@angular/core/testing';
import { BugService } from "./bug.service";
describe('BufService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(BugService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=bug.service.spec.js.map