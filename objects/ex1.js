function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}


let helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
//= Good Morning Victor

/*
The problem with this code is that when we are invoking the `greet` method on 
line 27, the context is the 'helloVictor'. However, the function `greet` will first look in itself for variables
by that name and by not using the keyword `this` in front of the 
properties `morning` `afternoon` and `evening` then it will search the global object. 
However, neither the function nor the global object have have variables or properties with those names, respectively.
*/