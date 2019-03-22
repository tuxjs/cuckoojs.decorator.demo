function t(name) {
  console.log('0.params: ' , name);
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("0.t(): called");
    // console.log(target);
    console.log(propertyKey);
    // console.log(descriptor);
    target.getName('Tinh Ngo');
  }
}

class Demo {
  
  public name;

  @t('tinhngo')
  getName(name) {
    this.name = name;
    console.log('1.hello: ' + name);
  }
}