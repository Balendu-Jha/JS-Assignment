let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let count = 0;

for (let x = L; x <= R; x++) {
    if (x % K !== 0) continue;

    let temp = x;
    let sum = 0;
    let valid = true;

    while (temp > 0) {
        let d = temp % 10;
        if (d === 0) {
            valid = false;
            break;
        }
        sum += d;
        temp = Math.floor(temp / 10);
    }

    if (valid && isPrime(sum)) count++;
}

alert(count);
