class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    // * si hay algo
    // * si ese algo es mayor o menor

    // * menor
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
        return value;
      } else {
        this.left.insert(value);
      }
    }
    // * mayor
    if (value > this.value) {
      if (!this.right) {
        this.right = newNode;
        return value;
      } else {
        this.right.insert(value);
      }
    }
  }

  size() {
    // * return 1 + todo lo de la izquierda y lo de la derecha
    let count = 1;
    if (this.left) count += this.left.size();
    if (this.right) count += this.right.size();
    return count;
  }

  
  // PRE-ORDER => NODO-IZQ-DER
  // POST-ORDER => IZQ-DER-NODO
  // IN ORDER => IZQ-NODO-DER
  depthFirstForEach(cb) {
    // * orden depthFirstForEach => post-order: I D N
    this.left.depthFirstForEach(cb);
    this.right.depthFirstForEach(cb);
    cb(this.value);
    // * orden depthFirstForEach => pre-orden: N I D
    this.left.depthFirstForEach(cb);
    this.right.depthFirstForEach(cb);
    cb(this.value);
  }

  // BFS => TOP IZQ
  breadFirstForEach(cb) {
    // ! ejecute para actual
    // ! guardara los nodos enlazados en una queue si estan. (el orden sera de izquierda a derecha)
    // ! ejecuta siempre el primer en la queue
  }
}

const a = new BinarySearchTree(1);



