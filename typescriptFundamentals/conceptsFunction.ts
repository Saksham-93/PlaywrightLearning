/**
 * TypeScript Function Concepts
 *
 * This file covers different ways to define and use functions in TypeScript:
 * 1. Typed Parameters and Return Types.
 * 2. Optional Parameters.
 * 3. Default Parameters.
 * 4. Rest Parameters.
 * 5. Arrow Functions.
 * 6. Function Type Aliases.
 */

export {}; // Avoid global scope conflicts

// 1. Basic Typed Function
// Explicitly defining parameter types (number) and return type (number)
function sum(x: number, y: number): number {
    return x + y;
}

// 2. Optional Parameters
// Optional parameters must come AFTER required parameters.
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

// 3. Default Parameters
// If no value is provided, the default value is used.
function createUser(username: string, role: string = "Guest"): string {
    return `User ${username} created with role: ${role}`;
}

// 4. Rest Parameters
// Allows a function to accept an indefinite number of arguments as an array.
function calculateTotal(...prices: number[]): number {
    return prices.reduce((acc, curr) => acc + curr, 0);
}

// 5. Arrow Functions
// Concise syntax often used for callbacks.
const multiply = (a: number, b: number): number => a * b;

// 6. Function Type Aliases
// Defining the signature of a function as a type.
type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => a - b;
const divide: MathOperation = (a, b) => (b !== 0 ? a / b : 0);

// --- Testing Function Concepts ---

console.log("--- Function Tests ---");

// Test 1: Basic Sum
console.log(`Sum (10 + 20): ${sum(10, 20)}`);

// Test 2: Optional Parameters
console.log(`Greet (Required only): ${greet("Saksham")}`);
console.log(`Greet (With optional): ${greet("Saksham", "Welcome")}`);

// Test 3: Default Parameters
console.log(`User 1 (Default role): ${createUser("Saksham")}`);
console.log(`User 2 (Custom role): ${createUser("AdminUser", "Administrator")}`);

// Test 4: Rest Parameters
console.log(`Total Price: ${calculateTotal(10.5, 20, 45.75, 100)}`);
console.log(`Total Price (empty): ${calculateTotal()}`);

// Test 5: Arrow Functions
console.log(`Multiply (5 * 4): ${multiply(5, 4)}`);

// Test 6: Function Type Aliases
console.log(`Subtract (10 - 5): ${subtract(10, 5)}`);
console.log(`Divide (10 / 2): ${divide(10, 2)}`);
