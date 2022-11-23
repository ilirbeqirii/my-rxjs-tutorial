// Emits a notification from the source Observable only after a particular time span has passed without another source emission.

import { debounceTime, interval, take } from "rxjs";

console.log('*** debounceTime operator - emit items after two seconds of silence');

interval(2000)
	.pipe(
		debounceTime(2000),
		take(10)
	)
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: called')
	});

// if source observable emits values earlier than the debounceTime than it will hang on forever and if it is infinite source it will never complete.

interval(1000)
	.pipe(
		debounceTime(2000),
		take(10)
	)
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: called')
	});