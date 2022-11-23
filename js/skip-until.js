"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log('*** skips emitting values until notifier emits');
const notifier$ = (0, rxjs_1.of)(1).pipe((0, rxjs_1.delay)(300));
const source$ = (0, rxjs_1.interval)(100).pipe((0, rxjs_1.skipUntil)(notifier$), (0, rxjs_1.take)(10));
source$.subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('completeFn: source starts emitting after notifier emits after 300ms')
});
// It will never let the source observable emit any values if the notifier completes or throws an error without emitting a value before.
// do not start to mirror the source observable until notifier emits
