const expect = require('chai').expect;
const Stack = require('../lib/stack.js');

describe('Stack', function() {
  describe('constructor', function() {
    it('is empty when first created.', function() {
      const stack = new Stack();
      expect(stack.isEmpty()).to.be.true;
    });
  });

  describe('push & pop', function() {
    it('is not empty after pushing an object.', function() {
      const stack = new Stack();
      stack.push('a');
      expect(stack.isEmpty()).to.be.false;
    });

    it('returns null when popping an empty stack', function () {
      const stack = new Stack();
      const value = stack.pop();
      expect(value).to.be.null;
    })

    it('returns the value pushed after popping.', function() {
      const stack = new Stack();
      stack.push('a');
      const value = stack.pop();
      expect(value).to.equal('a');
    });

    it('is empty after popping a single pushed object.', function() {
      const stack = new Stack();
      stack.push('a');
      stack.pop();
      expect(stack.isEmpty()).to.be.true;
    });

    it('returns expected values after popping several objects.', function() {
      const stack = new Stack();

      stack.push('a');
      stack.push('b');
      stack.push('c');
      const expectC = stack.pop();
      const expectB = stack.pop();
      const expectA = stack.pop();

      expect(expectA).to.equal('a');
      expect(expectB).to.equal('b');
      expect(expectC).to.equal('c');
    });

    it('prints as expected after pushing several objects.', function() {
      const stack = new Stack();

      stack.push('fleas');
      stack.push('has');
      stack.push('dog');
      stack.push('my');

      expect(stack.toString()).to.equal('[my, dog, has, fleas]');
    })
  });
});