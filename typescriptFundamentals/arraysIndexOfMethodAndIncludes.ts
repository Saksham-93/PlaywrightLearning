/**
 * Array Search Methods in TypeScript: indexOf() and includes()
 *
 * TypeScript provides several ways to check for the existence of an element
 * within an array. The two most common methods for primitive types are
 * indexOf() and includes().
 */

// --- 1. The indexOf() Method ---

/**
 * indexOf() searches the array for a specified element and returns the
 * FIRST index at which the element can be found.
 *
 * Key Characteristics:
 * - Returns the 0-based index if found.
 * - Returns -1 if the element is NOT found.
 * - Performs a strict equality check (===).
 */
const fruits: string[] = ['apple', 'grapes', 'apricots', 'mango', 'kiwi'];

const mangoIndex = fruits.indexOf('mango');
console.log(`Index of mango: ${mangoIndex}`); // Output: 3

const bananaIndex = fruits.indexOf('banana');
console.log(`Index of banana: ${bananaIndex}`); // Output: -1 (Not found)

// Typical usage pattern with indexOf()
if (bananaIndex !== -1) {
    console.log("Banana is in the list!");
} else {
    console.log("Banana was not found in the list.");
}


// --- 2. The includes() Method ---

/**
 * includes() checks if an array contains a certain element.
 * It returns a boolean value: true or false.
 *
 * Key Characteristics:
 * - Returns true if the element exists.
 * - Returns false if it does not.
 * - More readable than indexOf() when you only need to know if an item exists.
 */
const hasCherry = fruits.includes('cherry');
console.log(`Does the array include cherry?: ${hasCherry}`); // Output: false

const hasApple = fruits.includes('apple');
console.log(`Does the array include apple?: ${hasApple}`); // Output: true

// Typical usage pattern with includes()
if (fruits.includes('apple')) {
    console.log("Apple is available!");
}


// --- 3. Comparison: indexOf() vs includes() ---

/**
 * When to use which?
 *
 * Use indexOf() when:
 * - You actually need the numeric position (index) of the element to use it for
 *   splicing, replacing, or logic based on position.
 *
 * Use includes() when:
 * - You only need a yes/no answer (boolean). It is cleaner and more semantic.
 * - You are checking for NaN (Not a Number). indexOf() cannot find NaN,
 *   but includes() can.
 */

// NaN Example
const mixedNumbers = [1, 2, NaN, 4];
console.log("indexOf NaN:", mixedNumbers.indexOf(NaN));   // Output: -1 (Fails)
console.log("includes NaN:", mixedNumbers.includes(NaN)); // Output: true (Works)


// --- 4. Summary Table ---
/**
 * | Feature             | indexOf()                        | includes()                       |
 * |---------------------|----------------------------------|----------------------------------|
 * | Return Type         | number (Index or -1)             | boolean (true or false)          |
 * | Primary Purpose     | Find position of element         | Check for existence              |
 * | Strict Equality    | Yes (===)                         | Yes (===)                        |
 * | Handles NaN        | No                                | Yes                              |
 * | Readability        | Moderate                         | High                             |
 */
