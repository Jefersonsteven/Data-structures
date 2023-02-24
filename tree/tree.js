class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  contructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value.age < currentNode.value.age) {
          if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
        
      }
    }
  }

  search(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value.age) {
          if(value === currentNode.value.age) {
            return currentNode;
          }
          if(!currentNode.left) {
            return false;
          }
          currentNode = currentNode.left;
        } else {
          if(value === currentNode.value.age) {
            return currentNode;
          }
          if(!currentNode.right) {
            return false;
          }
          currentNode = currentNode.right;
        }
        
      }
    }
  }
}

const tree = new BinarySearchTree;
console.log(tree);
tree.insert({name: 'Jeffer', age: 25});
tree.insert({name: 'Johana', age: 34});
tree.insert({name: 'Vanesa', age: 15});
console.log(tree); 
console.log(tree.search(25));