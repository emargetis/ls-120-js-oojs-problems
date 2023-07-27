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

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20