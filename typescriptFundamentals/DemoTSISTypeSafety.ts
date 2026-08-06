/**
 * Demo: TypeScript Type Safety vs JavaScript Dynamic Typing
 *
 * This file demonstrates why TypeScript is called a "statically typed" language
 * and how it provides "type safety" compared to JavaScript's "dynamic typing".
 */

// =============================================================================
// 1. JavaScript: Dynamically Typed
// =============================================================================
/**
 * In JavaScript, types are associated with values, not variables.
 * A variable can hold a number at one moment and a string the next.
 * Type checking happens at RUNTIME.
 */

function jsAdd(a: any, b: any) {
    return a + b;
}

console.log("--- JavaScript Dynamic Typing ---");
console.log(jsAdd(10, 20));       // 30 (Expected)
console.log(jsAdd("10", "20"));   // "1020" (Wait, what? JS performed string concatenation)
console.log(jsAdd(10, "20"));     // "1020" (Implicit type conversion/coercion)

// This is the danger: JS won't tell you there's a problem until the code actually runs.
// If jsAdd was intended only for numbers, the "1020" result is a bug that might
// go unnoticed until it causes a failure elsewhere in the app.


// =============================================================================
// 2. TypeScript: Statically Typed
// =============================================================================
/**
 * In TypeScript, types are associated with variables/parameters.
 * You declare the type upfront, and the TypeScript compiler checks it at COMPILE TIME.
 * If the types don't match, the code won't even compile.
 */

function tsAdd(a: number, b: number): number {
    return a + b;
}

console.log("\n--- TypeScript Static Typing ---");
console.log(tsAdd(10, 20)); // 30

// UNCOMMENT the lines below to see TypeScript's type safety in action:
// tsAdd("10", "20"); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
// tsAdd(10, "20");   // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.


// =============================================================================
// 3. Type Safety Examples
// =============================================================================

interface User {
    id: number;
    name: string;
    email: string;
}

function sendWelcomeEmail(user: User) {
    console.log(`Sending email to ${user.name} at ${user.email}...`);
}

const validUser: User = {
    id: 1,
    name: "Saksham",
    email: "saksham@example.com"
};

const invalidUser = {
    id: 1,
    name: "Unknown",
    // email is missing!
};

console.log("\n--- Type Safety Demo ---");
sendWelcomeEmail(validUser); // Works perfectly.

// UNCOMMENT the line below to see how TS prevents runtime crashes:
// sendWelcomeEmail(invalidUser); // ERROR: Property 'email' is missing in type '{ id: number; name: string; }' but required in type 'User'.


// =============================================================================
// SUMMARY: Why is this important?
// =============================================================================
/**
 * | Feature            | JavaScript (Dynamic)           | TypeScript (Static)              |
 * |--------------------|---------------------------------|-----------------------------------|
 * | Type Association   | Associated with values          | Associated with variables        |
 * | Checking Time      | Runtime (when code executes)    | Compile-time (before execution)   |
 * | Error Detection    | Found by the user/tester        | Found by the developer (IDE/CLI) |
 * | Refactoring        | Risky (easy to break things)    | Safe (compiler flags all errors) |
 * | Tooling            | Basic autocomplete             | Powerful IntelliSense & Navigation|
 *
 * TypeScript doesn't "change" how JS runs (it compiles down to JS), but it acts
 * as a powerful safety net that catches bugs early in the development cycle.
 */