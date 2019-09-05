const LinkedList = require('../lib/linked-list.js').default;
const expect = require('chai').expect;

class InspectableList extends LinkedList {
  get nodes() {
    return this.head;
  }
}

describe('LinkedList', function() {
  describe('isEmpty', function() {
    it('must be true for an empty list', function() {
      const list = new LinkedList();
      expect(list.isEmpty()).to.be.true;
    });
  });

  describe('append', function() {
    it('must append a node onto an empty list', function() {
      const list = new InspectableList();

      list.append('something');

      expect(list.isEmpty()).to.be.false;
      expect(list.nodes).not.to.be.null;
      expect(list.nodes.value).to.equal('something');
    });

    it('must have the right elements after appending a second element.', function() {
      const list = new InspectableList();
      list.append('something');

      list.append('something else');

      expect(list.nodes).not.to.be.null;
      expect(list.nodes.value).to.equal('something');
      expect(list.nodes.next.value).to.equal('something else');
    });
  });

  describe('push', function() {
    it('must push a node onto an empty list', function() {
      const list = new InspectableList();

      list.push('something');

      expect(list.isEmpty()).to.be.false;
      expect(list.nodes).not.to.be.null;
      expect(list.nodes.value).to.equal('something');
    });

    it('must have the right elements after pushing a second element.', function() {
      const list = new InspectableList();
      list.push('a');

      list.push('b');

      expect(list.nodes).not.to.be.null;
      expect(list.nodes.value).to.equal('b');
      expect(list.nodes.next.value).to.equal('a');
    });
  });

  describe('first', function() {
    it('must be null for an empty list', function() {
      const list = new LinkedList();
      expect(list.first()).to.be.null;
    });

    it('must be the correct value for a list with one element', function() {
      const list = new LinkedList();
      list.append('a');
      expect(list.first()).to.equal('a');
    });

    it('must be the correct value for a list with two elements', function() {
      const list = new LinkedList();
      list.append('a');
      list.append('b');
      expect(list.first()).to.equal('a');
    });
  });

  describe('last', function() {
    it('must be null for an empty list', function() {
      const list = new LinkedList();
      expect(list.last()).to.be.null;
    });

    it('must be the correct value for a list with one element', function() {
      const list = new LinkedList();
      list.append('a');
      expect(list.last()).to.equal('a');
    });

    it('must be the correct value for a list with two elements', function() {
      const list = new LinkedList();
      list.append('a');
      list.append('b');
      expect(list.last()).to.equal('b');
    });
  });

  describe('length', function() {
    it('must be 0 for an empty list', function() {
      const list = new LinkedList();
      expect(list.length()).to.equal(0);
    });

    it('must be the correct value for a list with one element', function() {
      const list = new LinkedList();
      list.append('a');
      expect(list.length()).to.equal(1);
    });

    it('must be the correct value for a list with two elements', function() {
      const list = new LinkedList();
      list.append('a');
      list.append('b');
      expect(list.length()).to.equal(2);
    });
  });
});
