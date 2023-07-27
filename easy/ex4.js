class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    
  }
}

class Cat extends Pet {
  constructor(name, age, colors) {
    super(name, age);
    this.colors = colors;
  }
  
  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.colors} fur.`; 
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());

/*
If we don't provide an explicit constructor for cat, the prototype of cat has 
a constructor which will be invoked instead. This would not be a good idea
because there may be special attributes we want to add to cat upon instantiation
that we don't want all instances of pet to have.

To circumvent this, we could add it to the prototype of Cat which inherits from
pet.
*/
