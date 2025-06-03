type Person = { id: number; name: string; lastName: string; age?: number };

let person: Person = { id: 1, name: 'mehfooz', lastName: 'khan' };

type Student = { rollNo: number; fullName: string; age: number };

let student: Student = { rollNo: 1, fullName: 'mehfooz alam khan', age: 25 };

const getV = <O>(obj: O, key: keyof O): O => {
  let b: typeof obj = {
    ...obj,
    id: 1,
    name: 'muntazeer',
    lastName: 'khan',
  };
  return b;
};

getV<Person>(person, 'id');
getV<Person>(person, 'lastName');
getV<Person>(person, 'name');

getV<Student>(student, 'rollNo');
getV<Student>(student, 'fullName');
getV<Student>(student, 'age');
