const add = (a: number, b: number): number => {
  return a + b;
};

add(1, 2); //Okay
//add(1); //error need the second args
//add(5,"hello") // error

// sec eg :-

const log = (message: string): void => {
  console.log(" message:", message);
};
