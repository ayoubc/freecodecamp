function rot13(str) {
    let arr = str.split('');
    let asciiArr = arr.map(char => {
        if(/[A-Z]/.test(char)){
            return (char.charCodeAt(0) - 'A'.charCodeAt(0) + 13)%26 + 'A'.charCodeAt(0);
        }
        else if(/[a-z]/.test(char)){
            return (char.charCodeAt(0) - 'a'.charCodeAt(0) + 13)%26 + 'a'.charCodeAt(0);
        }
        else{
            return char.charCodeAt(0);
        }
    })
    return String.fromCharCode(...asciiArr);
}

// Change the inputs below to test
console.log(
rot13("SERR PBQR PNZC")
)
