/**
 * Array .splice() Method in TypeScript
 *
 * The .splice() method is a powerful tool that allows you to add, remove, or replace
 * elements in an array at any specific index.
 *
 * IMPORTANT: Unlike .slice(), .splice() MUTATES the original array.
 */

// --- 1. Only Deletion ---

/**
 * Syntax: splice(startIndex, deleteCount)
 * - startIndex: The index where the removal begins.
 * - deleteCount: The number of elements to remove.
 */
let fruits: string[] = ["apple", "banana", "orange", "mango", "kiwi"];

// Remove 2 elements starting from index 1 ("banana" and "orange")
const removedElements = fruits.splice(1, 2);

console.log("Updated Fruits (after deletion):", fruits); // ["apple", "mango", "kiwi"]
console.log("Removed Elements:", removedElements);       // ["banana", "orange"]


// --- 2. Only Addition ---

/**
 * Syntax: splice(startIndex, 0, item1, item2, ...)
 * To add elements without deleting any, set the deleteCount to 0.
 */
// Resetting the array for the example
fruits = ["apple", "mango", "kiwi"];

// Add "grapes" and "apricots" at index 1
fruits.splice(1, 0, "grapes", "apricots");

console.log("Updated Fruits (after addition):", fruits); // ["apple", "grapes", "apricots", "mango", "kiwi"]


// --- 3. Both Deletion and Addition (Replacement) ---

/**
 * Syntax: splice(startIndex, deleteCount, item1, ...)
 * You can remove a set of elements and insert new ones in the same operation.
 */
// Resetting the array for the example
fruits = ["apple", "grapes", "apricots", "mango", "kiwi"];

// Remove 3 elements from index 0 and replace them with "jamun"
fruits.splice(0, 3, "jamun");

console.log("Updated Fruits (after replacement):", fruits); // ["jamun", "mango", "kiwi"]


// --- 4. Removing All Elements From a Certain Point ---

/**
 * If you provide only the startIndex, splice() will remove all elements
 * from that index to the end of the array.
 */
const animals = ["Dog", "Cat", "Bird", "Fish", "Lion"];
animals.splice(2); // Remove everything from index 2 onwards

console.log("Trimmed Animals:", animals); // ["Dog", "Cat"]


// --- 5. Summary Table ---
/**
 * | Operation    | Syntax                                     | Effect                                      |
 * |--------------|--------------------------------------------|---------------------------------------------|
 * | Deletion     | .splice(start, count)                       | Removes 'count' elements starting at 'start'|
 * | Addition     | .splice(start, 0, item1, ...)               | Inserts 'items' starting at 'start'          |
 * | Replacement  | .splice(start, count, item1, ...)           | Removes 'count', then inserts 'items'         |
 * | Trim End     | .splice(start)                             | Removes all elements from 'start' to end     |
 * | Mutability   | Mutable                                    | Original array IS modified                  |
 */
