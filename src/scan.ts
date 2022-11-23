import { map, of, scan } from "rxjs";

console.log('*** print each intermediary value summed up');

of(1, 2, 3, 4).pipe(
	scan(
		(acc, value) => acc + value, 0
	),
	map((sum, index) => sum / (index + 1))
)
	.subscribe({
		next: console.log,
		complete: () => console.log('completeFn: ... completed!')
	});