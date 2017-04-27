const List = require('immutable').List;
const Map = require('immutable').Map;

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
    Map({a: 1}),
    Map({b: 2}),
    Map({a: 3})
]
const objList = List(arrWithObjs);

var firstObj = objList.get(0);
console.log('firstObj', firstObj);
console.log(firstObj.set('d', 4)); // => {a:1, d:4}
console.log(objList); //this is unchanged
