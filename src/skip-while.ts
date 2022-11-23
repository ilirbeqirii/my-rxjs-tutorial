import { from, skipWhile } from "rxjs";

console.log('***skip values while lower than 5');
from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	.pipe(skipWhile((value) => value < 5))
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: skipped first 4 values, emitted left ones, then complete')
	});

console.log('');

console.log(`***emits no values if predicate not met`);
from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	.pipe(skipWhile((value) => value <= 10))
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: completes by not emitting any value')
	});
