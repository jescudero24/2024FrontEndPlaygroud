function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

// CommonJS module export (primera forma)
module.exports = { sum, sub, mul, div };

// CommonJS module export (segunda forma)
module.exports = {
  sum: function sum(a, b) {
    return a + b;
  },
  sub: function sub(a, b) {
    return a + b;
  },
  mul: function mul(a, b) {
    return a * b ;
  },

  div: function div(a, b) {
    return a / b;
  },
};
