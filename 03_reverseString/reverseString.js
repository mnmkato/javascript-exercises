const reverseString = function(str) {
    let result = ""
    for(let i =1; i<=str.length;i++){
        result=result+str.charAt(str.length-i)
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
