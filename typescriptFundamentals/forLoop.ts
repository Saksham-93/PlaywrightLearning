/**
 * TypeScript Fundamentals: The For Loop
 *
 * The 'for' loop is the most common loop used when you know EXACTLY how many times
 * you want the code to run. It combines initialization, condition, and iteration
 * all into one single line.
 *
 * Syntax: for (initialization; condition; iteration) { ... }
 */

// =============================================================================
// 01. The Basic Mechanism
// =============================================================================
console.log("--- 01. Basic For Loop (1 to 10) ---");

// Here, i is declared, checked, and incremented all in one line.
for (let i: number = 1; i <= 10; i++) {
    console.log(`Iteration: ${i}`);
}

console.log("\n");

// =============================================================================
// 02. Custom Stepping (Even Numbers)
// =============================================================================
console.log("--- 02. Custom Step (Even numbers 2 to 10) ---");

// Instead of i++, we can use i += 2 to skip numbers
for (let i: number = 2; i <= 10; i += 2) {
    console.log(`Even Number: ${i}`);
}

console.log("\n");

// =============================================================================
// 03. Counting Backwards
// =============================================================================
console.log("--- 03. Descending For Loop (10 to 1) ---");

// Start at 10, run while i is >= 1, and decrement i each time
for (let i: number = 10; i >= 1; i--) {
    console.log(`Countdown: ${i}`);
}

console.log("\n");

// =============================================================================
// 04. The "Semicolon Trap" (Common Bug)
// =============================================================================
console.log("--- 04. The Semicolon Trap ---");

let trapResult: number = 0;
// ⚠️ DANGER: Notice the semicolon at the end of the for line!
for (let i = 1; i <= 5; i++);
{
    // Because of the semicolon, the loop does NOTHING 5 times.
    // This block is treated as a separate block of code that runs only ONCE.
    trapResult = 5;
}
console.log(`The trap result is: ${trapResult} (The loop didn't actually run this block!)`);

console.log("\n");

// =============================================================================
// 05. When to use 'for' vs 'while'
// =============================================================================
/*

 1. Use a 'for' loop when:
    - You have a fixed starting and ending point.
    - You know the exact number of iterations (e.g., "Run this 10 times").
    - You are iterating through an array or a list.

 2. Use a 'while' loop when:
    - The number of iterations is UNKNOWN.
    - The loop should run until a certain condition changes (e.g., "Run until user clicks stop").
    - The condition depends on external factors (API response, user input).

*/

// =============================================================================
// SUMMARY: For Loop Anatomy
// =============================================================================
/*
 [ Initialization ] ; [ Condition ] ; [ Iteration ]
        |                  |              |
  Set starting point  Keep running if   Update variable
  (e.g., let i = 0)    this is true      (e.g., i++)
*/
