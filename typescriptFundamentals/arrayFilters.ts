/**
 * Array Filter Method in TypeScript
 *
 * The .filter() method creates a new array containing all elements from the
 * original array that pass a specific test (predicate) implemented by
 * a provided function.
 *
 * Key Concept:
 * - The callback function must return a boolean: 'true' to keep the element,
 *   'false' to discard it.
 * - The original array remains unchanged (it is an immutable operation).
 */

// --- 1. Basic Number Filtering ---

/**
 * Example: Filtering even numbers from an array.
 * This demonstrates the most common use case of .filter().
 */
const numbers: number[] = [4, 6, 8, 10, 21, 31, 42];

// Idiomatic way: Using an arrow function that returns the boolean condition directly
const evenNumbers = numbers.filter((num): boolean => num % 2 === 0);

console.log("Original Numbers:", numbers);
console.log("Even Numbers:", evenNumbers);


// --- 2. Filtering Strings ---

/**
 * Example: Filtering a list of names based on their length.
 */
const names: string[] = ["John", "Saksham", "Akrati", "Ali", "Advika"];

// Keep names that have more than 4 characters
const longNames = names.filter((name) => name.length > 4);

console.log("\nNames with length > 4:", longNames);


// --- 3. Filtering Objects ---

/**
 * In real-world applications, .filter() is most frequently used on arrays of objects.
 */
interface User {
    id: number;
    name: string;
    isAdmin: boolean;
    age: number;
}

const users: User[] = [
    { id: 1, name: "Saksham", isAdmin: true, age: 25 },
    { id: 2, name: "Akrati", isAdmin: false, age: 22 },
    { id: 3, name: "Advika", isAdmin: false, age: 28 },
    { id: 4, name: "John", isAdmin: true, age: 35 },
];

// Example A: Filter users who are administrators
const admins = users.filter(user => user.isAdmin);
console.log("\nAdmins:", admins);

// Example B: Filter users who are older than 24
const adults = users.filter(user => user.age > 24);
console.log("Users older than 24:", adults);


// --- 4. Chaining Filter with Other Methods ---

/**
 * You can chain .filter() with .map() to first remove unwanted elements
 * and then transform the remaining ones.
 */

// Task: Get the names of all admin users in uppercase
const adminNamesUpper = users
    .filter(user => user.isAdmin)        // First, keep only admins
    .map(user => user.name.toUpperCase()); // Then, transform their names to uppercase

console.log("\nUppercase Admin Names:", adminNamesUpper);


// --- 5. Summary Table ---
/**
 * | Feature             | Description                                      |
 * |---------------------|--------------------------------------------------|
 * | Return Value        | A new array (can be empty if no elements match)   |
 * | Callback Return     | Must be boolean (true/false)                     |
 * | Mutability          | Immutable (Original array is not modified)        |
 * | Time Complexity     | O(n) - where n is the number of elements in array  |
 */
