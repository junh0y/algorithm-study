/*
  What are Graphs?
  : A graph data strucutre consists of a finite (and possibly mutable) set of vertices or nodes or points,
    together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.
  
  Uses for Graphs
  · Social Networks
  · Location / Mapping
  · Routing Algorithms
  · Visual Hierarchy
  · File System Optimizations

  Essential Graph Terms
  · Vertex - a node
  · Edge - connection between nodes
  · Weighted / Unweighted - values assigned to distances between vertices
  · Directed / Undirected - directions assigned to distanced between vertices
*/

/*
  Adjacency Matix (인접 행렬)
  · Takes up more space (in sparse graphs)
  · Slower to iterate over all edges
  · Faster to lookup specific dege

  Adjacency List (인접 정렬)
  · Can take up less space (in sparse graphs)
  · Faster to iterate over all edges
  · Can be slower to lookup specific edge
  
  Differences & Big O
  |V| - number of vertices
  |E| - number of edges

  Operation       Adjacency List  Adjacency Matrix
  Add Vertext     O(1)            O(|V^2|)
  Add Edge        O(1)            O(1)
  Remove Vertex   O(|V| + |E|)    O(|V^2|)
  Remove Edge     O(|E|)          O(1)
  Query           O(|V| + |E|)    O(1)
  Storage         O(|V| + |E|)    O(|V^2|)

  What will we use?
  : An Adjacency List
  · Mosta data in the real-world tends to lend itself to sparser and/or larger graphs
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /*
    Adding a Vertex
    · Write a method called addVertex, which acceops a name of a vertex
    · It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
  */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  /*
    Adding an Edge
    · This function should accept two vertices, we can call them vertex1 and vertex2
    · The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
    · The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
    · Don't worry about handling errors/invalid vertices
  */
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
    
  /*
    Removing an Edge
    · This function should accept two vertices, we'll call them vertex1 and vertex2
    · The function should reassign the key of vertex1 to be an array that does not contain vertex2
    · The function should reassign the key of vertex2 to be an array that does not contain vertex1
    · Don't worry about handling errors/invalid vertices
  */
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
  }

  /*
    Removing a Vertex
    · This function should accept a vertice to remove
    · This function should loop as long as there are any other vertices in the adjacency list for that vertex
    · Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
    · Delete the key in the adjacency list for that vertex
  */
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('Los Angeles');
g.addVertex('Hong Kong');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Hong Kong', 'Tokyo');
g.addEdge('Hong Kong', 'Dallas');
g.addEdge('Los Angeles', 'Hong Kong');
g.addEdge('Los Angeles', 'Aspen');
g.removeVertex('Hong Kong');
console.log(g);