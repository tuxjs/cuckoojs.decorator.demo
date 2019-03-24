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
Object.defineProperty(exports, "__esModule", { value: true });
function logMethod(target, propertyName, propertyDesciptor) {
    // target === Employee.prototype
    // propertyName === "greet"
    // propertyDesciptor === Object.getOwnPropertyDescriptor(Employee.prototype, "greet")
    const method = propertyDesciptor.value;
    propertyDesciptor.value = function (...args) {
        // convert list of greet arguments to string
        const params = args.map(a => JSON.stringify(a)).join();
        // invoke greet() and get its return value
        const result = method.apply(this, args);
        // convert result to string
        const r = JSON.stringify(result);
        // display in console the function call details
        console.log(`Call: ${propertyName}(${params}) => ${r}`);
        // return the result of invoking the method
        return result;
    };
    return propertyDesciptor;
}
exports.logMethod = logMethod;
;
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet(message) {
        return `${this.firstName} ${this.lastName} says: ${message}`;
    }
}
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], Employee.prototype, "greet", null);
const emp = new Employee('Mohan Ram', 'Ratnakumar');
// emp.greet('hello');
