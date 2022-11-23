"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// console.log('*** Delay each emit by a random amount of time, between 0 and 5 seconds')
const clicks = (0, rxjs_1.of)(1, 2, 3).pipe((0, rxjs_1.tap)(val => console.log('From "of" operator:', val)), (0, rxjs_1.concatMap)(value => (0, rxjs_1.of)(value).
    pipe((0, rxjs_1.delay)(2000), (0, rxjs_1.tap)(val => console.log('From "concatMap" operator:', val)))));
const delayedClicks = clicks.pipe((0, rxjs_1.delayWhen)(() => (0, rxjs_1.interval)(Math.random() * 5000)));
delayedClicks.subscribe(x => console.log(x));
// delayWhen operator shifts each emitted value from the source Observable by a time span determined by another Observable. When the source emits a value,
// the delayDurationSelector function is called with the value emitted from the source Observable as the first argument to the delayDurationSelector.
// The delayDurationSelector function should return an Observable, called the "duration" Observable.
// The source value is emitted on the output Observable only when the "duration" Observable emits (nexts) any value. Upon that, the "duration"
// Observable gets unsubscribed.
// const clicks = from([1,2,3]).pipe(concatMap(value => of(value).pipe(delay(2000))));
// const delayedClicks = clicks.pipe(
// 	delayWhen(() => interval(10000))
// );
// delayedClicks.subscribe(console.log);
// console.log('***Delay only first emission by six second');
// interval(1000)
// 	.pipe(delayWhen(() => interval(6000))) // same as delay(6000)
// 	.subscribe({
// 		next: console.log
// 	});
