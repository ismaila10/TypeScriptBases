// Les tuples
let u: string[];
let t: [string, number, string?] = ['a', 1, 'b'];

function rest(...tuple: [string, number, string]) {} //function rest(arg1: string, arg2: number, arg3: string) {}

// Syntaxe de décomposition
const r = [1,2,3];
console.log(...r); //1 2 3

// Les paramètres de rest
function rest1(...arg) { return arg } //undefined
rest1(1,2,3);  // [1,2,3]