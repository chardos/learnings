interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// ================================================
// OPTIONAL PROPERTIES
// ================================================

// Question marks denote optional properties
interface DogInterface {
    legs?: number;
    breed?: string;
}

interface CheckFace {
    legs: number;
    breed: string;
    animal: string;
}

function createDog(dogConfig: DogInterface): CheckFace {
    return {
        legs: dogConfig.legs,
        breed: dogConfig.breed,
        animal: 'dog'
    }
}

const dog = createDog({legs: 4})

// ================================================
// READONLY PROPERTIES
// ================================================
interface Bet {
    readonly price: number;
    readonly stake: number;
}

let bet: Bet = {price: 4, stake: 2};

//bet.price = 3; // error


// ================================================
// EXCESS PROPERTY CHECKS
// ================================================

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any; // This allows extra properties like spikes to be passed in
}

function createSquare(config: SquareConfig) {
    // ...
}

let mySquare = createSquare({ color: "red", width: 100, spikes: 3 });


// ================================================
// FUNCTION TYPES
// ================================================
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

let a = mySearch('godzilla', 'god')

// ================================================
// INDEXABLE TYPES
// ================================================
interface AsdfConfig {
    [x: number]: string;
    [x: string]: string;
}

// const tester: AsdfConfig = ['bro'] // Ok.
// const tester: AsdfConfig = {0: 'dongle'} // Ok.
// const tester: AsdfConfig = {'0': 'dongle'} // Ok.
// const tester: AsdfConfig = {'sdf': 'dongle'} // Fails
