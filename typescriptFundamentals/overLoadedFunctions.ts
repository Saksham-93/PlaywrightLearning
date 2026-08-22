/**
 * TypeScript Function Overloading
 *
 * Function overloading allows a single function to have multiple signatures
 * (definitions) but only one implementation. This is useful when a function
 * can accept different types or numbers of arguments and return different result types.
 *
 * Key Concepts:
 * 1. Overload Signatures: The multiple function definitions that describe the accepted arguments and return types.
 * 2. Implementation Signature: The final function definition that contains the actual logic and must be compatible with all overload signatures.
 * 3. Type Guarding: Using 'typeof' or 'instanceof' within the implementation to determine which overload was used.
 */

export {}; // Avoid global scope conflicts

// --- Example 1: Different Argument Types ---

// Overload Signatures
function getInfo(id: number): string;
function getInfo(name: string): string;

// Implementation Signature
function getInfo(param: number | string): string {
    if (typeof param === 'number') {
        return `User ID is ${param}`;
    }
    return `User name is ${param}`;
}

// --- Example 2: Different Number of Arguments ---

// Overload Signatures
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

// Implementation Signature
function add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}

// --- Example 3: Different Return Types based on Input ---

// Overload Signatures
function check(num: number): number;
function check(name: string): string;

// Implementation Signature
function check(value: number | string): number | string {
    if (typeof value === "string") {
        return `String value: ${value}`;
    }
    return value * 2;
}

// --- Testing Function Overloading ---

console.log("--- Function Overloading Tests ---");

console.log(`Info (Number): ${getInfo(10)}`);
console.log(`Info (String): ${getInfo("Saksham")}`);

console.log(`Add (2 args): ${add(2, 3)}`);
console.log(`Add (3 args): ${add(2, 3, 4)}`);

console.log(`Check (Number): ${check(10)}`);
console.log(`Check (String): ${check("Hello")}`);
