const Stack = require('../lib/stack');

function balanced(input) {
  if (!input) {
    return true;
  }

  const stack = new Stack();

  let i = 0;
  if (input[i] === '(' ||
      input[i] === '{' ||
      input[i] === '[') {
    stack.push(input[i]);
  }

  i = 1;
  if(input[i] === ')') {
    return stack.pop() === '(';
  } else if (input[i] === '}') {
    return stack.pop() === '{';
  } else if (input[i] === ']') {
    return stack.pop() === '[';
  }

  return false;
}

module.exports = {
  balanced
};
