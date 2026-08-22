/**
 * TypeScript Tuple Concepts
 *
 * A Tuple is a special type of array with a fixed number of elements
 * where each element has a known, specific type.
 *
 * Key Concepts:
 * 1. Fixed Length: Tuples have a predetermined size.
 * 2. Specific Types: Each index in a tuple has its own type.
 * 3. Tuple Destructuring: Easy way to extract values from a tuple.
 * 4. Arrays of Tuples: A common pattern for storing pairs or rows of data.
 * 5. Labeled Tuples: Adding names to tuple elements for better readability (TS 4.0+).
 */

export {}; // Avoid global scope conflicts

// --- 1. Basic Tuple ---
// Define a tuple with a string and a number
let person: [string, number] = ["John", 101];
console.log(`Name: ${person[0]}, ID: ${person[1]}`);

// --- 2. Tuples with Multiple Types ---
let user: [number, string, boolean, number, string] = [101, "Saksham", true, 102, "welcome"];

// Destructuring a tuple
const [userId, userName, isActive, altId, status] = user;
console.log(`User ${userName} (ID: ${userId}) is active: ${isActive}`);

// --- 3. Labeled Tuples (Better Readability) ---
type Response = [status: number, message: string];
const apiResponse: Response = [200, "Success"];
console.log(`API Response -> Status: ${apiResponse[0]}, Message: ${apiResponse[1]}`);

// --- 4. Array of Tuples ---
// Useful for simulating a database table or a list of key-value pairs.
let students: [number, string][] = [
    [101, "John"],
    [102, "Smith"],
    [103, "Roger"]
];

// Accessing tuple elements within an array
students.forEach(([id, name]) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});

// --- Testing Tuple Concepts ---

console.log("--- Tuple Tests ---");
console.log(`Person: ${person[0]} is ${person[1]}`);
console.log(`API Status: ${apiResponse[0]}`);
