function palindrome(str) {
    // Good luck!
    var charList = [];
    for (var i = 0; i < str.length; i++) {
        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
            charList.push(str[i].toLowerCase());
        }
        else if (str[i] >= '0' && str[i] <= '9') {
            charList.push(str[i]);
        }

    }
    //console.log(charList);
    var n = charList.length;
    for (var i = 0; i < n / 2; i++) {
        if (charList[i] !== charList[n - i - 1]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome("eye"));