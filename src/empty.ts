// A simple Observable that emits no items to the Observer and immediately emits a complete notification.

import { EMPTY, startWith } from "rxjs";

// Just emits 'complete', and nothing else.

console.log('EMPTY constant is observable that never emits items, and completes immediately')
let emptySubscription = EMPTY.subscribe({
	next: console.log, // never log, cause emits nothing
	complete: () => console.log('completeFn: EMPTY is completed immediately')
})

console.log(`EMPTY subscription is ${emptySubscription.closed ? 'close' : 'open'} after it completes`);

console.log('');

let empty1Subscription = EMPTY.pipe(startWith(5)).subscribe({
	next: console.log, // emits the number 5, and then completes
	complete: () => console.log('completeFn: EMPTY is completed immediately after emiting starting value')
})

console.log(`EMPTY1 subscription is ${empty1Subscription.closed ? 'close' : 'open'} after it completes`);
