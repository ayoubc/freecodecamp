function smallestCommons(arr) {
    function gcd(a, b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
    arr.sort((a, b) => {
        return a - b;
    });
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    let ans = arr[0];
    for(let i=arr[0]+1; i<= arr[1]; i++) {
        ans = lcm(ans, i);
    }
    //return gcd;
    return ans;
}


console.log(smallestCommons([1, 5]));
