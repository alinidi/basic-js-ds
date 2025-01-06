const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(element) {
    let node = new Node(element);

    if (!this.head) {
      this.head = node;
      return node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
  }

  peek() {
    return this.head ? this.head.value : null;
  }
}

module.exports = {
  Stack,
};
