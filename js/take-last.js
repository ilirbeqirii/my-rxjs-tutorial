"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log('*** takeLast operator skips last 2 values');
const stream$ = (0, rxjs_1.of)(1, 2, 3, 4, 5, 6);
stream$.pipe((0, rxjs_1.takeLast)(2))
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn: ...Completed!')
});
console.log('');
console.log('*** takeLast operator takes nothing if source never emits, and completes');
rxjs_1.EMPTY.pipe((0, rxjs_1.takeLast)(2))
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn: ...Completed with no emission!')
});
console.log('');
console.log('*** takeLast operator emits all values if take count is same as number of emissions');
(0, rxjs_1.of)(1, 2, 3).pipe((0, rxjs_1.takeLast)(3))
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn: ...Completed with all emitted values!')
});
console.log('');
console.log('*** takeLast operator emits all values if take count is greater than the number of emissions');
(0, rxjs_1.of)(1, 2, 3).pipe((0, rxjs_1.takeLast)(5))
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn: ...Completed with all emissions only!')
});
// ! never emits if working with indefinite sources.
