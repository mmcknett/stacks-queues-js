const Stack = require('../lib/stack');

function balanced(input) {
  if (!input) {
    return true;
  }

  const stack = new Stack();
  stack.push(input[0]);

  const val = stack.pop();
  if(val === '(') {
    return input[1] === ')';
  } else if (val === '{') {
    return input[1] === '}';
  } else if (val === '[') {
    return input[1] === ']';
  }

  return false;
}

module.exports = {
  balanced
};
