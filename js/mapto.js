"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log('*** mapTo emits the same value for each emitted value from source');
(0, rxjs_1.from)([1, 2, 3, 4])
    .pipe((0, rxjs_1.mapTo)('a'))
    .subscribe({
    next: console.log
});
console.log('');
console.log('*** mapTo implemented as map operator');
(0, rxjs_1.from)([1, 2, 3, 4])
    .pipe((0, rxjs_1.map)(() => 'a'))
    .subscribe({
    next: console.log
});
