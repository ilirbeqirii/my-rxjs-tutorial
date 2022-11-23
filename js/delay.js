"use strict";
// delay(2000) - this is gonna delay only first emission (not subsequent ones) for 2 seconds even if we have rage/multiple clicks
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// console.log('***Delay only first emission by four second');
// from([1, 2, 3, 4])
// 	.pipe(delay(4000))
// 	.subscribe({
// 		next: console.log
// 	});
console.log('***Delay only first emission by six second');
(0, rxjs_1.interval)(1000)
    .pipe((0, rxjs_1.delay)(6000))
    .subscribe({
    next: console.log
});
// ! comment out the example you dont wanna execute. not both immediately.
