function checkCashRegister(price, cash, cid) {
    var change;
    // Here is your change, ma'am.
    let unites = {
        "PENNY": 0.01, 
        "NICKEL": 0.05, 
        "DIME": 0.1, 
        "QUARTER": 0.25, 
        "ONE": 1, 
        "FIVE": 5, 
        "TEN": 10, 
        "TWENTY": 20, 
        "ONE HUNDRED": 100
    }

    function round_2(x) {
        return Math.round(x * 100) / 100;
    }
    cid.sort((a, b) => {
        unites[a[0]] - unites[b[0]]; 
    });
    let ans = [];
    let diff = cash - price;
    for(let i=cid.length - 1 ;i >= 0; i--) {
        let q1 = Math.floor(cid[i][1]/unites[cid[i][0]]);
        let q2 = Math.floor(diff/unites[cid[i][0]]);
        let q = Math.min(q1, q2);
        ans.push([cid[i][0], (q*1.0)*unites[cid[i][0]]]);
        if(q > 0) {
            if(diff == 0) break;
            else diff -= (q*1.0)*unites[cid[i][0]];

            diff = round_2(diff);
        }
    }
    ans.sort((a, b)=> {
        return a[1] - b[1];
    });
    //reverse the array so that will be sorted in descending order
    let n = ans.length;
    for(let i=0;i<Math.floor(n/2);i++) {
        let tmp = ans[i];
        ans[i] = ans[n-1-i];
        ans[n-1-i] = tmp;
    }
    
    // check if ans and ci are the same
    let areSame = true;
    for(let e of cid) {
        for(let a of ans) {
            if(e[0] == a[0] && e[1] != a[1]) {
                areSame = false;
                break;
            }
        }
    }

    // there is no enough mony in the cash
    if(diff != 0) ans = [];
    let tmp = [];
    if(!areSame) {
        // we should remove currencies with remain value == 0
        for(let a of ans) {
            if(a[1] != 0.0) {
                tmp.push(a);
            }
        }
        ans = tmp;
    }

    return {
        status: (diff != 0 ? "INSUFFICIENT_FUNDS" : (areSame ? "CLOSED":"OPEN")),
        change: ans
    }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(
    checkCashRegister(
        3.26, 
        100, 
        [
            ["PENNY", 1.01], 
            ["NICKEL", 2.05], 
            ["DIME", 3.1], 
            ["QUARTER", 4.25], 
            ["ONE", 90], 
            ["FIVE", 55], 
            ["TEN", 20], 
            ["TWENTY", 60], 
            ["ONE HUNDRED", 100]
        ]
    )
)
