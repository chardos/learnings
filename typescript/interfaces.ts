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

bet.price = 3; // error
