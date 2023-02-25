class Graph {
  constructor() {
    this.nodes = 0;
    this.adjencentList = {};
  }

  addVertex(node){
    this.adjencentList[node] = [];
    this.nodes++;
  }

  addEdge(node1, node2) {
    this.adjencentList[node1].push(node2);
    this.adjencentList[node2].push(node1);
  }
}

const myGraph = new Graph();
console.log(myGraph);
myGraph.addVertex("1");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addVertex("8");
console.log(myGraph);
myGraph.addEdge("1","6");
myGraph.addEdge("1","3");
myGraph.addEdge("1","4");
myGraph.addEdge("6","3");
myGraph.addEdge("3","5");
myGraph.addEdge("5","4");
myGraph.addEdge("4","8");
console.log(myGraph);




