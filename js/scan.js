"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log('*** print each intermediary value summed up');
(0, rxjs_1.of)(1, 2, 3, 4).pipe((0, rxjs_1.scan)((acc, value) => acc + value, 0), (0, rxjs_1.map)((sum, index) => sum / (index + 1)))
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn: ... completed!')
});
