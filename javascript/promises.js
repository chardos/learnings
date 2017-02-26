function wrapper() {
    return new Promise(resolve => {
        one()
            .then(two)
            .then(resolve);
    })
}

function one(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('one');
            resolve('one')
        },1000)
    })
}

function two(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('two');
            resolve('two')
        },1000)
    })
}

Promise.all([wrapper()]).then(values => {
  console.log(values);
  console.log('three');
});
