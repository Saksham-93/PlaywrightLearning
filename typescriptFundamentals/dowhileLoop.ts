/**
 * TypeScript Fundamentals: The Do...While Loop
 *
 * Unlike the standard 'while' loop, the 'do...while' loop is an "exit-controlled" loop.
 * This means the body of the loop is executed FIRST, and then the condition is checked.
 *
 * Key characteristic: The loop will ALWAYS execute at least once,
 * regardless of whether the condition is true or false at the start.
 */

// =============================================================================
// 01. The Basic Mechanism
// =============================================================================
console.log("--- 01. Basic Do...While Loop (1 to 5) ---");

let num: number = 1;

do {
    console.log(`Counting: ${num}`);
    num++; // Update the counter
} while (num <= 5); // Condition checked AFTER the first run

console.log("\n");

// =============================================================================
// 02. The "Execute at Least Once" Difference
// =============================================================================
console.log("--- 02. While vs Do...While Comparison ---");

// Case A: Standard While Loop
let whileNum: number = 10;
console.log("While loop starting with 10 (condition: num < 5)...");
while (whileNum < 5) {
    console.log("This will NEVER print because 10 is not less than 5.");
    whileNum++;
}

// Case B: Do...While Loop
let doWhileNum: number = 10;
console.log("Do...While loop starting with 10 (condition: num < 5)...");
do {
    console.log(`This WILL print once, even though 10 is not less than 5! Current value: ${doWhileNum}`);
    doWhileNum++;
} while (doWhileNum < 5);

console.log("\n");

// =============================================================================
// 03. Real-World Scenario: User Input Simulation
// =============================================================================
// Do...While is perfect for menus or input prompts where you need to
// ask the user for something at least once before checking if they want to quit.

console.log("--- 03. Input Simulation ---");

let userChoice: string = "";
let attempts: number = 0;

// Simulate a loop that keeps asking for a secret code until it's correct
// In a real app, you'd use a prompt or input field here.
do {
    attempts++;
    // Simulating different inputs for demonstration
    if (attempts === 1) userChoice = "wrong_pass";
    else if (attempts === 2) userChoice = "almost_correct";
    else userChoice = "SECRET123";

    console.log(`Attempt ${attempts}: User entered "${userChoice}"`);

} while (userChoice !== "SECRET123");

console.log(`Access Granted! It took ${attempts} attempts.`);
console.log("\n");

// =============================================================================
// SUMMARY: While vs Do...While
// =============================================================================
/*
 | Feature          | while loop             | do...while loop        |
 |------------------|-----------------------|------------------------|
 | Control Type     | Entry-Controlled      | Exit-Controlled       |
 | Min. Executions  | 0                      | 1                      |
 | Condition Check  | Checked BEFORE body   | Checked AFTER body     |
 | Use Case         | When you might not run | When you must run once |
*/
