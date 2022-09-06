const removeFromArray = function(arry,var1) {
   
   for(let i = 1; i< arguments.length; i++){
    let index = arry.indexOf(arguments[i])
    if(index>-1){
        arry.splice(index,1)
    }
   }
   return arry
};

// Do not edit below this line
module.exports = removeFromArray;
