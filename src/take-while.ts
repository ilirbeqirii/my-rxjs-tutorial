import { from, takeWhile } from "rxjs"

console.log(`***emit values while lower than 5`)
from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	.pipe(takeWhile((value) => value < 5))
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: completes after emiting first 4 values')
	});

console.log('');

console.log(`***emit values while lower than and equal to 5`);

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	.pipe(takeWhile((value) => value < 5, true))
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: completes after emiting first 5 values')
	});

console.log('');

console.log(`***emits no values if predicate not met`);
from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	.pipe(takeWhile((value) => value > 10))
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: completes by not emitting any value')
	});