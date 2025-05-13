// this is interprited number array
let arr: number[] = [1, 2, 3];

arr.push(4); //okay
//arr.push("hello");//error

// this is interprited number of array or object constuctor...

let arr2: Array<number | string> = [1, 2, 3];

arr2.push(4);
arr2.push("hello");

let arr3: string[] = ["1", "2", "3"];

//arr3.push(4);//error
arr3.push("hello"); //okay

const arr4: readonly string[] = ["A", "B", "C"];

//arr4.push("D")// error u cant push the data into readonly array
