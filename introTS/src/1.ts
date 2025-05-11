let a: string = "hello";
a = "mehfooz"; //Okay
//a = 1; //Error

let b: number = 1;
b = 321; // Okay
//b = "asxa";

let c: boolean = true; // if we use -> : Boolean "capital letter of the value it's will dnote constructor-classes"

//null, undefine

let d: string | null = null;

d = "hello";
d = null;

//type any

let e: any = "hello";

e = false;
e = undefined;
e = null;
e = "hello";
e();

// custome types

let f: "foo" | "bar" = "foo";

f = "bar"; // Okay
//f = "Bar"; //Error
/* 

// String Type
let a: string = "hello";
a = "mehfooz"; // ✅ Okay
// a = 1; // ❌ Error: Type 'number' is not assignable to type 'string'

// Number Type
let b: number = 1;
b = 321; // ✅ Okay
// b = "asxa"; // ❌ Error: Type 'string' is not assignable to type 'number'

// Boolean Type
let c: boolean = true; // ✅ Correct

// Union Type with null
let d: string | null = null;
d = "hello"; // ✅ Okay
d = null;    // ✅ Okay

// Any Type
let e: any = "hello";
e = false;       // ✅ Okay
e = undefined;   // ✅ Okay
e = null;        // ✅ Okay
e = "hello";     // ✅ Okay
// e(); // ⚠️ Runtime Error: e is not a function

// Custom Literal Types
let f: "foo" | "bar" = "foo";
f = "bar"; // ✅ Okay
// f = "Bar"; // ❌ Error: Type '"Bar"' is not assignable to type '"foo" | "bar"'

*/
