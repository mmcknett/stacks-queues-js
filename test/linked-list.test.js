const LinkedList = require('../lib/linked-list.js');
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

  describe('add_last', function() {
    it('must add_last a node onto an empty list', function() {
      const list = new InspectableList();

      list.add_last('something');

      expect(list.isEmpty()).to.be.false;
      expect(list.nodes).not.to.be.null;
      expect(list.nodes.value).to.equal('something');
    });

    it('must have the right elements after appending a second element.', function() {
      const list = new InspectableList();
      list.add_last('something');

      list.add_last('something else');

      expect(list.nodes).not.to.be.null;
      expect(list.nodes.value).to.equal('something');
      expect(list.nodes.next.value).to.equal('something else');
    });
  });

  describe('add_first', function() {
    it('must push a node onto an empty list', function() {
      const list = new InspectableList();

      list.add_first('something');

      expect(list.isEmpty()).to.be.false;
      expect(list.nodes).not.to.be.null;
      expect(list.nodes.value).to.equal('something');
    });

    it('must have the right elements after pushing a second element.', function() {
      const list = new InspectableList();
      list.add_first('a');

      list.add_first('b');

      expect(list.nodes).not.to.be.null;
      expect(list.nodes.value).to.equal('b');
      expect(list.nodes.next.value).to.equal('a');
    });
  });

  describe('remove_first', function() {
    it('is a noop if the list is empty', function() {
      const list = new LinkedList();

      list.remove_first();

      expect(list.isEmpty()).to.be.true;
    });

    it('Removes the only value in the list', function () {
      const list = new LinkedList();
      list.add_first('a');

      list.remove_first('a');

      expect(list.isEmpty()).to.be.true;
    });

    it('removes the first value in the list', function() {
      const list = new InspectableList();
      list.add_last('a');
      list.add_last('b');
      list.add_last('c');

      list.remove_first();

      expect(list.isEmpty()).to.be.false;
      expect(list.nodes.value).to.equal('b');
      expect(list.nodes.next.value).to.equal('c');
    });
  })

  describe('delete', function() {
    it('is a noop if the list is empty', function() {
      const list = new LinkedList();

      list.delete('a');

      expect(list.isEmpty()).to.be.true;
    });

    it('removes the only value in the list', function() {
      const list = new LinkedList();
      list.add_first('a');

      list.delete('a');

      expect(list.isEmpty()).to.be.true;
    });

    it('removes the middle value in the list', function() {
      const list = new InspectableList();
      list.add_last('a');
      list.add_last('b');
      list.add_last('c');

      list.delete('b');

      expect(list.isEmpty()).to.be.false;
      expect(list.nodes.value).to.equal('a');
      expect(list.nodes.next.value).to.equal('c');
    });

    it('removes the first value in the list', function() {
      const list = new InspectableList();
      list.add_last('a');
      list.add_last('b');
      list.add_last('c');

      list.delete('a');

      expect(list.isEmpty()).to.be.false;
      expect(list.nodes.value).to.equal('b');
      expect(list.nodes.next.value).to.equal('c');
    });

    it('removes the third value in the list', function() {
      const list = new InspectableList();
      list.add_last('a');
      list.add_last('b');
      list.add_last('c');

      list.delete('c');

      expect(list.isEmpty()).to.be.false;
      expect(list.nodes.value).to.equal('a');
      expect(list.nodes.next.value).to.equal('b');
    });

    it('removes nothing if the vlaue is not present in the list', function() {
      const list = new InspectableList();
      list.add_last('a');
      list.add_last('b');
      list.add_last('c');

      list.delete('d');

      expect(list.isEmpty()).to.be.false;
      expect(list.nodes.value).to.equal('a');
      expect(list.nodes.next.value).to.equal('b');
      expect(list.nodes.next.next.value).to.equal('c');
    });
  });

  describe('first', function() {
    it('must be null for an empty list', function() {
      const list = new LinkedList();
      expect(list.first()).to.be.null;
    });

    it('must be the correct value for a list with one element', function() {
      const list = new LinkedList();
      list.add_last('a');
      expect(list.first()).to.equal('a');
    });

    it('must be the correct value for a list with two elements', function() {
      const list = new LinkedList();
      list.add_last('a');
      list.add_last('b');
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
      list.add_last('a');
      expect(list.last()).to.equal('a');
    });

    it('must be the correct value for a list with two elements', function() {
      const list = new LinkedList();
      list.add_last('a');
      list.add_last('b');
      expect(list.last()).to.equal('b');
    });
  });

  describe('length', function() {
    it('must be 0 for an empty list', function() {
      const list = new LinkedList();
      expect(list.length()).to.equal(0);
    });

    it('must be the correct value for a list with 1 element', function() {
      const list = new LinkedList();
      list.add_last('a');
      expect(list.length()).to.equal(1);
    });

    it('must be the correct value for a list with 2 elements', function() {
      const list = new LinkedList();
      list.add_last('a');
      list.add_last('b');
      expect(list.length()).to.equal(2);
    });

    it('must be the correct value for a list with 5 elements', function() {
      const list = new LinkedList();
      list.add_last('a');
      list.add_last('b');
      list.add_last('c');
      list.add_last('d');
      list.add_last('e');
      expect(list.length()).to.equal(5);
    });
  });

  describe('toString', function() {
    it('must print "[]" if the list is empty', function () {
      const list = new LinkedList();
      const out = list.toString();
      expect(out).to.equal('[]');
    });

    it('must print a single value if the list has a single value', function () {
      const list = new LinkedList();
      list.add_last('a');

      const out = list.toString();

      expect(out).to.equal('[a]');
    });

    it('must print all values, comma-separated, if the list has multiple values', function () {
      const list = new LinkedList();
      list.add_last('a');
      list.add_last('b');
      list.add_last('c');

      const out = list.toString();

      expect(out).to.equal('[a, b, c]');
    });
  });
});
