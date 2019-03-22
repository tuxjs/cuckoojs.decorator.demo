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
function t(name) {
    console.log('0.params: ', name);
    return function (target, propertyKey, descriptor) {
        console.log("0.t(): called");
        // console.log(target);
        console.log(propertyKey);
        // console.log(descriptor);
        target.getName('Tinh Ngo');
    };
}
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.getName = function (name) {
        this.name = name;
        console.log('1.hello: ' + name);
    };
    __decorate([
        t('tinhngo'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Demo.prototype, "getName", null);
    return Demo;
}());
