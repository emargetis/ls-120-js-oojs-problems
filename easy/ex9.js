// class Walker {
//   constructor(name) {
//     this.name = name;
//   }
  
//   walk() {
//     return `${this.name} ${this.gait()} forward.`;
//   }
// }

// class Person extends Walker {
//   gait() {
//     return "strolls";
//   }
// }

// class Cat extends Walker {
//   gait() {
//     return "saunters";
//   }
// }

// class Cheetah extends Walker {
//   gait() {
//     return "runs";
//   }
// }


// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

//LS Solution
class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

const walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
};

Object.assign(Person.prototype, walkMixin);
Object.assign(Cat.prototype, walkMixin);
Object.assign(Cheetah.prototype, walkMixin);

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"