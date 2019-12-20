function convertHTML(str) {
    // &colon;&rpar;
    const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    }

    for(let char in entities) {
        let regex = new RegExp(char, "g");
        str = str.replace(regex, entities[char]);
    }
    //console.log(str)
    return str;
}

convertHTML("Sixty > twelve");
