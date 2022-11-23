"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log('');
console.log('*** take() operators emits all values if source emits fewer than count');
(0, rxjs_1.of)(...[1, 2, 3])
    .pipe((0, rxjs_1.take)(6))
    .subscribe({
    next: console.log
});
console.log('*** interval() function that emits 5 values only');
let intSubsc = (0, rxjs_1.interval)(100).pipe((0, rxjs_1.take)(5)).subscribe({
    next: console.log,
    complete: () => console.log('completeFn: take(5) operator completes the interval source after taking 5 values')
});
setTimeout(() => {
    console.log(`Interval subscription is ${intSubsc.closed ? 'closed' : 'open'} after taking 5 values with take() operator`);
}, 1000);
console.log('');
console.log('*** timer() function that emits a value after a specified time elapses');
let timerSubsc = (0, rxjs_1.timer)(4000).subscribe({
    next: console.log,
    complete: () => console.log('completeFn: timer(4000) completes the source after 4000 milliseconds')
});
setTimeout(() => {
    console.log(`Timer subscription is ${timerSubsc.closed ? 'closed' : 'open'} after taking 4000 milliseconds elapse`);
}, 5000);
