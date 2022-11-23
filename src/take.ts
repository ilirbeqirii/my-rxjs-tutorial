import { interval, of, take, timer } from "rxjs";


console.log('');
console.log('*** take() operators emits all values if source emits fewer than count');
of(...[1,2,3])
	.pipe(take(6))
	.subscribe({
		next: console.log
	});

console.log('*** interval() function that emits 5 values only');
let intSubsc = interval(100).pipe(take(5)).subscribe({
	next: console.log,
	complete: () => console.log('completeFn: take(5) operator completes the interval source after taking 5 values')
});

setTimeout(() => {
	console.log(`Interval subscription is ${intSubsc.closed ? 'closed' : 'open'} after taking 5 values with take() operator`);
}, 1000);


console.log('');

console.log('*** timer() function that emits a value after a specified time elapses');
let timerSubsc = timer(4000).subscribe({
	next: console.log,
	complete: () => console.log('completeFn: timer(4000) completes the source after 4000 milliseconds')
})

setTimeout(() => {
	console.log(`Timer subscription is ${timerSubsc.closed ? 'closed' : 'open'} after taking 4000 milliseconds elapse`);
}, 5000);



