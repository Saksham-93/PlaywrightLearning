/**
 * TypeScript Fundamentals: While Loop Concepts
 *
 * A while loop repeats a block of code as long as a specified condition evaluates to true.
 * It is an "entry-controlled" loop because the condition is checked before the body is executed.
 */

// ==========================================
// 01. The Basic Mechanism
// ==========================================
console.log("--- 01. Basic While Loop (1 to 5) ---");

let num: number = 1; // Initialization

while (num <= 5) { // Condition
    console.log(`Number: ${num}`);
    num++; // Update: Critical to prevent infinite loops
}

console.log("\n");

// ==========================================
// 02. Logic & Filtering (Even Numbers)
// ==========================================
console.log("--- 02. Filtering Even Numbers (1 to 10) ---");

let i: number = 1;

while (i <= 10) {
    // Use modulo operator (%) to check for even numbers
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
    i++; // Increment happens every iteration, regardless of the if-block
}

console.log("\n");

// ==========================================
// 03. Directional Control (Descending)
// ==========================================
console.log("--- 03. Descending Order (10 to 1) ---");

let countdown: number = 10;

while (countdown >= 1) {
    console.log(`T-minus: ${countdown}`);
    countdown--; // Decrementing the counter
}

console.log("\n");

// ==========================================
// 04. The Danger Zone: Infinite Loops
// ==========================================
/*
  WARNING: The code below is commented out because it creates an Infinite Loop.
  An infinite loop occurs when the condition never becomes false,
  causing the program to freeze or crash.

  let infiniteNum: number = 1;
  while (infiniteNum <= 5) {
      console.log("This will run forever because infiniteNum is never incremented!");
      // Missing: infiniteNum++;
  }
*/
console.log("--- 04. Infinite Loop Example (See comments in code for explanation) ---");
