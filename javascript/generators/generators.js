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

console.log(seq.next().value); // Drop in
console.log(seq.next().value); // Kickflip
console.log(seq.next().value); // Backflip

// =============================================================================
// Example with yield*
// =============================================================================

function* likeGenerator(str){
    yield `I like ${str}`
    yield* dislikeGenerator(str)
    yield `I love ${str}`
}
function* dislikeGenerator(str){
    yield `I dislike ${str}`
    yield `I loathe ${str}`
}
let seq = likeGenerator('spoons')

console.log(seq.next().value); // I like spoons
console.log(seq.next().value); // I dislike spoons
console.log(seq.next().value); // I loathe spoons
console.log(seq.next().value); // I love spoons


// =============================================================================
// Passing arguments into generators
// =============================================================================

function* generator(){
    console.log('initial');
    console.log(yield);
    alert(yield);
}
var gen = generator()

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();  //initial
gen.next('cats'); // logs
gen.next('dogs'); // alerts
