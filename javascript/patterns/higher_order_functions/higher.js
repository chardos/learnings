function logAndReturn(fn){
    return function(){
        var args = Array.prototype.slice.call(arguments)
        var result = fn.apply(null, args);
        console.log(result);
        return result;
    }
}

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}

var addAndLog = logAndReturn(add);
var subtractAndLog = logAndReturn(subtract);
addAndLog(4, 4)
subtractAndLog(10, 3)
