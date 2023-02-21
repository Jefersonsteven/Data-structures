class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return this.top;
    } 
    
    if (this.top) {
      let current = this.top;

      while(this.top.next) {
        current = this.top.next;
      }

      current.next = newNode;
      this.top = current.next;
      this.length++;
      return this.top;
    }

  }

  pop() {
    let current = this.bottom;

    while(current.next != this.top) {
      current = current.next
    }
    
    let value = current.next.value;
    current.next = null;
    this.top = current;
    this.length--;
    return value;
  }
}

const stack = new Stack;

console.log(stack);
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.pop());
console.log(stack);
console.log(stack.peek());