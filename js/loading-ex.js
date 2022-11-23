"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const delayForShowingLoader = 500;
const delayForHidingLoader = 100;
const btn = document.getElementById('btn');
const loading$ = (0, rxjs_1.fromEvent)(btn, 'submit').pipe((0, rxjs_1.tap)(() => showLoading(true)), (0, rxjs_1.exhaustMap)(() => {
    const data$ = fetchData().pipe((0, rxjs_1.shareReplay)(1));
    const showLoading$ = (0, rxjs_1.of)(true).pipe((0, rxjs_1.delay)(delayForShowingLoader), (0, rxjs_1.tap)((value) => showLoading(value)));
    const timeToHideLoading$ = (0, rxjs_1.timer)(delayForHidingLoader).pipe((0, rxjs_1.first)());
    const shouldShowLoading$ = (0, rxjs_1.concat)(showLoading$, timeToHideLoading$, data$.pipe((0, rxjs_1.tap)(() => showLoading(false))));
    return (0, rxjs_1.race)(data$, shouldShowLoading$);
}));
loading$.subscribe();
function showLoading(show) {
    const label = document.getElementById('btn');
    if (show) {
        label.style.display = 'block';
    }
    else {
        label.style.display = 'none';
    }
}
function fetchData() {
    return (0, rxjs_1.of)([1, 2, 3, 4]).pipe((0, rxjs_1.delay)(300));
}
