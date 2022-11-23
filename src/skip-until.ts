import { delay, interval, of, skipUntil, take } from "rxjs";

console.log('*** skips emitting values until notifier emits');
const notifier$ = of(1).pipe(delay(300));
const source$ = interval(100).pipe(skipUntil(notifier$), take(10));
source$.subscribe({
	next: console.log, // log the value emitted,
	error: console.error, // will fire if error happens
	complete: () => console.log('completeFn: source starts emitting after notifier emits after 300ms')
});

// It will never let the source observable emit any values if the notifier completes or throws an error without emitting a value before.
// do not start to mirror the source observable until notifier emits