function convertToRoman(num) {
    let roman = {
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
        if(a == 5) return roman[a * base];
        else if (a>5) {
            if(a == 9) return roman[base] + roman[10*base];
            else return roman[5 * base] + roman[base].repeat(a - 5);
        }
        else{
            if(a == 4) return roman[base] + roman[5 * base];
            else return roman[base].repeat(a);
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
