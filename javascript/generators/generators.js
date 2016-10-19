// =============================================================================
// Simple use case
// =============================================================================

function* sequence(){
    let index = 0;
    let arr = ['Drop in', 'Kickflip', 'Backflip']
    while (index < arr.length){
        yield arr[index];
        index++;
    }
}

var seq = sequence();

console.log(gen.next().value); // Drop in
console.log(gen.next().value); // Kickflip
console.log(gen.next().value); // Backflip
