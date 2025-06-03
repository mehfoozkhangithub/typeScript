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

//! use this way either
/* type CartItems = {
  id: number;
  totalPrice: number;
  product: { id: number; price: number; name: string; quantity: number }[];
};
 */

type ProductType = {
  id: number;
  price: number;
  name: string;
  quantity: number;
};

type CartItems = {
  id: number;
  totalPrice: number;
  products: ProductType[];
};

const cartItems: CartItems[] = [
  {
    id: 1,
    products: [{ id: 1, name: 'Jacket', price: 300, quantity: 2 }],
    totalPrice: 600,
  },
  {
    id: 2,
    products: [
      { id: 1, name: 'Jacket', price: 300, quantity: 2 },
      { id: 2, name: 'Sweater', price: 300, quantity: 2 },
    ],
    totalPrice: 1200,
  },
];

// how we define the  value inside function

function sum(a: number, b: number): number {
  return a + b;
}

// console.log(sum('2', 3));

/* 
! that hy we give the number after function to get thr return value of type is number

function sum(a: number, b: number) {
  return `a + b`;
}

console.log(Math.floor(sum(2, 3)));
 */

const printData = ({ name, age, address }: Company): void => {
  console.log(`${name} ${age} ${address}`);
};
