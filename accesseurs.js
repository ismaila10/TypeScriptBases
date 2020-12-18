let accesseurs = {
    get prop1() {
        console.log('prop 1');
    },

    set prop2(value) {
        console.log('prop 2');
    }
}

console.log('test');
let a = accesseurs.prop1;
accesseurs.prop2 = "foo";