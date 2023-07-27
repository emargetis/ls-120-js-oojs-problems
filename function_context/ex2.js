let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(number => {
      return this.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());

/*
The callback function will execute in the global context because the callback 
funtion passed into map will have its context stripped.

There are a few ways to fix this:
- provide `this` as a second argument to the `map` method
- set a context variable within the the outer function `allMovies` and pass in
a value of number
- use an arrow function
- use bind to permanently use the object context

*/