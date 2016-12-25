function checker(currentObject, toCheck){
    const noObjectsLeft = toCheck.length === 0;
    const objectExists = currentObject && noObjectsLeft;

    if(noObjectsLeft){
        return !!objectExists;
    }
    return checker( currentObject[toCheck[0]], toCheck.slice(1) );
}

function checkObjectExists(object){
    if (typeof object === 'string'){
        return checkObjectExists(object.split('.'));
    }
    const [head, ...tail] = object;
    return checker(window[head], tail);
}

var foo = {bar: {baz: 'baz'}};

checkObjectExists('foo.bar.baz');
