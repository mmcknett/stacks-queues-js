class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class LinkedList {
  constructor() {
    this.head = null
  }

  add_last(value) {
    const newNode = new ListNode(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while(current.next !== null) { current = current.next; }

    current.next = newNode;
  }
  
  add_first(value) {
    const newNode = new ListNode(value);
    const next = this.head;

    this.head = newNode;
    newNode.next = next;
  }

  delete(value) {
    if (this.head === null) {
      return;
    }
    
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;
    let next = curr.next;
    while (next !== null) {
      if (next.value === value) {
        curr.next = next.next;
        return;
      }

      curr = next;
      next = curr.next;
    }
  }

  first() {
    return this.head && this.head.value;
  }

  last() {
    let current = this.head;
    if (current === null) return null;
    while(current.next !== null) { current = current.next; }
    return current.value;
  }

  isEmpty() {
    return this.head === null;
  }

  length() {
    let len = 0;
    let curr = this.head;
    while(curr !== null) {
      len++;
      curr = curr.next;
    }
    return len;
  }
};

module.exports = LinkedList;
