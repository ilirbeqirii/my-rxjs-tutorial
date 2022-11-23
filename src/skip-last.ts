import { EMPTY, of, skipLast } from "rxjs";

console.log('*** skipLast operator skips last 2 values');

const stream$ = of(1, 2, 3, 4, 5, 6);

stream$.pipe(skipLast(2))
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: ...Completed!')
	});

console.log('');

console.log('*** skipLast operator skips nothing if source never emits, and completes');

EMPTY.pipe(
	skipLast(2)
)
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: ...Completed with no emission!')
	});

console.log('');

console.log('*** skipLast operator emits nothing if skip count is same as number of emissions');

of(1, 2, 3).pipe(skipLast(3))
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: ...Completed with no emission!')
	});

console.log('');

console.log('*** skipLast operator emits all values if skip count is greater than the number of emissions');

of(1, 2, 3).pipe(skipLast(5))
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: ...Completed with 3 emissions only!')
	});

// ! never emits if working with indefinite sources.