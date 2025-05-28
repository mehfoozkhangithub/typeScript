1. `npm init -y`
2. `npm install typescript -g`
3. check for typscript compiler, by running this command `tsc -v` in the terminal
4. Get the tsconfig.json file data from the my repo of typescript > intoTS dir copy the code.
5. Write a script inside package.json "build":"tsc --watch"
6. Create a src dir -> `index.ts` file; console.log('hello');
7. `npm run build` -> it will create the build folder.

> node :- If any error ouccer just use below command

        `npm uninstall typescript -g`
        `npm uninstall tsc`

Compilation
HLL -> Compiler -> LLL

Transpiler
HLL -> Transpiler(TSC) HLL

#### generic behaviour of code

`code -> Copiled/Transpiled -> Exicutable -> Run`

STATIC LANGUAGE VS DYNAMIC LANGUAGE

Dynamic Language

The Cpmiler doesn't know "types" at the compile the.
let x=1;
x='masai';
console.log(Math.floor(x));
JS, PYTHON, RUBY, etc
Generally less etc...

Static Language

- The compiler knows the 'types' at the compile time.
- int x=10;
- clg(x.length) // it's show error...

Typescript ->tsc(compiler)-> Javascript

- ts is statuc language.

code write in ts:-
let c : number = 18;
let y : string = "mumbai"

difference:-

// implicit correction and explicit correction.

console.log("2"+"2); // 22 type is string
console.log("2"-"2); // 0 type number
console.log(1 + !0) // 2 type numaber

- what, why
