"use strict";
// Emits a value from the source Observable, then ignores subsequent source values for duration milliseconds, then repeats this process.
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log('*** throttleTime() operator - emit first value, and ignore other ones');
(0, rxjs_1.of)(1, 2, 3, 4, 5)
    .pipe((0, rxjs_1.throttleTime)(2000) //emit only first one, and ignore other values since they emitted immediately with no delay
)
    .subscribe({
    next: console.log,
    complete: () => console.log('completeFn: called!')
});
console.log('');
console.log('*** throttleTime() operator - limit the emitting rate of numbers at one for 2 seconds');
(0, rxjs_1.timer)(0, 2000)
    .pipe((0, rxjs_1.throttleTime)(2000), (0, rxjs_1.take)(10)).subscribe({
    next: console.log,
    complete: () => console.log('completeFn: called!')
});
// next example
var obs = new rxjs_1.Observable((subscriber) => {
    subscriber.next(1);
    setTimeout(() => {
        subscriber.error(new Error('error happened!'));
    }, 1000);
    subscriber.next(2);
});
setTimeout(() => {
    console.log('');
    console.log('*** throttleTime() operator - error out');
    obs.pipe((0, rxjs_1.throttleTime)(2000))
        .subscribe({
        next: console.log,
        error: (err) => console.error(err.message),
        complete: () => console.log('completeFn: called!') // never called
    });
}, 20000);
