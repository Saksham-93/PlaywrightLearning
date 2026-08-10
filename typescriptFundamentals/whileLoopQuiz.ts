/**
 * TypeScript Practice: While Loop Challenges
 *
 * Instructions:
 * 1. Read the challenge description.
 * 2. Implement the logic inside the provided functions.
 * 3. Use 'while' loops specifically for these challenges.
 * 4. Test your functions by calling them at the bottom of the file.
 */

// =============================================================================
// CHALLENGE 1: Sum of Natural Numbers
// Goal: Write a function that takes a number 'n' and returns the sum of all
// natural numbers from 1 up to 'n'.
// Example: sumOfNaturalNumbers(5) => 1 + 2 + 3 + 4 + 5 = 15
// =============================================================================
function sumOfNaturalNumbers(n: number): number {
    // TODO: Implement using a while loop
    let sum:number = 0
    while(n>0)
    {
        sum = sum+n
        n--
    }
    return sum;
}

// =============================================================================
// CHALLENGE 2: The Factorial
// Goal: Write a function that calculates the factorial of a number 'n'.
// Factorial of n (n!) is the product of all positive integers less than or equal to n.
// Example: factorial(5) => 5 * 4 * 3 * 2 * 1 = 120
// =============================================================================
function calculateFactorial(n: number): number {
    // Start with 1 because multiplying by 0 would always result in 0
    let result: number = 1;
    let currentNum: number = n;

    while (currentNum > 1) {
        result *= currentNum; // Multiply result by the current number
        currentNum--;          // Move down to the next number (e.g., 5 -> 4 -> 3...)
    }

    return result;
}

// =============================================================================
// CHALLENGE 3: Number Reversal
// Goal: Write a function that takes an integer and returns it reversed.
// Example: reverseNumber(1234) => 4321
// Hint: Use the modulo (%) operator to get the last digit and
// Math.floor() to remove the last digit.
// =============================================================================
function reverseNumber(num: number): number {
    // TODO: Implement using a while loop
    return 0;
}

// =============================================================================
// CHALLENGE 4: Fibonacci Sequence
// Goal: Write a function that prints the first 'n' terms of the Fibonacci sequence.
// The sequence starts with 0, 1, and each subsequent number is the sum of
// the previous two.
// Example: printFibonacci(5) => 0, 1, 1, 2, 3
// =============================================================================
function printFibonacci(n: number): void {
    // TODO: Implement using a while loop
}

// =============================================================================
// CHALLENGE 5: Prime Number Check
// Goal: Write a function that returns true if a number is prime, and false otherwise.
// A prime number is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
// Example: isPrime(7) => true, isPrime(10) => false
// =============================================================================
function isPrime(n: number): boolean {
    // TODO: Implement using a while loop
    return false;
}

// =============================================================================
// TEST AREA: Call your functions here to verify they work!
// =============================================================================

console.log("Challenge 1 (Sum):", sumOfNaturalNumbers(5)); // Expected: 15
console.log("Challenge 2 (Factorial):", calculateFactorial(5)); // Expected: 120
console.log("Challenge 3 (Reverse):", reverseNumber(1234)); // Expected: 4321
console.log("Challenge 4 (Fibonacci):"); printFibonacci(5); // Expected: 0, 1, 1, 2, 3
console.log("Challenge 5 (Prime):", isPrime(7)); // Expected: true
console.log("Challenge 5 (Prime):", isPrime(10)); // Expected: false
