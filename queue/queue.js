class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }

  peek() {
    return this.bottom;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.start = newNode;
      this.end = newNode;
      this.length++;
      return this.start;
    }

    if (this.start != null) {
      let current = this.start;
      newNode.next = current;
      this.start = newNode;

      current = this.start;
      while (current.next) {
        current = current.next;
      }
      this.end = current;

      this.length++;
      return this.start;
    }
  }

  dequeue() {
    let current = this.start;

    while(current.next.next != null) {
      current = current.next
    }

    let value = current.next.value;
    current.next = null;
    this.end = current;
    this.length--
    return value;
  }
}

const queue = new Queue;

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.dequeue());
console.log(queue.length);
