const sumAll = function(x,y) {
    let result = 0
    if(x<0||y<0||typeof(x)!="number"||typeof(y)!="number"){
        return "ERROR"
    }

    if (x>y) {
        for (i=y;i<=x;i++){
        result=result+i
        }
    } else if(x<y){
        for (i=x;i<=y;i++){
        result=result+i
    }
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
