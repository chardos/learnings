const curry = require('./curry.js');

var map = curry(function(fn, array){
  return array.map(fn);
})

function addFive(num){
    return num + 5;
}

function multiplyBy3(num){
    return num * 3;
}

var addFiveToAll = map(addFive);
var multiplyAllBy3 = map(multiplyBy3);

var arr = [3,5,7];
console.log( addFiveToAll(arr) );
console.log( multiplyAllBy3(arr) );
console.log( map(addFive, [10,20,30]) );
