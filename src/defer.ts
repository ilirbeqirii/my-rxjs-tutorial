import { defer, of } from "rxjs";

var s1 = of(Date.now()); // gets the date at the moment it is called
var s2 = defer(() => of(Date.now())); // gets the date when the observer subscribes to it

let s1Subsc = s1.subscribe({
	next: (value) => {
		console.log(`Date at the moment "of" operator is called is: ${value}`);
	},
	complete: () => console.log('completeFn: "of" operator completed after emiting time value')
});
console.log(`Subscription of "of" operator is ${s1Subsc.closed ? 'closed' : 'open'}`);

console.log('');

let s2Subsc = s2.subscribe({
	next: (value) => {
		console.log(`Date at the moment "defer" operator is subscribed to it is: ${value}`);
	},
	complete: () => console.log('completeFn: "defer" operator completed after emiting time value')
});
console.log(`Subscription of "defer" operator is ${s2Subsc.closed ? 'closed' : 'open'}`);