"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log('*** timer() function emits after specified amont of time, and then completes');
(0, rxjs_1.timer)(2000)
    .subscribe({
    next: console.log,
    error: () => console.log('errorFn: called'),
    complete: () => console.log('completeFn: called')
});
console.log('');
console.log('*** timer() function emits after specified amont of time, and then emits again for subsequent times, and dont complete unless take() is used');
(0, rxjs_1.timer)(3000, 2000).pipe((0, rxjs_1.take)(15))
    .subscribe({
    next: console.log,
    error: () => console.log('errorFn: called'),
    complete: () => console.log('completeFn: called')
});
