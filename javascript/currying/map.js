// create curried version of this after
// NOT REAL CURRY.
function map(fn, array){
  return function(array){
      return array.map(fn);
  }
}

function addFive(num){
    return num + 5;
}

var addFiveToAll = map(addFive);

var arr = [3,5,7];
console.log(addFiveToAll(arr));
