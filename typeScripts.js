var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Les interactions
var a = function (value1) { return console.log(value1.length); };
var b = {
    prop1: 1,
    prop2: 2,
    prop3: 3
};
var c = {
    prop1: 1,
    prop2: 2
};
// Les types génériques
var d = function (value) { return [value]; }; // function d(value) { return [value] }
var e = function (values) { return [values]; };
var f = {
    prop1: 3,
    prop2: [21]
};
var CL1 = /** @class */ (function () {
    function CL1(arg1, arg2) {
        var _this = this;
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.toArray = function () { return [_this.arg1, _this.arg2]; };
    }
    return CL1;
}());
var CL2 = /** @class */ (function () {
    function CL2(arg1, arg2) {
        var _this = this;
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.toArray = function () { return [_this.arg1, _this.arg2]; };
    }
    return CL2;
}());
var g = new CL2(1, 2); // let g = new CL2<number>(1, 2);
g.toArray();
// Décorateurs=> de class: fonctions exécutées lorsqu'une nouvelle instance de la classe est créée
var deco1 = function (constructeur) { return console.log('Décorateur appelé'); };
var deco2 = function (prototype, name) {
    console.log(prototype);
    console.log(name);
};
var CL3 = /** @class */ (function () {
    function CL3(arg1, arg2) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.prop1 = "foo";
    }
    __decorate([
        deco2
    ], CL3.prototype, "prop1");
    CL3 = __decorate([
        deco1
    ], CL3);
    return CL3;
}());
var dec = new CL3(1, 2);
