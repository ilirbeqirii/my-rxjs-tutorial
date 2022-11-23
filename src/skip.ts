import { interval, of, skip, timer } from "rxjs";

console.log(`*** skip() operator ignores first 2 values | finite observable`);
// finite stream of values
of(...[1, 2, 3, 4, 5, 6]).pipe(skip(2))
	.subscribe({
		next: console.log, // logs values
		complete: () => console.log('completeFn')
	});

console.log('');

console.log(`*** skip() operator ignores first 2 values | infinite observable, never stops if not careful`);
interval(1000).pipe(skip(2))
	.subscribe({
		next: console.log, // logs values
		complete: () => console.log('completeFn') // never called cause skip() operator does not stop/unsubscribe the stream
	});