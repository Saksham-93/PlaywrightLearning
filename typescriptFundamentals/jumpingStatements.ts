/**
 * Jumping Statements in TypeScript
 *
 * Jumping statements are used to transfer the control of the program
 * from one point to another. They are most commonly used inside loops
 * to alter the flow of execution.
 *
 * Common jumping statements include:
 * 1. break: Terminates the loop or switch statement immediately.
 * 2. continue: Skips the current iteration and moves to the next one.
 * 3. return: Exits the current function.
 * 4. throw: Signals an exception.
 */

// --- 1. The 'break' Statement ---
console.log("--- Break Statement Example ---");
/**
 * The 'break' statement is used to exit a loop entirely
 * when a specific condition is met.
 */
for (let i: number = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking at i = 5...");
        break; // Exits the loop immediately
    }
    console.log(i);
}
// Output: 1, 2, 3, 4, Breaking at i = 5...


// --- 2. The 'continue' Statement ---
console.log("\n--- Continue Statement Example ---");
/**
 * The 'continue' statement skips the current iteration
 * and jumps to the next increment/condition check of the loop.
 */
for (let j: number = 1; j <= 5; j++) {
    if (j === 3) {
        console.log("Skipping j = 3...");
        continue; // Skips the rest of the loop body for j = 3
    }
    console.log(j);
}
// Output: 1, 2, Skipping j = 3..., 4, 5
