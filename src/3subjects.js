import { Subject, BehaviorSubject, ReplaySubject, interval, timer } from 'rxjs';

//P! Subject позволяет передавать значения многим наблюдателям, различия с BehaviorSubject в том что он сразу вернёт старое значение
// (у бехэв есть инициализация а у обычного нет ) , ReplaySubject похож на Behavior но ему мы передаём кол-во последних значений которые должен получить подписчик, так же 
//вторым параметром можно указать на сколько старыми должны быть значения в мс

// document.addEventListener('click', () => {

//     const stream$ = new Subject(0);

//     const s1 = stream$.subscribe({
//         next(val) {
//             console.log('Val: ', val);
//         }
//     });

//     stream$.next('A');


// });

// const stream$ = new Subject(0);

// const s1 = stream$.subscribe({
//     next(val) {
//         console.log('ValS1: ', val);
//     }
// });

// stream$.next('A');

// const s2 = stream$.subscribe({
//     next: val => console.log('ValS2: ', val)
// });

// stream$.next('B');


// const bStream$ = new BehaviorSubject(0);

// bStream$.subscribe({
//     next: v => console.log('obA: ', v)
// });

// bStream$.next(1);

// bStream$.subscribe({
//     next: v => console.log('obB: ', v)
// });

// bStream$.next(2);

const replayStream$ = new ReplaySubject(10, 1000);

replayStream$.subscribe({
    next: v => console.log('RS1: ', v)
});

// replayStream$.next
let i = 0;

// replayStream$.next(i++);
// replayStream$.next(i++);
// replayStream$.next(i++);
// replayStream$.next(i++);
const intervalSub = interval(500).subscribe({
    next: (v) => {
        replayStream$.next(i++);
    }
});

timer(3000).subscribe({
    next: v => {
        replayStream$.subscribe({
            next: v => console.log('RS2: ', v)
        });
    }
});

timer(10000).subscribe({
    next: v => {
        intervalSub.unsubscribe();
    }
});

