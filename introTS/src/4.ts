// object
let user: object = {
  id: 1,
  name: 'mehfooz',
};

// user.lastName="khan"// error

//object literal
let user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'mehfooz',
};

// user.lastName="khan"// error

//record

let question: Record<string, boolean> = {
  isMarried: false,
  isEmpty: true,
  isEmployeed: true,
  isIndian: true,
};

question.isHuman = true;
//question.name = "true"; // error showing

let g: number = 8;

let arr88: any[] = [1, 2, 3, 'mehfooz', 'khan'];

// what we can do here for object ..

/* interface and type -> create the blueprint/shape of  an object */

type DATA = { id: number; name: string; address?: string }; // this is custome type
/* interface DATA {
  id: number;
  name: string;
  address?: string;
} // this is custome type */

let obj22: DATA = {
  id: 1,
  name: 'mehfooz',
};

type Company = {
  age?: number;
  name?: string;
  address?: string;
};

type SoftwareDeveloper = {
  isWorking: boolean;
  skill: string;
};

const masai: Company = {
  name: 'Masai',
  address: 'Bangalore',
  age: 2,
};

const companies: Array<Company> = [
  {
    name: 'Masai',
    address: 'Bangalore',
    age: 2,
  },
  {
    name: 'Flipcart',
    address: 'Pune',
    age: 3,
  },
  {
    name: 'Zomato',
    address: 'Delhi',
    age: 4,
  },
];

//# union and intersection's

/* 

! union is denoted as a 'OR' 

# intersection's denoted as 'AND'

*/

//$ union example :

const arrOfNumOfStr: (number | string | boolean)[] = ['mehfooz', 7];
const arrOfNumOfStr1: Array<number | string> = ['mehfooz', 7]; // this is the also one way to pattern to write the code of above code.

//$ intersection's example :

const masaiStudents: Company & SoftwareDeveloper = {
  isWorking: true,
  skill: 'softeware developer',
  address: '',
  age: 23,
  name: 'student_1',
};
