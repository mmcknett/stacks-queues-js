const expect = require('chai').expect;
const Queue = require('../lib/queue');

describe("Test Queue Implementation", function() {
  it("creates a Queue", function() {
    const q = new Queue();
    expect(q.isEmpty()).to.be.true;
  });

  it.skip('prints [] for an empty queue', function() {
    const q = new Queue();
    expect(q.toString()).to.equal("[]");
  });

  it.skip("adds something to an empty Queue", function() {
    const q = new Queue();
    q.enqueue(10);
    expect(q.toString()).to.equal("[10]");
  });

  it.skip("adds multiple somethings to a Queue", function() {
    const q = new Queue();
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    expect(q.toString()).to.equal("[10, 20, 30]");
  });

  it.skip("removes something from the Queue", function() {
    const q = new Queue();
    q.enqueue(5);
    const removed = q.dequeue();
    expect(removed).to.equal(5);
    expect(q.isEmpty()).to.equal(true);
  });

  it.skip("removes the right something (LIFO)", function() {
    const q = new Queue();
    q.enqueue(5);
    q.enqueue(3);
    q.enqueue(7);
    const removed = q.dequeue();
    expect(removed).to.equal(5);
    expect(q.toString()).to.equal("[3, 7]");
  });

  it.skip("properly adjusts the size with enqueueing and dequeueing", function() {
    const q = new Queue();
    expect(q.isEmpty()).to.be.true;
    q.enqueue(-1);
    q.enqueue(-60);
    expect(q.isEmpty()).to.be.false;
    q.dequeue();
    q.dequeue();
    expect(q.isEmpty()).to.be.true
  });

  it.skip("returns the front element in the Queue", function() {
    const q = new Queue();
    q.enqueue(40);
    q.enqueue(22);
    q.enqueue(3);
    q.dequeue();
    expect(q.dequeue()).to.equal(22);
    q.enqueue(5);
    expect(q.dequeue()).to.equal(3);
  });

  it.skip("returns null when dequeing an empty Queue", function() {
    const q = new Queue();
    q.enqueue(40);
    q.dequeue();
    expect(q.dequeue()).to.equal(null);
  });

  it.skip("can add 5 elements when MAX_SIZE is 5", function() {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);
    expect(Queue.MAX_SIZE).to.equal(5);
    // The deep equality checking assumes that your internal array variable is called `array`.
    // If you called that variable something else, this woudl need to be updated. Normally,
    // tightly coupling tests to implementation details is A Bad Thing (tm). In this
    // case, though, the tests are specifically exercising behavior that results from the
    // ring-buffer implementation detail. That might justify tight coupling to you. Or not.
    // Remove these from the tests if not; feel free to adapt them to your implementaiton if so.
    //expect(q.array).to.eql([1, 2, 3, 4, 5]); // eql does deep equality checking
    expect(q.toString()).to.equal("[1, 2, 3, 4, 5]");
  });

  it.skip("can only add 5 elements when MAX_SIZE is 5 and 6 elements are added", function() {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);
    q.enqueue(6);
    expect(Queue.MAX_SIZE).to.equal(5);
    // expect(q.array).to.eql([6, 2, 3, 4, 5]); // eql does deep equality checking
    expect(q.toString()).to.equal("[2, 3, 4, 5, 6]");
  });

  it.skip("can only add 5 elements when MAX_SIZE is 5 and 7 elements are added", function() {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);
    q.enqueue(6);
    expect(Queue.MAX_SIZE).to.equal(5);
    // expect(q.array).to.eql([6, 7, 3, 4, 5]); // eql does deep equality checking
    expect(q.toString()).to.equal("[3, 4, 5, 6, 7]");
  });

  it.skip("can enqueue 4 elements, dequeue three, and enqueue 3 different elements.", function() {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.dequeue();
    q.dequeue();
    q.dequeue();
    q.enqueue(5);
    q.enqueue(6);
    q.enqueue(7);
    // expect(q.array).to.eql([6, 7, 3, 4, 5]); // eql does deep equality checking
    expect(q.toString()).to.equal("[4, 5, 6, 7]");
  });
});
