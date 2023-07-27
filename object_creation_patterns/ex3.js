class CircularQueue {
  constructor(size) {
    this.buffer = new Array(size).fill(null)
    this.oldest = 0;
    this.write = 0;
  }
  
  dequeue() {
    let returnValue = this.buffer[this.oldest];
    
    this.buffer[this.oldest] = null;
    
    if(returnValue !== null) {
      this.oldest = this.increment(this.oldest);
    }
    
    return returnValue;
  }
  
  enqueue(inputValue) {
    if (this.buffer[this.write] !== null) {
      this.write = this.oldest; //if the newest method gets 
      this.oldest = this.increment(this.oldest);
    }
    
    this.buffer[this.write] = inputValue;
    this.write = this.increment(this.write);
  }
  
  increment(position) {
    if (this.buffer[position + 1] === undefined) {
      return 0;
    } else {
      return position + 1;
    }
  }
}



let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);