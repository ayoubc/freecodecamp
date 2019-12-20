function sumFibs(num) {
    let a=1,b=1, tmp, sum=1;
    while(b<=num) {
        if(b %2 != 0){
            sum += b;
        }
        tmp = b;
        b = a+b;
        a = tmp;
    }
    return sum;
}

console.log(sumFibs(75025));