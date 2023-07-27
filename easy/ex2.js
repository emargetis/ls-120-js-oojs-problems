class Rectangle {
  constructor(wid, len) {
    this.wid = wid;
    this.len = len;
  }
  
  getWidth() {
    return this.wid;
  }
  
  getLength() {
    return this.len;
  }
  
  getArea() {
    return this.wid * this.len;
  }
  
  
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25