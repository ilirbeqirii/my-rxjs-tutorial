"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log('*** emit values until notifier emits');
const notifier$ = (0, rxjs_1.of)(1).pipe((0, rxjs_1.delay)(300));
const source$ = (0, rxjs_1.interval)(100).pipe((0, rxjs_1.takeUntil)(notifier$));
source$.subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('completeFn: source completed after notifier emits after 300ms')
});
// ------
const stream$ = (0, rxjs_1.from)([1, 2, 3, 4, 5, 6])
    .pipe((0, rxjs_1.takeUntil)(rxjs_1.EMPTY));
setTimeout(() => {
    console.log('');
    console.log('*** takeUntil passes all values if notifier never emits but just completes');
    stream$.subscribe({
        next: console.log,
        error: console.error,
        complete: () => console.log('completeFn: source completed after emiting all values')
    });
}, 3000);
// mirrors the source observable until notifier emits
