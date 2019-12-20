function uniteUnique(...arr) {
    let ans = [];
    for(let i=0;i<arr.length;i++) {
        // console.log(arr[i]);
        for(let j=0;j<arr[i].length;j++) {
            if(ans.indexOf(arr[i][j]) == -1) {
                ans.push(arr[i][j]);
            }
        }
    }
    return ans;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
