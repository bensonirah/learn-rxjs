import { filter, map, of, reduce } from "rxjs";

const isEven = (num) => num % 2 === 0;
const square = (num) => num * num;
const add = (a, b) => a + b;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//let result = arr.filter(isEven).map(square).reduce(add);

//console.log(result);
of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  .pipe(filter(isEven))
  .pipe(map(square))
  .pipe(reduce(add))
  .subscribe((val) => console.log(val));
