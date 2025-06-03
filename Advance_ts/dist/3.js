let person = { id: 1, name: 'mehfooz', lastName: 'khan' };
let student = { rollNo: 1, fullName: 'mehfooz alam khan', age: 25 };
const getV = (obj, key) => {
    let b = Object.assign(Object.assign({}, obj), { id: 1, name: 'muntazeer', lastName: 'khan' });
    return b;
};
getV(person, 'id');
getV(person, 'lastName');
getV(person, 'name');
getV(student, 'rollNo');
getV(student, 'fullName');
getV(student, 'age');
