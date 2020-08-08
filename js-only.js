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
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toLocaleString();
    }
    return result;
}
var combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
var combinedStringAges = combine('30', '26', 'as-number');
var combineNames = combine('Mark', 'Anna', 'as-text');
console.log(combineNames);
