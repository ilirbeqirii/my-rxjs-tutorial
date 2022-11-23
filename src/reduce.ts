import { EMPTY, of, reduce } from "rxjs";

console.log('*** sum all the values emitted by source observable');

of(1, 2, 3, 4).pipe(reduce(
	(acc, value) => acc + value, 0
))
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: ... completed!')
	});

console.log('');

console.log('*** return seed value if source never emits but completes immediately');

EMPTY.pipe(reduce(
	(acc, value) => acc + value, 0
))
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: ... completed!')
	});