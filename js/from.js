"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log('****from operator with array argument');
(0, rxjs_1.from)([1, 2, 3, 4, 5])
    .subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('completeFn: observable completed after emiting all values')
});
console.log('');
console.log('****from operator with array-like argument');
(0, rxjs_1.from)({
    length: 3,
    0: 'One',
    1: 'Two',
    2: 'Three'
})
    .subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('completeFn: observable completed after emiting all values from array-like')
});
console.log('');
console.log('****from operator with generator argument');
function* generator() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
(0, rxjs_1.from)(generator())
    .subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('completeFn: called when generator finishes')
});
console.log('');
console.log('****from operator with promise argument');
let resolvedPromise = Promise.resolve('5');
const subscOfResolveCase = (0, rxjs_1.from)(resolvedPromise)
    .subscribe({
    next: console.log,
    error: console.error,
    complete: () => {
        console.log('completeFn: observable completed with the promised resolved value');
    }
});
let subscOfErrorCase = (0, rxjs_1.from)(Promise.reject('Test Error Message'))
    .subscribe({
    next: console.log,
    error: () => {
        console.log('errorFn: observable errored out'); // emits the error message of promise
    },
    complete: () => console.log('completeFn: never called because observable errored out') /// never run
});
setTimeout(() => {
    console.log(`After resolving our, observable\'s execution is ${subscOfResolveCase.closed ? 'closed' : 'open'}`);
    console.log(`After erroring our, observable\'s execution is ${subscOfErrorCase.closed ? 'closed' : 'open'}`);
}, 5000);
