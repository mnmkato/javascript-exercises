const ftoc = function(temp) {
  result = (temp-32)*5/9
  return Math.round(result*10)/10
};

const ctof = function(temp) {
  let result = Math.round((temp*1.8+32)*10)/10
  return result
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
