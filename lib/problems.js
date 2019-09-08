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
        if (stack.pop() !== '(') {
          return false;
        }
        break;
      case '}':
        if (stack.pop() !== '{') {
          return false;
        }
        break;
      case ']':
        if (stack.pop() !== '[') {
          return false;
        }
        break;
    }
  }

  return stack.isEmpty();
}

module.exports = {
  balanced
};
