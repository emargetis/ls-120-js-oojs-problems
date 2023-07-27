class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData()); //"ByeBye"
console.log(thing.dupData()); //"HelloHello"

/*
the statice method is invoked first which has a fixed return value of "ByeBye"
and the instance method returns the value of data concatenated together twice
*/