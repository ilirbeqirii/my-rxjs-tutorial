import { finalize, interval, noop, Observable, tap, timer } from "rxjs";

// Returns an Observable that mirrors the source Observable, but will call a specified function when the source terminates on complete or error.
//  The specified function will also be called when the subscriber explicitly unsubscribes.

console.log(`***Emit 2 values, then complete****`);
const observable = new Observable((subscriber) => {
	subscriber.next(1);
	subscriber.next(2);
	subscriber.complete();
});

observable.pipe(
	finalize(() => console.log('"finalize" called after observable is COMPLETED'))
).subscribe({
	next: console.log,
	error: console.log, // will never fire cause observable is completed
	complete: () => console.log(`completeFn: Observable COMPLETED`)
});

console.log('');

console.log(`***Emit 2 values, then error out****`);
const observable1 = new Observable((subscriber) => {
	try {
		subscriber.next(1);
		subscriber.next(2);

		throw new Error("erro thrown");

	} catch (error) {
		subscriber.error(error);
	}
});
observable1.pipe(
	finalize(() => console.log('"finalize" called after observable ERRORED OUT'))
).subscribe({
	next: console.log,
	error: () => console.error('errorFn: Errored!'),
	complete: () => console.log(`completeFn: Observable NEVER COMPLETED`) // will never be called cause observable errors out.
});

console.log('');

console.log(`***Emit values until unsubscribed****`);
const source = interval(100).pipe(
  finalize(() => console.log('[finalize] Called')),
  tap({
    next: () => console.log('[next] Called'),
    error: () => console.log('[error] Not called'), // because it never errors out.
    complete: () => console.log('[tap complete] Not called') // because is not completed but unsubscribed so observer not interested on it anymore
  })
);

const sub = source.subscribe({
  next: x => console.log(x),
  error: noop,
  complete: () => console.log('[complete] Not called') // because is not completed but unsubscribed so observer not interested on it anymore
});

timer(150).subscribe(() => sub.unsubscribe());