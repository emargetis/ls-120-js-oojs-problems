class Pet {
  constructor(animalType, name) {
    this.animalType = animalType;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.numPets = 0;
  }
  
  addPet() {
    this.numPets += 1;
  }
  
  numberOfPets() {
    return this.numPets;
  }
}

class Shelter {
  constructor() {
    this.adoptions = {};
  }
  
  adopt(owner, pet) {
    if (this.adoptions.hasOwnProperty(owner.name)) {
      this.adoptions[owner.name].push(pet);
      owner.addPet();
    } else {
      this.adoptions[owner.name] = [pet];
      owner.addPet();
    }
  }
  
  printAdoptions() {
    for (let owner in this.adoptions) {
      console.log(`${owner} has adopted the following pets:`);
      
      this.adoptions[owner].forEach(pet => {
        console.log(`a ${pet.animalType} named ${pet.name}`);
      }, this);
      
      console.log('');
    }
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');
let asta         = new Pet('dog', 'Asta');
let laddie       = new Pet('dog', 'Laddie');
let fluffy       = new Pet('cat', 'Fluffy');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');
let animalShelter = new Owner('Animal Shelter');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.adopt(animalShelter, asta);
shelter.adopt(animalShelter, laddie);
shelter.adopt(animalShelter, fluffy);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);


// //LS Solution
// class Pet {
//   constructor(animal, name) {
//     this.animal = animal
//     this.name = name;
//   }
//   info() {
//     return `a ${this.animal} named ${this.name}`;
//   }
// }

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }

//   addPet(pet) {
//     this.pets.push(pet);
//   }

//   numberOfPets() {
//     return this.pets.length;
//   }

//   printPets() {
//     this.pets.forEach(pet => console.log(pet.info()));
//   }
// }

// class Shelter {
//   constructor() {
//     this.owners = {};
//   }

//   adopt(owner, pet) {
//     owner.addPet(pet);
//     if (!this.owners[owner.name]) {
//       this.owners[owner.name] = owner;
//     }
//   }

//   printAdoptions() {
//     for(let name in this.owners) {
//       console.log(`${name} has adopted the following pets:`);
//       this.owners[name].printPets();
//       console.log("");
//     }
//   }
// }