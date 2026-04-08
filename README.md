# JavaScript Assignment
# Question 1 – Digit Gatekeeper

# Approach / Logic
1. Loop through all numbers from L to R.
2. Check if the number is divisible by K.
3. Extract digits and make sure no digit is 0.
4. Calculate the sum of digits.
5. Check if the sum is prime.
6. Count numbers that satisfy all conditions.

# Time Complexity
O((R − L) × d)
where `d` is the number of digits.

# Space Complexity
O(1) (constant extra space)


# Question 2 – Roll-Seed Lock

# Approach / Logic
1. Start with number N.
2. Perform the transformation 3 times:
   - Even → `num = num / 2 + seed`
   - Odd → `num = num * 3 - seed`
3. Check if the final result is a 3-digit number.
4. Extract the middle digit and compare it with the seed.

# Time Complexity
O(1) (fixed number of operations)

# Space Complexity
O(1)

# Question 3 – Mirror Corridor


# Approach / Logic
1. Start checking numbers from N onward.
2. For each number:
   - Check if it is a palindrome.
   - Check if it is divisible by K.
3. Stop when the first valid number is found.

# Time Complexity
O(x × d)  
where `x` is the number of values checked and `d` is the digit count.

# Space Complexity
O(1)

# Question 4 – Fare Calculator

# Approach / Logic
1. Calculate base fare: `base + 7 × distance`.
2. Add 20 if `minutesLate > 15`.
3. Add 10% extra if `distance > 10`.
4. Adjust fare depending on seed (odd/even).
5. Round the result to the nearest multiple of 5.

# Time Complexity
O(1)

# Space Complexity
O(1)


# Question 5 – Skipping Numbers

# Approach / Logic
1. Set divisor as `seed + 2`.
2. Start adding numbers from 1 onwards.
3. Skip numbers divisible by the divisor.
4. Continue until the sum becomes ≥ N.

# Time Complexity
O(m)  
where `m` is the number of values checked.

# Space Complexity
O(1)

# Question 6 – Contest Score Judge

# Approach / Logic
1. Calculate score:
   - Correct = +3
   - Partial = +1
   - Wrong = −2
2. If score becomes negative, set it to 0.
3. If total answers > 50, apply −10 penalty.
4. Check if score ≥ 60 to determine PASS/FAIL.

# Time Complexity
O(1)

# Space Complexity
O(1)

