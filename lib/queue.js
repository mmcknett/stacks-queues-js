class Queue {
  static MAX_SIZE = 5;

  constructor() {
    this.array = new Array(Queue.MAX_SIZE)
    this.last = 0;
    this.first = 0;
    this.empty = true;
  }

  enqueue(value) {
    if (this.first === this.last) {
      this.dequeue();
    }
    this.array[this.last++] = value;
    this.last = this.last === Queue.MAX_SIZE ? 0 : this.last;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const result = this.array[this.first++];
    this.first = this.first === Queue.MAX_SIZE ? 0 : this.first;
    return result;
  }

  isEmpty() {
    return this.last === this.first;
  }

  toString() {
    let values = '';
    if (this.first > this.last) {
      values = [...this.array.slice(0, this.last), ...this.array.slice(this.first, this.MAX_SIZE)];
    } else {
      values = this.array.slice(this.first, this.last);
    }
    values = values.join(', ');
    return `[${values}]`;
  }
}

module.exports = Queue;
