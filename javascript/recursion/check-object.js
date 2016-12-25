function checker(currentObject, toCheck){
    console.log('===================');
    console.log('currentObject',currentObject);
    console.log('toCheck',toCheck);
    console.log('length', toCheck.length);


    console.log('bool', !!currentObject);
    if(currentObject){
        if (toCheck.length === 0){
            return true;
        }
        return checker( currentObject[toCheck[0]], toCheck.slice(1) );
    }
    return false;
}

function checkObject(object){
    if (typeof object === 'string'){
        return checkObject(object.split('.'));
    }

    const [head, ...tail] = object;
    // debugger;
    return checker(window[head], tail);

    // console.log( window[object[0]] );
    // console.log( window[object[0]][object[1]] );
    // console.log( window[object[0]][object[1]][object[2]] );
}

var foo = {bar: {baz: 'baz'}};

checkObject('foo.bar.baz');
