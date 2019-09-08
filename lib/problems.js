const Stack = require('../lib/stack');

function balanced(input) {
  if (!input) {
    return true;
  }

  const stack = new Stack();

  for(char of input) {
    switch(char) {
      case '(':
      case '{':
      case '[':
        stack.push(char);
        break;
      case ')':
        return stack.pop() === '(';
      case '}':
        return stack.pop() === '{';
      case ']':
        return stack.pop() === '[';
    }
  }
  

  return false;
}

module.exports = {
  balanced
};
