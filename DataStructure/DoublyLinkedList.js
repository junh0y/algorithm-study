/**
  Doubly Linked List
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /*
    Pushing
    : Adding a node to the end of the Doubly Linked List

    Pushing Pseudocode
    · Create a new node with the value passed to the function
    · If the head property is null set the head and tail to be the newly created node
    · If not, set the next property on the tail to be that node
    · Set the previous property on the newly created node to be the tail
    · Set the tail to be the newly created node
  */
  push(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  /*
    Popping
    : Removing a node from the end of the Doubly Linked List

    Popping Pseudocode
    · If there is no head, return undefined
    · Store the current tail in a variable to return later
    · If the length is 1, set the head and tail to be null
    · Update the tail to be the previous Node
    · Set the newTail's next to null
    · Decrement the length
    · Return the value removed
  */
  pop() {
    if (!this.head) return undefined;

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    
    return poppedNode;
  }

  /*
    Shifting
    : Removing a node from the beginning of the Doubly Linked List

    · If length is 0, return undefined
    · Store the current head propert in a variable (we'll call it old head)
    · If the length is one,
      - Set the head to be null
      - Set the tail to be null
    · Update the head to be the next of the old head
    · Set the head's prev property to null
    · Set the old head's next to null
    · Decrement the length
    · Return old head
  */
  shift() {
    if (this.length === 0) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  /*
    Unshifting
    : Adding a node to the beginning of the Doubly Linked List

    Unshifting Pseudocode
    · Create a new node with the value passed to the function
    · If the length is 0
      - Set the head to be the new node
      - Set the tail to be the new node
    · Otherwise
      - Set the prev property on the head of the list to be the new node
      - Set the next property on the new node to be the head property
      - Update the head to be the new node
  */
  unshift(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  /*
    Get
    : Accessing a node in a Doubly Linked List by its position

    Get Pseudocode
    · If the index is less than 0 or greater or equal to the length, return null
    · If the index is less than or equal the length of the list
      - Loop through the list starting from the head and loop towards the middle
      - Return the node once if is found
    · If the index is greater than half the length of the list
      - Loop through the list starting from the tail and loop towards the middle
      - Return the node once it is found
  */
  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  /*
    Set
    : Replacing the value of a node to the in a Doubly Linked List

    Set Pseudocode
    · Create a variable which is the result of the get method at the index passed to the function
      - If the get method returns a valid node,
        set the value of that node to be the value passed to the function
      - Return true
    · Otherwise, return false
  */
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.value = value;
      return true;
    } else {
      return false;
    }
  }

  /*
    Insert
    : Adding a node in a Doubly Linked List by a certain position

    · If the index is less than zero or greater than or equal to the length return false
    · If the index is 0, unshift
    · If the index is the same as the length, push
    · Use the get method to access the index-1
    · Set the next and prev properties on the correct nodes to link everything together
    · Increment the length
    · Return true
  */
  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode; 
    afterNode.prev = newNode;

    this.length++;

    return true;
  }

  /*
    Remove
    : Removing a node in a Doubly Liked List by a certain position

    Remove Pseudocode
    · If the index is less than zero or greater than or equal to the length return undefined
    · If the index is 0, shift
    · If the index is the same as the length-1, pop
    · Use the get method to retrieve the item to be removed
    · Update the next and prev properties to remove the found node from the list
    · Set next and prev to null on the found node
    · Decrement the length
    · Return the removed node.
  */
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
  }

  /*
    Big O of Doubly Linked Lists
    Insertion - O(1)
    Removal - O(1)
    Searching - O(N)
    Access - O(N)
    Technically searching is O(N / 2), but that's still O(N)
  */
}

const list = new DoublyLinkedList();
list.push('A');
list.push('B');
list.push('C');
list.push('D');
list.push('E');
list.push('F');
list.push('G');
list.push('H');
console.log(list.get(5));
console.log(list.set(5, 'f'));
console.log(list.get(5));

/*
  Recap
  · Doubly Linked Lists are almost identical to Singly Linked Lists
    except there is an additional pointer to previous nodes
  · Better than Singly Linked Lists for finding nodes and can be done in half the time!
  · However, they do take up more memory considering the extra poiner
*/