"use strict";
// Emits a notification from the source Observable only after a particular time span has passed without another source emission.
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log('*** debounceTime operator - emit items after two seconds of silence');
(0, rxjs_1.interval)(2000)
    .pipe((0, rxjs_1.debounceTime)(2000), (0, rxjs_1.take)(10))
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn: called')
});
// if source observable emits values earlier than the debounceTime than it will hang on forever and if it is infinite source it will never complete.
(0, rxjs_1.interval)(1000)
    .pipe((0, rxjs_1.debounceTime)(2000), (0, rxjs_1.take)(10))
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn: called')
});
