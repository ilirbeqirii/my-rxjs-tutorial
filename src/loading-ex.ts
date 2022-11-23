import { concat, delay, exhaustMap, first, from, fromEvent, Observable, of, race, shareReplay, tap, timer } from "rxjs";

const delayForShowingLoader = 500;
const delayForHidingLoader = 100;

const btn = document.getElementById('btn') as HTMLButtonElement;

const loading$ = fromEvent(btn, 'submit').pipe(
	tap(() => showLoading(true)),
	exhaustMap(() => {

		const data$ = fetchData().pipe(shareReplay(1));

		const showLoading$ = of(true).pipe(
			delay(delayForShowingLoader),
			tap((value) => showLoading(value))
		);

		const timeToHideLoading$ = timer(delayForHidingLoader).pipe(first());

		const shouldShowLoading$ = concat(
			showLoading$,
			timeToHideLoading$,
			data$.pipe(tap(() => showLoading(false)))
		);

		return race(data$, shouldShowLoading$);
	})
);

loading$.subscribe();


function showLoading(show: boolean) {
	const label = document.getElementById('btn') as HTMLLabelElement;

	if (show) {
		label.style.display = 'block';
	} else {
		label.style.display = 'none';
	}
}

function fetchData(): Observable<number[]> {
	return of([1, 2, 3, 4]).pipe(delay(300));
}
