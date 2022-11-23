import { finalize, Observable, of } from "rxjs";

// 'of' operator -> returns an Observable that emits the arguments and then completes.

console.log('****of operator with more than one argument');
of(1, 2, 3, 5).subscribe(console.log);

console.log('');

console.log('****of operator with spread array arguments');
of(...[4, 5, 6]).subscribe(console.log);

console.log('');

console.log('****of operator emit the array');
of([7, 8, 9]).subscribe({
	next: console.log,
	error: console.error,
	complete: () => console.log('of operator finished executing')
});

console.log('');

console.log('****since "of" completes with finite items, it then completed');
of(1, 2, 3, 4, 5)
	.pipe(
		finalize(() => console.log('FINALIZE called on "of" operator COMPLETION'))
	).subscribe({
		next: console.log,
		error: console.error, // never fires cause never throws error
		complete: () => console.log(`complete called: "of" operator finished/completed`)
	});


console.log('');

console.log('****observable that completes; check its state');
var obs5 = new Observable((subscriber) => {
	subscriber.next(1);
	subscriber.next(2);
	subscriber.next(3);
	subscriber.complete();
});
const sub5 = obs5.subscribe({
	next: console.log,
	complete: () => console.log('Observable completed after three next notifications')
});
console.log(`State is ${sub5.closed ? 'closed' : 'open'}`);

console.log('');

console.log('****observable that errors; check its state');
var obs6 = new Observable((subscriber) => {
	subscriber.next(1);
	subscriber.next(2);
	subscriber.next(3);
	subscriber.error(new Error('ERROR thrown'));
});
const sub6 = obs6.subscribe({
	next: console.log,
	error: () => console.error('errorFn: ERROR thrown'),
	complete: () => console.log('completeFn: never called')
});
console.log(`State is ${sub6.closed ? 'closed' : 'open'}`);