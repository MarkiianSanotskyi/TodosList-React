/*
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';



function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor,
    ) {
    let result;
    if (typeof input1 === 'number' && input2 === 'number' || resultConversion === 'as-number') {
       result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

 return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-text');
console.log(combinedStringAges);

const combinedNames = combine('Mark', 'Anna', 'as-text');
console.log(combinedNames);

*/

function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(5, 12));

let combineValues: Function;

combineValues = add;
combineValues = printResult;

// combineValues = 5;


console.log(combineValues(8, 8));

// let someValue: undefined;