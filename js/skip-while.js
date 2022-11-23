"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log('***skip values while lower than 5');
(0, rxjs_1.from)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .pipe((0, rxjs_1.skipWhile)((value) => value < 5))
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn: skipped first 4 values, emitted left ones, then complete')
});
console.log('');
console.log(`***emits no values if predicate not met`);
(0, rxjs_1.from)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .pipe((0, rxjs_1.skipWhile)((value) => value <= 10))
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn: completes by not emitting any value')
});
