const expect = require('chai').expect;
const { balanced } = require('../lib/problems');

describe("Test wave 3 problems", function() {
  describe("balanced", function() {
    it("regards an empty string as balanced", function() {
      expect(balanced('')).to.be.true;
    });

    it("returns true for open/close parentheses", function() {
      expect(balanced('()')).to.be.true;
    });

    it("returns true for open/close curly braces", function() {
      expect(balanced('{}')).to.be.true;
    });

    it("returns true for open/close square braces", function() {
      expect(balanced('[]')).to.be.true;
    });

    it("doesn't return true for closed then open parentheses", function() {
      expect(balanced(')(')).to.be.false;
      expect(balanced('}{')).to.be.false;
      expect(balanced('][')).to.be.false;
    });

    it("Given balanced strings it should return true", function() {
      expect(balanced('(({}))')).to.be.true;
      expect(balanced('{[{}{}]}')).to.be.true;
      expect(balanced('{{}{}}')).to.be.true;
    });

    it("will return false for an unbalanced set of parens", function() {
      expect(balanced('(()'), 'Case: \'(()\'').to.be.false;
      expect(balanced('(()}'), 'Case: \'(()}\'').to.be.false;
      expect(balanced('([]]'), 'Case: \'([]]\'').to.be.false;
      expect(balanced('())'), 'Case: \'())\'').to.be.false;
    });

    it("Handles sentences with balanced parens/braces", function() {
      const input = 'A statement (with parentheses [and maybe brackets]) should work. {reference?}';
      expect(balanced(input)).to.be.true;
    });

    it("Handles sentences with unbalanced parens/braces", function() {
      const input = 'A statement (with unbalanced parentheses [and brackets)] should not work. {reference?}';
      expect(balanced(input)).to.be.false;
    });
  });
});
