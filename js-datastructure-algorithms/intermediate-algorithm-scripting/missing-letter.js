function fearNotLetter(str) {
    const all = "abcdefghijklmnopqrstuvwxyz";
    let ans;
    for (let i = 1; i < str.length; i++) {
        if (str[i].charCodeAt(0) !== str[i - 1].charCodeAt(0) + 1) {
            ans = all[str[i - 1].charCodeAt(0) + 1 - 97];
        }
    }
    return ans;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));