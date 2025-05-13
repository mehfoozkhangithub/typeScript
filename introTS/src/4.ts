// object
let user: object = {
  id: 1,
  name: "mehfooz",
};

// user.lastName="khan"// error

//object literal
let user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "mehfooz",
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

let arr88: any[] = [1, 2, 3, "mehfooz", "khan"];

// what we can do here for object ..

/* interface and type -> create the blueprint/shape of  an object */

type DATA = { id: number; name: string; address?: string }; // this is custome type

let obj22: DATA = {
  id: 1,
  name: "mehfooz",
};
