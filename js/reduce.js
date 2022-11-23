"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log('*** sum all the values emitted by source observable');
(0, rxjs_1.of)(1, 2, 3, 4).pipe((0, rxjs_1.reduce)((acc, value) => acc + value, 0))
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn: ... completed!')
});
console.log('');
console.log('*** return seed value if source never emits but completes immediately');
rxjs_1.EMPTY.pipe((0, rxjs_1.reduce)((acc, value) => acc + value, 0))
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn: ... completed!')
});
