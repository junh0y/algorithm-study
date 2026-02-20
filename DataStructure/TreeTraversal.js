/*
  Traversing a tree
  1. Breadth-first Search
  2. Depth-first Search
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return false;

    return current;
  }

  contains(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  /*
    BFS (Breadth First Search) 너비 우선 탐색
    Steps - Iteratively
    · Create a queue (this can be an array) and a variable to store the values of nodes visited
    · Place the root node in the queue
      - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
      - If there is a left property on the node dequeued - add it to the queue
      - If there is a right property on the node dequeued - add it to the queue
    · Return the varaiable that stores the values
  */
  BFS() {
    let node = this.root,
        data = [],
        queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    return data;
  }

  /*
    Depth First Seacrh (깊이 우선 탐색, DFS) - PreOrder
    Steps - Recursively
    · Create a variable to store the values of nodes visited
    · Store the root of the BST in a variable called current
    · Write a helper function which accepts a node
      - Push the value of the node to the variable that stores the values
      - If the node has a left property, call the helper function with the left property on the node
      - If the node has a right property, call the helper function with the right property on the node
    · Invoke the helper function with the current variable
    · Return the array of values
  */
  DFSPreOrder() {
    let data = [];
      
    function traverse(node) {
      data.push(node.value);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  /*
    Depth First Seacrh (깊이 우선 탐색, DFS) - PostOrder
    Steps - Recursively
    · Create a variable to store the values of nodes visited
    · Store the root of the BST in a variable called current
    · Write a helper function which accepts a node
      - If the node has a left property, call the helper function with the left property on the node
      - If the node has a right property, call the helper function with the right property on the node
      - Push the value of the node to the variable that stores the values
      - Invoke the helper function with the current variable
    · Return the array of values
  */
  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);

    return data;
  }

  /*
    Depth First Seacrh (깊이 우선 탐색, DFS) - InOrder
    Steps - Recursively
    · Create a variable to store the values of nodes visited
    · Store the root of the BST in a variable called current
    · Write a helper function which accepts a node
      - If the node has a left property, call the helper function with the left property on the node
      - Push the value of the node to the variable that stores the values
      - If the node has a right property, call the helper function with the right property on the node
      - Invoke the helper function with the current variable
    · Return the array of values
  */
  DFSInOrder() {
    let data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.value);
      node.right && traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  /*
    Recap
    · Trees are non-linear data structures that contain a root and child nodes
    · Binary Trees can have values of any type, but at most two children for each parent
    · Binary Search Trees are a more specific version of binary trees
      where every node to the left of a parent is less than it's value and every node to the right is greater
    · We can search through Trees using BFS and DFS
  */
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());