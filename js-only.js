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
    var result = input1 + input2;
    return result;
}
var combineAges = combine(30, 26);
console.log(combineAges);
