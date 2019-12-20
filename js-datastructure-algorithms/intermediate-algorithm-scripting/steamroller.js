function steamrollArray(arr) {
    // I'm a steamroller, baby
    let newArr = [];
    function getOneValue(arrayObj){
        for(let e of arrayObj){
            if(e instanceof Array){
                getOneValue(e);
            }
            else{
                newArr.push(e);
            }
        }
    }

    getOneValue(arr);
    return newArr;
}

console.log(
steamrollArray([1, {}, [3, [[4]]]])
)
