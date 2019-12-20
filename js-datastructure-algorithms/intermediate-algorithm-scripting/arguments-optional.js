function addTogether(...arg) {
    function notNum(x){
        return typeof x !== "number";
    }
    if(arg.length === 2){
        if(notNum(arg[0]) || notNum(arg[1])){
            return undefined;
        }
        return arg[0] + arg[1];
    }
    else if(arg.length == 1){
        if(notNum(arg[0])){
            return undefined;
        }
        else{
            return function(c) {
                if(notNum(c)){
                    return undefined;
                }
                return arg[0] + c;
            }
        }
    }
    return undefined;
}


console.log(
    addTogether(2)(3)
)

