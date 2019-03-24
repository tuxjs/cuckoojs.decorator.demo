"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function classDecorator(constructor) {
    // console.log(constructor);
    var ObjectNew = class extends constructor {
        constructor() {
            super(...arguments);
            this.newProperty = "new property";
            this.hello = "override";
        }
    };
    ObjectNew.prototype.getProperty = function () {
        console.log('get Property');
        return this.property;
    };
    return ObjectNew;
}
let Greeter = class Greeter {
    constructor(m) {
        this.property = "property";
        this.hello = m;
    }
    setProperty(property) {
        this.property = property;
    }
};
Greeter = __decorate([
    classDecorator,
    __metadata("design:paramtypes", [String])
], Greeter);
let greeter = new Greeter('hello world');
greeter.setProperty('tinh ngo');
console.log(greeter.getProperty());
// console.log(new Greeter("world"));
