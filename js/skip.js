"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log(`*** skip() operator ignores first 2 values | finite observable`);
// finite stream of values
(0, rxjs_1.of)(...[1, 2, 3, 4, 5, 6]).pipe((0, rxjs_1.skip)(2))
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn')
});
console.log('');
console.log(`*** skip() operator ignores first 2 values | infinite observable, never stops if not careful`);
(0, rxjs_1.interval)(1000).pipe((0, rxjs_1.skip)(2))
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn') // never called cause skip() operator does not stop/unsubscribe the stream
});
