const Stack = require('../lib/stack');

function balanced(input) {
  if (!input) {
    return true;
  }

  const stack = new Stack();

  for(char of input) {
    if (char === '(' ||
        char === '{' ||
        char === '[') {
      stack.push(char);
    } else if(char === ')') {
      return stack.pop() === '(';
    } else if (char === '}') {
      return stack.pop() === '{';
    } else if (char === ']') {
      return stack.pop() === '[';
    }
  }
  

  return false;
}

module.exports = {
  balanced
};
