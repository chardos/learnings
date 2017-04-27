const List = require('immutable').List;

const arr = [1,2,3,4];
const list = List(arr);

const item = list.get(2) // => 3

const list2 = list.push('bro');

console.log(list);
console.log(list2);


const arr2 = [5,4,3];
const newList = List(arr2);
console.log(newList.sort()); // => [3,4,5]
console.log(newList); // => [3,4,5]

const arrWithObjs = [
    {a: 1},
    {b: 2},
    {a: 3}
]
const objList = List(arrWithObjs);

const firstObj = objList.get(0);
console.log(firstObj);
