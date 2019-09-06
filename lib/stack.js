const LinkedList = require('./linked-list');

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  push(value) {
    this.list.add_first(value);
  }
  
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const first = this.list.first();
    this.list.delete(first);
    return first;
  }
};

module.exports = Stack;
