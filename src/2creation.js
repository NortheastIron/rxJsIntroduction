import { of, from, scan, Observable, fromEvent, map, filter, range, timer, interval } from 'rxjs';

// P! в названии стримов использовать $
// P! pipe нужен чтобы потоку задать какие то условия (filter, map, scan) (объединение функциональных операторов в цепочку)

// const stream$ = of(1, 2, 3, 4, ['a', 'b'], 'nana');

// stream$.subscribe({
//     next: (val => {
//         console.log(val);
//     }),
//     complete: () => console.log('complete')
// });

// P! of и from разница в передаче структуры данных, of передаёт по очереди без разбиения, from же разобьёт строку на элементы, если она не является элементом массива

// const arr$ = from('ara').pipe(
// // const arr$ = from([1, 2, 3, 4, 'ara']).pipe(
//     scan((acc, v) => acc.concat(v), [])
// );

// arr$.subscribe({
//     next: val => console.log(val)
// });

//_______________// тут создание своего стрима наподобии промисов

// const stream$ = new Observable(observer => {
//     observer.next('first value');

//     setTimeout(() => observer.next('After 1000'), 1000);
//     setTimeout(() => observer.complete(), 1000);
//     setTimeout(() => observer.error('Problem'), 1200);
//     setTimeout(() => observer.next('After 2000'), 2000);
// });

// //P! subscribe всегда писать с объектом, содержит 3 функции .. complete ничего в себя не принимает
// stream$.subscribe({
//    next: val => console.log('Value: ', val),
//    error: (err) => {console.log('err: ', err)},
//    complete: () => console.log('COMPLETE')
// });



//_________________________--__________// !P fromEvent создаёт стрим из события 

// const canvas = document.querySelector('canvas');

// fromEvent(canvas, 'mousemove').pipe(
//     filter(e => {
//         if (e.type == 'mousedown') {
//             return false;
//         }
//         return true;
//     }),
//     map(e => ({
//         x: e.offsetX,
//         y: e.offsetY,
//         ctx: e.target.getContext('2d')
//     }))
// ).subscribe({
//     next: pos => {
//         // console.log(event);
//         pos.ctx.fillRect(pos.x, pos.y, 2, 2);
//     }
// });

// const clear$ = fromEvent(document.getElementById('clear'), 'click');

// clear$.subscribe({
//     next: () => {
//         const ctx = canvas.getContext('2d');
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//     }
// })

//!Z доп код рисовалки в TesTPaintFromInt.js


//_______________________// P! .unsubscribe() отписаться от наблюдения
//P! timer(1000) тоже что и сетТаймаут но позволяет создавать стримы
//P! range(1, 10) создаёт стрим с последовательностью в указанном диапазоне, старт, длина

// const intervalSub = interval(500).subscribe({
//     next: (v) => {
//         console.log('V: ', v);
//     }
// });

// setTimeout(() => {
//     intervalSub.unsubscribe();
// }, 4000);

// timer(2000).subscribe({
//     next: v => console.log(v)
// });

range(2, 10).subscribe({
    next(val) {
        console.log('val', val);
    }
});