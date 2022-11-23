"use strict";
// A simple Observable that emits no items to the Observer and immediately emits a complete notification.
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// Just emits 'complete', and nothing else.
console.log('EMPTY constant is observable that never emits items, and completes immediately');
let emptySubscription = rxjs_1.EMPTY.subscribe({
    next: console.log,
    complete: () => console.log('completeFn: EMPTY is completed immediately')
});
console.log(`EMPTY subscription is ${emptySubscription.closed ? 'close' : 'open'} after it completes`);
console.log('');
let empty1Subscription = rxjs_1.EMPTY.pipe((0, rxjs_1.startWith)(5)).subscribe({
    next: console.log,
    complete: () => console.log('completeFn: EMPTY is completed immediately after emiting starting value')
});
console.log(`EMPTY1 subscription is ${empty1Subscription.closed ? 'close' : 'open'} after it completes`);
