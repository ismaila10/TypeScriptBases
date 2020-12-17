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

