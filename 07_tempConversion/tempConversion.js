const ftoc = function(temp) {
  result = (temp-32)*5/9
  return Math.round(result*10)/10
};

const ctof = function(temp) {
  result = temp*1.8+32
  return Math.round(result*10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
