const ftoc = function(x) {
  let f = x;
  let temp = (f - 32) * (5 / 9);
  let final = Math.round(temp * 10) / 10;

  return final;
};

const ctof = function(x) {
  let c = x;
  let temp = (c * (9 / 5)) + 32;
  let final = Math.round(temp * 10) / 10;

  return final;
};

console.log(ftoc(100));
console.log(ctof(39));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
