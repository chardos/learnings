const isDone: boolean = false;
const decimal: number = 4;
const hex: number = 0xf00d;

const color: string = "blue";

const list: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];


const tuple: [string, number] = ['hello', 10];
const multiTuple: [string, number, Array<number>] = [ 'hello', 10, [123,123] ];

console.log(tuple[0].substr(1)); // OK
console.log(tuple[1].substr(1)); // Error, 'number' does not have 'substr'
