function convertToRoman(num) {
    let romain = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    }

    function get(a, n){
        let base = Math.pow(10, n); 
        if(a == 5) return romain[a * base];
        else if (a>5) {
            if(a == 9) return romain[base] + romain[10*base];
            else return romain[5 * base] + romain[base].repeat(a - 5);
        }
        else{
            if(a == 4) return romain[base] + romain[5 * base];
            else return romain[base].repeat(a);
        }
    }

    let str = num.toString();
    let l = str.length;
    let ans = "";
    for(let i=0;i<l; i++) {
        ans += get(+str[i], l-1-i);
    }
    return ans;
}

console.log(convertToRoman(97));
