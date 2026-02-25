/*
  Hash Table
  · Hash Tables are used to store key-value pairs.
  · They are like arrays, but the keys are not ordered.
  · Unlike arrays, hash tables are fast for all of the following operations
    : finding values, adding new values, and removing values.

  Hash Tables in the wild
  · Python - Dictionaries
  · JavaScript - Objects and Maps
  · Java, Go, and Scala - Maps
  · Ruby - Hashes

  What makes a good hash
  (not a cryptographically secure one)
  · Fast (i.e. constant time)
  · Doesn't cluster outputs at specific indices, but distributes uniformly
  · Deterministic (same input yields same output)
*/

/*
  Separate Chaining
  · With separate chaining, at each index in our array we store values using a more sophistcated data structure (e.g. an array or a linked list)
  · This allows us to store multiple key-value pairs at the same index.


  Linear Probing
  · With linear probing, when we find a collision,
    we search through the array to find the next empty slot.
  · Unlike with separate chaing, this allows us to store a single key-value at each index.
*/

class HashTable {
  constructor(size = 17) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0 ; i < Math.min(key.length, 1000); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  /*
    Set / Get
    · Set 
      1. Accepts a key and a value
      2. Hashes the key
      3. Stores the key-value pair in the hash table array via separate chaining
    · Get
      1. Accepts a key
      2. Hashes the key
      3. Retrieves the key-value pair in the hash table
      4. If the key isn't found, returns undefined
  */
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0 ; i < this.keyMap[index].length ; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  /*
    Keys / Values

    · Keys
    : Loops through the hash table array and returns an array of keys in the table

    · Values
    : Loops through the hash table array and returns an array of values in the table
  */
  keys() {
    let keysArr = [];
    for (let i = 0 ; i < this.keyMap.length ; i++) {
      if (this.keyMap[i]) {
        for (let j = 0 ; j < this.keyMap[i].length ; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0 ; i < this.keyMap.length ; i++) {
      if (this.keyMap[i]) {
        for (let j = 0 ; j < this.keyMap[i].length ; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  /*
    Big O of Hash Tables

    (average case)
    Insertion - O(1)
    Deletion  - O(1)
    Access    - O(1)


    Recap
    · Hash tables are collections of key-value pairs
    · Hash tables can find values quickly given a key
    · Hash tables can add new key-values quickly
    · Hash tables store data in a large array, and work by hashing the keys
    · A good hash should be fast, distribute keys uniformly, and be determinstic
    · Seperate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
  */
}
let ht = new HashTable(17);
console.log(ht.set('Maroon', '#800000'));
console.log(ht.set('Yellow', '#FFFF00'));
console.log(ht.set('Red', '#FF0000'));
console.log(ht.set('Blue', '#0000FF'));
console.log(ht.set('White', '#FFFFFF'));
console.log(ht.set('Black', '#000000'));
console.log(ht.get('Yellow'));
console.log(ht);
console.log(ht.keys());
console.log(ht.values());