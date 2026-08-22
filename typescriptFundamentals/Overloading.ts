/**
 * TypeScript Class Overloading
 *
 * Overloading can be applied to both constructors and methods within a class.
 *
 * Key Concepts:
 * 1. Constructor Overloading: Allows creating a class instance in multiple ways.
 * 2. Method Overloading: Allows a class method to handle different inputs while maintaining a single implementation.
 * 3. Compatibility: The implementation must be broad enough to cover all overloaded signatures.
 */

export {}; // Avoid global scope conflicts

class Calculator {
    // --- Constructor Overloading ---

    // Overload Signatures
    constructor();
    constructor(a: number, b: number);

    // Implementation Signature
    constructor(a?: number, b?: number) {
        if (a !== undefined && b !== undefined) {
            console.log(`Calculator initialized with values: ${a}, ${b}. Sum: ${a + b}`);
        } else {
            console.log("Calculator initialized with default settings.");
        }
    }

    // --- Method Overloading ---

    // Overload Signatures
    public add(a: number, b: number): number;
    public add(a: number, b: number, c: number): number;

    // Implementation Signature
    public add(a: number, b: number, c?: number): number {
        if (c !== undefined) {
            return a + b + c;
        }
        return a + b;
    }
}

// --- Testing Class Overloading ---

console.log("--- Class Overloading Tests ---");

// Test Constructor Overloading
const calc1 = new Calculator();
const calc2 = new Calculator(10, 20);

// Test Method Overloading
console.log(`Add (2 args): ${calc1.add(2, 3)}`);
console.log(`Add (3 args): ${calc1.add(2, 3, 4)}`);
