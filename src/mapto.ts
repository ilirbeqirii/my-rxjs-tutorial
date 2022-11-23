import { from, map, mapTo } from "rxjs"

console.log('*** mapTo emits the same value for each emitted value from source')

from([1, 2, 3, 4])
	.pipe(mapTo('a'))
	.subscribe({
		next: console.log
	});

console.log('');

console.log('*** mapTo implemented as map operator')

from([1, 2, 3, 4])
	.pipe(map(() => 'a'))
	.subscribe({
		next: console.log
	});
