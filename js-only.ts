/*
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
*/

/*
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Mark',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

//person.role = [0, 'admin', 'user'];


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}

*/

function combine(input1: number | string, input2: number | string,) {
    let result;
    if (typeof input1 === 'number' && input2 === 'number') {
       result = input1 + input2;
    } else {
        result = input1.toString() + input2.toLocaleString();
    }
    
    return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combinedStringAges = combine('30', '26', 'as-number');

const combineNames = combine('Mark', 'Anna', 'as-text');
console.log(combineNames);