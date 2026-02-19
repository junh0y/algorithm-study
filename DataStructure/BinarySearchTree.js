/*
  Tree
  : A data structure that consists of nodes in a parent / child relationship

  Lists - Linear
  Trees - Nonlinear

  A Singly Linked List - sort of special case of a tree

  Tree Terminology
  · Root: The top node in a tree
  · Child: A node directly connected to another node when moving aways from the Root
  · Parent: The converse notion of a child
  · Siblings: A group of nodes with the same parent
  · Leaf: A node with no children
  · Edge: The connection between one node and another

  Trees - Lots of different applications
  · HTML DOM
  · Network Routing
  · Abstract Syntax Tree
  · Artifical Intelligence
  · Folders in Operating Systems
  · Computer File Sytstems

  Kinds of Trees
  · Trees
  · Binary Trees
  · Binary Search Trees

  How BSTS Work
  · Every parent node has at most two children
  · Every node to the left of a parent node is always less than the parent
  · Every node to the right of a parent node is always greater than the parent
*/

/*
  The BinarySearchTress Class
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

  /*
    Inserting

    Steps - Iteratively or Recursively
    · Create a new node
    · Staring at the root
      - Check if there is a root, if not - the root now becomes that new node
      - If there is a root, check if the value of the new node is greater than or less than the value of the root
      - If it is greater
        ○ Check to see if there is a node to the right
          ● If there is, move to that node and repeat these steps
          ● If there is not, add that node as the right property
      - If it is less
        ○ Check to see if there is a node to the left
          ● If there is, move to that node and repeat these steps
          ● If there is not, add that node as the left property
  */
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

  /*
    Finding

    Steps - Iteratively or Recursively
    · Staring at the root
      - Check if there is a root, if not - we're done searching
      - If there is a root, check if the value of the new node is the value we are looking for
        If we found it, we're done
      - If not, check to see if the value is greater than or less than the value of the root
      - If it is greater
        ○ Check to see if there is a node to the right
          ● If there is, move to that node and repeat these steps
          ● If there is not, we're done searching
      - If it is less
        ○ Check to see if there is a node to the left
          ● If there is, move to that node and repeat these steps
          ● If there is not, we're done searching
  */
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
    Big O of BST

    Insertion - O(logN)
    Searching - O(longN)

    Not guaranteed!
  */
}

let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

// console.log(tree);
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(13));
console.log(tree.insert(11));
console.log(tree.insert(2));
console.log(tree.insert(16));
console.log(tree.insert(7));
console.log(tree.find(5));
console.log(tree.find(10));
console.log(tree.find(4));