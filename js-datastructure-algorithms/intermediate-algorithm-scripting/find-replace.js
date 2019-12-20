function myReplace(str, before, after) {
    function isUpper(word) {
        return /[A-Z]/.test(word[0]);
    }

    function toUpper(word) {
        if(isUpper(before)) {
            if(!isUpper(word)) {
                return word[0].toUpperCase() + word.slice(1);
            }
            return word;
        }
        return word;
    }
    after = toUpper(after);
    // console.log(after);
    // const arr = str.match(new RegExp(before));
    // console.log(arr);
    return str.replace(before, after);
}

const ans = myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
console.log(ans);