/**
 * Function Concepts in TypeScript
 *
 * Functions are the fundamental building blocks of any TypeScript application.
 * TypeScript enhances standard JavaScript functions by adding type safety to
 * parameters and return values.
 */

// --- 1. Basic Function Declaration ---

/**
 * A standard function requires type annotations for:
 * 1. Parameters: The type of data the function expects.
 * 2. Return Value: The type of data the function returns (use 'void' if nothing is returned).
 */
function greet(name: string): void {
    console.log(`Hello, ${name}! Welcome to TypeScript.`);
}

function addNumbers(x: number, y: number): number {
    return x + y;
}

greet("Saksham");
console.log("Sum:", addNumbers(10, 20));


// --- 2. Optional Parameters ---

/**
 * Optional parameters are marked with a '?' after the parameter name.
 * They must always be placed AFTER all required parameters.
 */
function displayDetails(id: number, name: string, email?: string): void {
    console.log(`ID: ${id}, Name: ${name}, Email: ${email ?? "Not Provided"}`);
}

// Calling with all arguments
displayDetails(1, "Saksham", "saksham@example.com");
// Calling without the optional argument
displayDetails(2, "Akrati");


// --- 3. Default Parameters ---

/**
 * Default parameters allow you to provide a fallback value if no argument
 * is passed during the function call.
 */
function calculateDiscount(price: number, rate: number = 0.10): number {
    return price * rate;
}

// Uses the provided rate (0.30)
console.log("Custom Discount:", calculateDiscount(1000, 0.30));
// Uses the default rate (0.10)
console.log("Default Discount:", calculateDiscount(1000));


// --- 4. Rest Parameters ---

/**
 * Rest parameters allow a function to accept an indefinite number of arguments
 * as an array. The rest parameter must be the last parameter in the list.
 */
function sumAll(...nums: number[]): number {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log("Sum of multiple numbers:", sumAll(1, 2, 3, 4, 5));


// --- 5. Union Types in Parameters ---

/**
 * When a parameter can be of multiple types, use a Union Type.
 */
function formatElement(element: string | number): string {
    return `Element value is: ${element}`;
}

console.log(formatElement("TypeScript"));
console.log(formatElement(101));


// --- 6. Arrow Functions ---

/**
 * Arrow functions provide a concise syntax. You can type them inline
 * or by defining a function type.
 */
const multiply = (a: number, b: number): number => a * b;

console.log("Multiplication Result:", multiply(5, 4));


// --- 7. Function Types ---

/**
 * You can define the "shape" of a function using a type alias or interface.
 * This is extremely useful for callbacks and higher-order functions.
 */
type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => a - b;
const divide: MathOperation = (a, b) => a / b;

console.log("Subtraction:", subtract(20, 10));
console.log("Division:", divide(20, 10));
