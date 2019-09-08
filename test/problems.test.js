const expect = require('chai').expect;
const { balanced } = require('../lib/problems');

describe("Test wave 3 problems", function() {
  describe("balanced", function() {
    it("regards an empty string as balanced", function() {
      expect(balanced('')).to.be.true;
    });

    it.skip("Given balanced strings it should return true", function() {
      expect(balanced('(({}))')).to.be.true;
    });

    it.skip("will return false for an unbalanced set of parens", function() {
      expect(balanced('(()')).to.be.false;
      expect(balanced('(()}')).to.be.false;
      expect(balanced('([]]')).to.be.false;
    });

    it.skip("also works for {} and []", function() {
      expect(balanced('[]')).to.be.true;
      expect(balanced('{}')).to.be.true;
    });
  });
});
