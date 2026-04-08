let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));

let div = seed + 2;
let sum = 0;
let m = 0;

while (sum < N) {
    m++;
    if (m % div !== 0) {
        sum += m;
    }
}

alert("m = " + m + ", sum = " + sum);
