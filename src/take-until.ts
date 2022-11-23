import { delay, EMPTY, from, interval, of, takeUntil } from "rxjs";

console.log('*** emit values until notifier emits');

const notifier$ = of(1).pipe(delay(300));
const source$ = interval(100).pipe(takeUntil(notifier$));
source$.subscribe({
	next: console.log, // log the value emitted,
	error: console.error, // will fire if error happens
	complete: () => console.log('completeFn: source completed after notifier emits after 300ms')
});

// ------

const stream$ = from([1, 2, 3, 4, 5, 6])
	.pipe(takeUntil(EMPTY));

setTimeout(() => {
	console.log('');
	console.log('*** takeUntil passes all values if notifier never emits but just completes');

	stream$.subscribe({
		next: console.log, // log the value emitted,
		error: console.error, // will fire if error happens
		complete: () => console.log('completeFn: source completed after emiting all values')
	});
}, 3000);

// mirrors the source observable until notifier emits
