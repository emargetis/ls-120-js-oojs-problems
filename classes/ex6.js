class cat {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hello! My name is ${this.name}`);
  }
}

let kitty = new cat('Sophie');
kitty.greet();