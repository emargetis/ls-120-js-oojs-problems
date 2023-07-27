// //Method 1
function objectsEqual(obj1, obj2) {
  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) return false; //does not have property
    if (obj1[key] !== obj2[key]) return false; //values for given properties don't match
  }

  for (let key in obj2) {
    if (!obj1.hasOwnProperty(key)) return false; //does not have property
    if (obj1[key] !== obj2[key]) return false; //values for given properties don't match
  }
  
  return true;
}

//Method 2
function objectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo'}, {a: 'foo', c: 1}));  // false