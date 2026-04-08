let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

function isPalindrome(n) {
    let s = n.toString();
    return s === s.split("").reverse().join("");
}

let ans = -1;

for (let x = 0; x <= 100000; x++) {
    let val = N + x;

    if (isPalindrome(val) && val % K === 0) {
        ans = x;
        break;
    }
}

alert(ans);