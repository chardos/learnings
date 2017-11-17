function identity<T>(arg: T): T {
    return arg;
}

var str = 'a string';
let output = identity<string>(str);  // type of output will be 'string'
