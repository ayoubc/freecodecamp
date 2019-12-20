function sumPrimes(num) {

    function isPrime(x) {
        if(x == 2) return true;
        if(x %2 == 0) return false;
        for(let i=3;i*i<=x;i+=2){
            if(x%i==0) return false;
        }
        return true;
    }
    let sum = 0;
    for(let i=2;i<=num;i++){
        if(isPrime(i)) {
            sum += i;
        }
    }
    return sum;
    
}

console.log(sumPrimes(977));