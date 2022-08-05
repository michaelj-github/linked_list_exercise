/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {

    let newNode = new Node(val);

    if (this.head) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    let newNode = new Node(val);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }

    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {

    if (!this.length) return null;
    let returnNode = this.head;
    let lastNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return returnNode.val;
    }
    while (returnNode.next) {
      lastNode = returnNode;
      returnNode = lastNode.next;
    }

      this.tail = lastNode;
      lastNode.next = null;
      this.length--;
      return returnNode.val;

  }

  /** shift(): return & remove first item. */

  shift() {

    if (!this.length) return null;
    let returnNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return returnNode.val;
    }
    let firstNode = this.head.next;
    this.head = firstNode;
    this.length--;
    return returnNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if (idx < 0 || this.length < idx) return null;
    let returnNode = this.head;
    let lastNode;
    for (let x = 0; x <= idx; x++) {
      lastNode = returnNode;
      returnNode = lastNode.next;
    }
    return lastNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if (idx < 0 || this.length < idx) return null;
    let nextNode = this.head;
    let lastNode;
    for (let x = 0; x <= idx; x++) {
      lastNode = nextNode;
      nextNode = lastNode.next;
    }
    lastNode.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx < 0 || this.length < idx) return null;
    if (idx === this.length) return this.push(val);
    if (idx === 0) return this.unshift(val);
    let newNode = new Node(val);
    let nextNode = this.head;
    let lastNode;
    for (let x = 0; x <= idx - 1; x++) {
      lastNode = nextNode;
      nextNode = lastNode.next;
    }
    newNode.next = lastNode.next;
    lastNode.next = newNode;
    this.length++;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if (idx < 0 || this.length < idx) return null;
    if (idx === this.length) return this.pop();
    if (idx === 0) return this.shift();
    let nextNode = this.head;
    let lastNode;
    for (let x = 0; x <= idx; x++) {
      lastNode = nextNode;
      nextNode = lastNode.next;
    }
    lastNode.next = nextNode.next;
    this.length--;

  }

  /** average(): return an average of all values in the list */

  average() {

    if (!this.length) return 0;
    let nextNode = this.head;
    let lastNode;
    let total = 0;
    for (let x = 0; x < this.length; x++) {
      total += nextNode.val
      lastNode = nextNode;
      nextNode = lastNode.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
