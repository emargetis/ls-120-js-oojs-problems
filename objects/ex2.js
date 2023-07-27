let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    
    return this.price - discount;
  },
};

console.log(item.discount(20))   // should return 40

console.log(item.discount(50))   // should return 25

console.log(item.discount(25))   // should return 37.5

/*
The code is logging the incorrect prices after the first invocation on line 14
becuase we are continually mutating the `price` property object rather than 
just calculating the discount and assigning it to a separate variable within the
function and then returning that separate variable.
*/