/**
 * TypeScript Increment and Decrement Operators Demo
 * -----------------------------------------------------------------------------
 * This file provides a detailed demonstration of the increment (++)
 * and decrement (--) operators, specifically focusing on the
 * difference between Pre-fix and Post-fix operations.
 *
 * Run this file using: tsx IncrementDecrementOperator.ts
 */

// =============================================================================
// 1. UNDERSTANDING THE CONCEPT
// =============================================================================
/**
 * PREFIX (++x, --x):
 * "Update first, then use."
 * The value of the variable is changed immediately, and the new value is used in the expression.
 *
 * POSTFIX (x++, x--):
 * "Use first, then update."
 * The current value is used in the expression first, and then the variable is updated.
 */

console.log("--- STARTING INCREMENT/DECREMENT DEMO ---\n");

// =============================================================================
// 2. INCREMENT OPERATORS (++)
// =============================================================================
console.log("--- 1. INCREMENT OPERATORS ---");

// --- Post-Increment (x++) ---
let postInc = 10;
console.log(`Initial Value: ${postInc}`);
let resultPostInc = postInc++;
console.log(`Post-Increment Result (resultPostInc): ${resultPostInc}`); // Should be 10
console.log(`Value after Post-Increment (postInc): ${postInc}`);        // Should be 11
console.log("Observation: In post-increment, the value is returned first, then incremented.");

console.log("--------------------------------------------------");

// --- Pre-Increment (++x) ---
let preInc = 10;
console.log(`Initial Value: ${preInc}`);
let resultPreInc = ++preInc;
console.log(`Pre-Increment Result (resultPreInc): ${resultPreInc}`);   // Should be 11
console.log(`Value after Pre-Increment (preInc): ${preInc}`);         // Should be 11
console.log("Observation: In pre-increment, the value is incremented first, then returned.");

console.log("\n");

// =============================================================================
// 3. DECREMENT OPERATORS (--)
// =============================================================================
console.log("--- 2. DECREMENT OPERATORS ---");

// --- Post-Decrement (x--) ---
let postDec = 20;
console.log(`Initial Value: ${postDec}`);
let resultPostDec = postDec--;
console.log(`Post-Decrement Result (resultPostDec): ${resultPostDec}`); // Should be 20
console.log(`Value after Post-Decrement (postDec): ${postDec}`);        // Should be 19
console.log("Observation: Value is returned first, then decremented.");

console.log("--------------------------------------------------");

// --- Pre-Decrement (--x) ---
let preDec = 20;
console.log(`Initial Value: ${preDec}`);
let resultPreDec = --preDec;
console.log(`Pre-Decrement Result (resultPreDec): ${resultPreDec}`);   // Should be 19
console.log(`Value after Pre-Decrement (preDec): ${preDec}`);         // Should be 19
console.log("Observation: Value is decremented first, then returned.");

console.log("\n");

// =============================================================================
// 4. COMPARISON TABLE (FOR QUICK REFERENCE)
// =============================================================================
/**
 * | Operator | Name             | Process                      | Result of Expression | Final Var Value |
 * |----------|------------------|------------------------------|-----------------------|-----------------|
 * | ++x      | Pre-Increment     | Increment -> Then Return       | New Value             | Incremented     |
 * | x++      | Post-Increment    | Return -> Then Increment      | Old Value             | Incremented     |
 * | --x      | Pre-Decrement     | Decrement -> Then Return      | New Value             | Decremented     |
 * | x--      | Post-Decrement    | Return -> Then Decrement       | Old Value             | Decremented     |
 */

console.log("--- DEMO COMPLETED SUCCESSFULLY ---");
