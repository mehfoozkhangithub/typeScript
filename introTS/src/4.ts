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
