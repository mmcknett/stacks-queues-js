const Stack = require('../lib/stack');

function balanced(input) {
  if (!input) {
    return true;
  }

  const stack = new Stack();
  stack.push(input[0]);

  if(stack.pop() === '(') {
    return input[1] === ')';
  }

  return false;
}

module.exports = {
  balanced
};
