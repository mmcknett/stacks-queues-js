const expect = require('chai').expect;
const Stack = require('../lib/stack.js');

describe('Stack', function() {
  describe('constructor', function() {
    it('is empty when first created.', function() {
      const stack = new Stack();
      expect(stack.isEmpty()).to.be.true;
    });
  });

  describe('push', function() {
    it.skip('is not empty after pushing an object.', function() {
      const stack = new Stack();
    });
  });
});