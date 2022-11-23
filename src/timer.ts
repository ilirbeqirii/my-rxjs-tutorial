import { take, timer } from "rxjs";

console.log('*** timer() function emits after specified amont of time, and then completes')

timer(2000)
	.subscribe({
		next: console.log,
		error: () => console.log('errorFn: called'),
		complete: () =>console.log('completeFn: called')
	});

console.log('');
console.log('*** timer() function emits after specified amont of time, and then emits again for subsequent times, and dont complete unless take() is used');


timer(3000, 2000).pipe(take(15))
	.subscribe({
		next: console.log,
		error: () => console.log('errorFn: called'),
		complete: () =>console.log('completeFn: called')
	});