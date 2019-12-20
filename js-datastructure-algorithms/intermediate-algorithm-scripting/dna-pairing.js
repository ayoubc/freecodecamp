function pairElement(str) {
    const pairs = {
        "A": "T",
        "T": "A",
        "G": "C",
        "C": "G"
    }
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push([str[i], pairs[str[i]]]);
    }
    return arr;
}

console.log(pairElement("GCG"));
