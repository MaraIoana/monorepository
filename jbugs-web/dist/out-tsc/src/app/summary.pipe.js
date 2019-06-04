import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
let SummaryPipe = class SummaryPipe {
    transform(value, ...args) {
        if (!value)
            return null;
        return value.substr(0, 50) + '....';
    }
};
SummaryPipe = tslib_1.__decorate([
    Pipe({
        name: 'summary'
    })
], SummaryPipe);
export { SummaryPipe };
//# sourceMappingURL=summary.pipe.js.map