function balanced(input) {
  if (!input) {
    return true;
  }

  if(input[0] === '(') {
    return input[1] === ')';
  }

  return false;
}

module.exports = {
  balanced
};
