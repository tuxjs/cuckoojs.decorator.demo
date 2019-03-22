function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
  
  // console.log(constructor);

  var ObjectNew = class extends constructor {
      
      newProperty = "new property";
      hello = "override";

  }
  
  ObjectNew.prototype.getProperty = function() {
    console.log('get Property');
    return this.property;
  }

  return ObjectNew;
}

@classDecorator
class Greeter {

  property = "property";
  hello: string;

  constructor(m: string) {
      this.hello = m;
  }

  setProperty(property) {
    this.property = property;
  }

}

let greeter = new Greeter('hello world');
greeter.setProperty('tinh ngo');
console.log((greeter as any).getProperty());

// console.log(new Greeter("world"));