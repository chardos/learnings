const isDone: boolean = false;
const decimal: number = 4;
const hex: number = 0xf00d;

const color: string = "blue";
//const multiply = color * 25; // Error: LHS of arithmetic must be 'any', 'number' or an enum type.

const list: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];


const tuple: [string, number] = ['hello', 10];
const multiTuple: [string, number, Array<number>] = [ 'hello', 10, [123,123] ];

console.log(tuple[0].substr(1)); // OK
//console.log(tuple[1].substr(1)); // Error, 'number' does not have 'substr'


enum Color {Red, Green, Blue};
const c: Color = Color.Blue;


let notSure: any = 4;
notSure = "Maybe a string"; // OK
notSure = false; // OK

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; // same as below
//let strLength: number = (someValue as string).length; // save as above
