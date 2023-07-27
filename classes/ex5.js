class cat {
  constructor(name) {
    this.name = name;
  }
  
  greeting() {
    console.log(`Hello! My name is ${this.name}`);
  }
}

let kitty = new cat('Sophie');

kitty.greeting();