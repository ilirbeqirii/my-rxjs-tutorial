import { finalize, Observable } from "rxjs";

// In an Observable Execution, zero to infinite Next notifications may be delivered. If either an Error or Complete notification is delivered, then nothing else can be delivered afterwards.

const observable = new Observable((subscriber) => {
	setTimeout(() => {
		console.log('');
		console.log('****async observable created result');
		subscriber.next('Asynchronous')
	}, 1000);
});
observable.subscribe(console.log); // Asynchronous


console.log('');

console.log('****sync observable created result');
var obs = new Observable((subscriber) => {
	subscriber.next('Synchronous');
});
obs.subscribe(console.log); // Synchronous

console.log('');

console.log('****Observable execution that delivers three Next notifications, then completes');
var obs1 = new Observable((subscriber) => {
	subscriber.next(1);
	subscriber.next(2);
	subscriber.next(3);
	subscriber.complete();
});
obs1.subscribe({
	next: console.log,
	complete: () => console.log('Observable completed after three next notifications')
});

console.log('');

console.log('****Observable execution that delivers three Next notifications, then completes, but emit the 4th one');
const obs2 = new Observable((subscriber) => {
	subscriber.next(1);
	subscriber.next(2);
	subscriber.next(3);
	subscriber.complete();
	subscriber.next(5); // Is not delivered because it would violate the contract
});
obs2.subscribe({
	next: console.log,
	complete: () => console.log('Observable completed after three next notifications, but not emit the 4th one')
});

console.log('');

console.log('****observable flow: emit async value, then unsubscribe from it, then see if async value is emitted or not');
const obs3 = new Observable((subscriber) => {
	subscriber.next(1);

	setTimeout(() => {
		subscriber.next(4); // not emitted because observable is unsubscribed
	}, 1000);
});
const subsc = obs3.subscribe(console.log);

console.log('subscription is alive: ', subsc.closed);

console.log('subscription is unsubscribed');
subsc.unsubscribe();
console.log('subscription after unsubscribing status, alive: ', subsc.closed);

console.log('');

console.log('****observable that errors out after emitting 2 values');
const obs4 = new Observable((subscriber) => {
	subscriber.next(1);
	subscriber.next(2);

	setTimeout(() => {
		try {
			throw new Error("Error thrown from obs4");
			
		} catch (error) {
			subscriber.error(error);
		}
	}, 200);

	// try to emit after erroring out
	setTimeout(() => {
		subscriber.next(3); // not emitted cause observable errored out.
	}, 300);

});
obs4.subscribe({
	next: console.log,
	error: () => console.error('Errored!'),
	complete: () => console.log('Completed!') // never logged cause observable errors out
});
