let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));

let num = N;

for (let i = 0; i < 3; i++) {
    if (num % 2 === 0) {
        num = num / 2 + seed;
    } else {
        num = num * 3 - seed;
    }
}

let ans = "NO";

if (num >= 100 && num <= 999) {
    let mid = Math.floor(num / 10) % 10;
    if (mid === seed) ans = "YES";
}

alert(ans + ", " + num);
