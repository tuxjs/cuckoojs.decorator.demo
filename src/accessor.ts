function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(descriptor);
        descriptor.configurable = value;
    };
}

class Point {
    public _x: number;
    public _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(true)
    get y() { return this._y; }

}

let point = new Point(1,2);
delete point._x; // if configurable = false not delete properties
delete point._y;

console.log(point);
