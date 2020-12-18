import { isString } from "util";

let x: unknown;
let y: any;

a.length;
//x.length; error

let z: string = y;
//let z: string = x; error

if(isString(x)){
    x.length;
    let d: string = x;
}

function isString(value: unknown) : value is string {
    return 'string' === typeof value;
}