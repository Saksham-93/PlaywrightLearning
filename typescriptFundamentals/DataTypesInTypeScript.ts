/**
 * TypeScript Data Types Master Demo
 * -----------------------------------------------------------------------------
 * This file provides a comprehensive overview of how TypeScript handles data types.
 * TypeScript is a statically typed language, meaning we can specify the type
 * of data a variable can hold, which helps prevent bugs during development.
 *
 * Run this file using: tsx DataTypesInTypeScript.ts
 */

// =============================================================================
// 1. CONCEPTUAL FOUNDATIONS: Types, Annotations & Inference
// =============================================================================
console.log("--- CONCEPTUAL FOUNDATIONS ---");

/**
 * A. WHAT IS A DATA TYPE?
 * A data type is an attribute of data which tells the compiler or interpreter
 * how the programmer intends to use the data.
 * For example, a 'string' is for text, a 'number' is for calculations.
 */

/**
 * B. TYPE ANNOTATIONS
 * Type annotations are explicit declarations of the type of a variable.
 * Syntax: let variableName: type = value;
 */
let annotatedCity: string = "Bangalore"; // Explicitly telling TS this is a string
console.log(`Type Annotation: ${annotatedCity}`);

/**
 * C. TYPE INFERENCE
 * TypeScript is smart. If you provide a value during initialization,
 * TS "infers" (guesses) the type automatically without needing an annotation.
 */
let inferredCountry = "India"; // TS infers this is a 'string' because the value is "India"
// inferredCountry = 10; // ERROR: Type 'number' is not assignable to type 'string'.
console.log(`Type Inference: ${inferredCountry}`);

console.log("\n");

// =============================================================================
// 2. PRIMITIVE TYPES
// =============================================================================

// String: Textual data
let username: string = "Saksham Sahani";

	// Example: Passing string as parameter and using backticks (Template Literals)
	function greetUser(name: string): void {
	    console.log(`Hello, ${name}! Welcome to TypeScript.`);
	}
	greetUser(username);
console.log(`String: ${username}`);

// Number: Integers, floating point, hexadecimal, binary, and octal
let age: number = 25;
let pi: number = 3.14159;
console.log(`Number: ${age}, ${pi}`);

// Boolean: true or false
let isDeveloper: boolean = true;
console.log(`Boolean: ${isDeveloper}`);

// Null & Undefined: Used for absence of value
let emptyValue: null = null;
let undefinedValue: undefined = undefined;
console.log(`Null: ${emptyValue}, Undefined: ${undefinedValue}`);

// BigInt: For numbers larger than 2^53 - 1
let hugeNumber: bigint = 9007199254740991n;
console.log(`BigInt: ${hugeNumber}`);

// Symbol: Unique and immutable identifiers
let uniqueId: symbol = Symbol("id");
console.log(`Symbol: ${uniqueId.toString()}`);


// =============================================================================
// 2. OBJECT TYPES
// =============================================================================
console.log("\n--- OBJECT TYPES ---");

// Array: Fixed type elements
let skills: string[] = ["TypeScript", "JavaScript", "Playwright"];
let ratings: number[] = [4.5, 5, 4.8];
console.log(`Skills Array: ${skills}`);

// Tuple: Fixed-size array with a known sequence of types
// Useful for things like coordinates [x, y] or key-value pairs
let userCoordinate: [number, number] = [12.9716, 77.5946];
console.log(`Tuple (Coord): ${userCoordinate}`);

// Object: Defining the shape of an object
let profile: { name: string, age: number, isActive: boolean } = {
    name: "Saksham",
    age: 25,
    isActive: true
};
console.log(`Object Profile: ${profile.name} is ${profile.age} years old.`);


// =============================================================================
// 3. SPECIAL TYPES
// =============================================================================
console.log("\n--- SPECIAL TYPES ---");

// Any: The "escape hatch". Turns off type checking. Use sparingly!
let randomData: any = "Hello";
randomData = 10; // No error
randomData = true; // No error
console.log(`Any Type: ${randomData}`);

// Unknown: A safer version of 'any'. You must check the type before using it.
let mysteryValue: unknown = "I am a secret";
// console.log(mysteryValue.toUpperCase()); // ERROR: Object is of type 'unknown'
if (typeof mysteryValue === "string") {
    console.log(`Unknown (verified as string): ${mysteryValue.toUpperCase()}`);
}

// Void: Used primarily as a return type for functions that don't return anything.
function logMessage(msg: string): void {
    console.log(`Void Return: ${msg}`);
}
logMessage("This function returns nothing!");

// Never: Used for values that will NEVER occur (e.g., a function that always throws an error).
function throwError(msg: string): never {
    throw new Error(msg);
}
// throwError("Critical failure!"); // This would stop the script execution


// =============================================================================
// 4. ENUMS (Enumerations)
// =============================================================================
console.log("\n--- ENUMS ---");

// Enums allow us to define a set of named constants.
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

let myRole: UserRole = UserRole.Admin;
console.log(`User Role: ${myRole}`);


// =============================================================================
// 5. ADVANCED TYPES (UNION & INTERSECTION)
// =============================================================================
console.log("\n--- ADVANCED TYPES ---");

// Union Type: A variable can be one of several types.
let result: string | number;
result = "Success"; // Allowed
result = 200;       // Allowed
console.log(`Union result: ${result}`);

// Type Aliases: Create a custom name for a type
type ID = string | number;
let userId: ID = 101;
let userId2: ID = "user_abc_123";
console.log(`Type Alias IDs: ${userId}, ${userId2}`);

// Intersection Type: Combining multiple types into one.
type Employee = { name: string };
type Manager = { department: string };

type TeamLead = Employee & Manager;

let lead: TeamLead = {
    name: "Saksham Sahani",
    department: "Engineering"
};
console.log(`Intersection (TeamLead): ${lead.name} leads ${lead.department}`);


// =============================================================================
// SUMMARY TABLE
// =============================================================================
/*
 | Category  | Type             | Description                                    | Example                        |
 |-----------|------------------|------------------------------------------------|--------------------------------|
 | Primitive | string, number  | Basic JS data types                            | "Hello", 42                    |
 |           | boolean, bigint | True/False and massive integers                 | true, 100n                     |
 |           | null, undefined | Absence of value                                | null, undefined                |
 | Object    | Array, Tuple     | Collections of data                             | [1, 2], [1, "A"]               |
 |           | Object          | Key-value pairs with fixed shapes               | { name: "A", age: 20 }         |
 | Special   | any, unknown     | Flexible typing (any) vs Safe flexible (unknown)| any, unknown                   |
 |           | void, never      | Return types (nothing vs impossible)           | function(): void               |
 | Advanced  | Enum, Union      | Custom categories and "Either/Or" types        | Role.Admin, string | number    |
 |           | Intersection    | Combining multiple shapes into one              | Employee & Manager             |
*/

console.log("\nData Types Demo completed successfully!");
