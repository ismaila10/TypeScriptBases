// Les interactions
let a = (value1: string | Array<any>) => console.log(value1.length);

interface Int1 {
    prop1: any;
    prop2: any;
}

interface Int2 {
    prop3: any;
}

let b: Int1 & Int2 = {
    prop1: 1,
    prop2: 2,
    prop3: 3
}

let c: Int1 | Int2 = {
    prop1: 1,
    prop2: 2,
    //prop3: 3
}

// Les types génériques

let d = (value) => [value]; // function d(value) { return [value] }

let e: <T>(v: T) => T[] = (values) => [values];

interface Int3 <T> {
    prop1: T,
    prop2: T[]
}

let f: Int3 <number> = {
    prop1: 3,
    prop2: [21]
}

class CL1 {
    constructor (public arg1, public arg2) {}

    toArray = () => [this.arg1, this.arg2]
}

class CL2<T> {
    constructor (public arg1: T, public arg2: T) {}

    toArray: () => T[] = () => [this.arg1, this.arg2]
}

let g = new CL2(1, 2); // let g = new CL2<number>(1, 2);
g.toArray()

