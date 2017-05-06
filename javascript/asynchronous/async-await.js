async function printNum() {
    const num = await getNum();
    console.log('num', num);
}

// Using async await still requires the awaited function to be a promise
function getNum(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(12)
        },1000);
    })
}

printNum();
