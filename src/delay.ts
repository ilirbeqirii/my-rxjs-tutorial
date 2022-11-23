// delay(2000) - this is gonna delay only first emission (not subsequent ones) for 2 seconds even if we have rage/multiple clicks

import { delay, from, interval } from "rxjs";

// console.log('***Delay only first emission by four second');

// from([1, 2, 3, 4])
// 	.pipe(delay(4000))
// 	.subscribe({
// 		next: console.log
// 	});


console.log('***Delay only first emission by six second');

interval(1000)
	.pipe(delay(6000))
	.subscribe({
		next: console.log
	});

// ! comment out the example you dont wanna execute. not both immediately.