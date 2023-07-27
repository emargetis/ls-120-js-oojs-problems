Object.prototype.ancestors = function() {
  let protoArr = [];
  let current = this;
  
  while (Object.getPrototypeOf(current)) {
    protoArr.push(Object.getPrototypeOf(current).name || 'Object.prototype');
    current = Object.getPrototypeOf(current);
  }
  
  return protoArr;
};

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']