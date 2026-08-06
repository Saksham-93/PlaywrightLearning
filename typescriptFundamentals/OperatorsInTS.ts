/**
 * TypeScript Operators Master Demo
 * -----------------------------------------------------------------------------
 * This file provides a comprehensive guide to all operators available in TypeScript.
 * Since TypeScript is a superset of JavaScript, it includes all JS operators
 * and adds type-level operators for enhanced type safety.
 *
 * Run this file using: tsx OperatorsInTS.ts
 */

// =============================================================================
// 1. ARITHMETIC OPERATORS
// =============================================================================
console.log("--- ARITHMETIC OPERATORS ---");

let a: number = 10;
let b: number = 3;

console.log(`Addition (10 + 3): ${a + b}`);         // 13
console.log(`Subtraction (10 - 3): ${a - b}`);      // 7
console.log(`Multiplication (10 * 3): ${a * b}`);   // 30
console.log(`Division (10 / 3): ${a / b}`);        // 3.333...
console.log(`Modulus (10 % 3): ${a % b}`);         // 1 (Remainder)
console.log(`Exponentiation (10 ** 3): ${a ** b}`); // 1000 (10 to the power of 3)

let c: number = 5;
c++; // Increment: c becomes 6
console.log(`Increment: ${c}`);
c--; // Decrement: c becomes 5
console.log(`Decrement: ${c}`);

// =============================================================================
// 2. ASSIGNMENT OPERATORS
// =============================================================================
console.log("\n--- ASSIGNMENT OPERATORS ---");

let x: number = 10;
x += 5; // x = x + 5 -> 15
console.log(`Addition Assignment (+=): ${x}`);

x -= 2; // x = x - 2 -> 13
console.log(`Subtraction Assignment (-=): ${x}`);

x *= 2; // x = x * 2 -> 26
console.log(`Multiplication Assignment (*=): ${x}`);

x /= 2; // x = x / 2 -> 13
console.log(`Division Assignment (/=): ${x}`);

// =============================================================================
// 3. COMPARISON OPERATORS
// =============================================================================
console.log("\n--- COMPARISON OPERATORS ---");

let val1: number = 10;
let val2: any = "10"; // Using any to allow comparison with string for demo

// Loose Equality (==): Checks value only.
// If the types are different, JS performs "Type Coercion" (converts one type to another)
// before comparing. Example: 10 == "10" is true because "10" is coerced to a number.
console.log(`Loose Equality (10 == "10"): ${val1 == val2}`); // true

// Strict Equality (===): Checks both value AND type.
// No type coercion happens. If the types are different, it immediately returns false.
// This is the standard and recommended approach in TypeScript for reliability.
console.log(`Strict Equality (10 === "10"): ${val1 === val2}`); // false

console.log(`Not Equal (!=): ${val1 != 5}`);           // true
console.log(`Strict Not Equal (!==): ${val1 !== val2}`); // true
console.log(`Greater Than (10 > 5): ${val1 > 5}`);     // true
console.log(`Less Than (10 < 5): ${val1 < 5}`);        // false
console.log(`Greater or Equal (10 >= 10): ${val1 >= 10}`); // true

// =============================================================================
// 4. LOGICAL OPERATORS
// =============================================================================
console.log("\n--- LOGICAL OPERATORS ---");

let isSunny: boolean = true;
let isWarm: boolean = false;

// AND (&&): True if both are true
console.log(`Logical AND (true && false): ${isSunny && isWarm}`); // false

// OR (||): True if at least one is true
console.log(`Logical OR (true || false): ${isSunny || isWarm}`);  // true

// NOT (!): Reverses the boolean value
console.log(`Logical NOT (!true): ${!isSunny}`); // false

// =============================================================================
// 5. BITWISE OPERATORS (Operating on binary representations)
// =============================================================================
console.log("\n--- BITWISE OPERATORS ---");

let p: number = 5; // Binary: 0101
let q: number = 3; // Binary: 0011

console.log(`Bitwise AND (5 & 3): ${p & q}`); // 0001 -> 1
console.log(`Bitwise OR (5 | 3): ${p | q}`);  // 0111 -> 7
console.log(`Bitwise XOR (5 ^ 3): ${p ^ q}`); // 0110 -> 6
console.log(`Bitwise NOT (~5): ${~p}`);       // -6

// =============================================================================
// 6. TERNARY & MODERN OPERATORS
// =============================================================================
console.log("\n--- TERNARY & MODERN OPERATORS ---");

// Ternary Operator: condition ? exprIfTrue : exprIfFalse
let age: number = 20;
let ageStatus = age >= 18 ? "Adult" : "Minor";
console.log(`Ternary Result: ${ageStatus}`);

// Nullish Coalescing (??): Returns right side if left side is null or undefined
let city: string | null = null;
let finalCity = city ?? "Default City";
console.log(`Nullish Coalescing: ${finalCity}`); // "Default City"

// Optional Chaining (?.) : Accesses nested properties without throwing errors if parent is null
interface UserProfile {
    info: { name: string };
    settings?: { theme: string };
}
let userProfile: UserProfile = {
    info: {
        name: "Saksham"
    }
};
console.log(`Optional Chaining (Exists): ${userProfile.info?.name}`); // "Saksham"
console.log(`Optional Chaining (Not Exists): ${userProfile.settings?.theme}`); // undefined (No crash!)

// =============================================================================
// 7. TYPESCRIPT TYPE-LEVEL OPERATORS
// =============================================================================
console.log("\n--- TYPESCRIPT TYPE OPERATORS ---");

// Type Assertion (as): Tells TS "Trust me, I know the type better than you"
let someValue: any = "This is a string";
let strLength = (someValue as string).length;
console.log(`Type Assertion (as) length: ${strLength}`);

// typeof Operator (Type Query): Gets the TS type of a variable
let myNum = 100;
type NumType = typeof myNum; // NumType is 'number'
console.log(`Type of myNum is: ${typeof myNum}`);

// keyof Operator: Gets a union of all keys of an object type
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}
type PersonKeys = keyof Person; // "firstName" | "lastName" | "age"
console.log(`Keyof Person allows: firstName, lastName, or age`);

// 'in' Operator: Checks if a property exists in an object (used as a type guard)
function checkProperty(obj: any) {
    if ("name" in obj) {
        console.log("Object has a 'name' property");
    } else {
        console.log("Object does NOT have a 'name' property");
    }
}
checkProperty({ name: "Saksham" });
checkProperty({ age: 25 });

// =============================================================================
// SUMMARY TABLE
// =============================================================================
/*
 | Operator Category | Symbol(s)             | Purpose                                      |
 |------------------|-----------------------|----------------------------------------------|
 | Arithmetic       | +, -, *, /, %, **, ++  | Basic mathematical calculations             |
 | Assignment       | =, +=, -=, *=, /=      | Modifying variable values                   |
 | Comparison       | ==, ===, !=, !==, >, <| Comparing two values for equality/magnitude  |
 | Logical          | &&, ||, !              | Combining boolean conditions                |
 | Bitwise          | &, |, ^, ~, <<, >>    | Manipulation of bits (binary)               |
 | Modern           | ??, ?.                 | Handling null/undefined safely              |
 | TS Specific       | as, keyof, typeof, in  | Type casting and type-level introspection   |
 */

console.log("\nOperators Demo completed successfully!");
