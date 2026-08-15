/**
 * Advanced Array Iteration: .forEach()
 *
 * The .forEach() method executes a provided function once for each array element.
 * Unlike .map(), it does NOT return a new array; it returns 'undefined'.
 * It is used primarily for "side effects" (e.g., logging to console, updating a database,
 * or modifying an external variable).
 */

// --- 1. Basic Iteration ---

const fruits: string[] = ['apple', 'mango', 'banana', 'grapes'];

/**
 * The forEach callback provides three arguments:
 * 1. Current Element: The item being processed.
 * 2. Index: The position of the item in the array.
 * 3. Array: The original array itself.
 */
console.log("--- Printing Fruits with Indexes ---");
fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});


// --- 2. Performing Operations (Side Effects) ---

console.log("\n--- Printing Fruits in Uppercase ---");
fruits.forEach((fruit) => {
    console.log(fruit.toUpperCase());
});


// --- 3. Updating External State ---

/**
 * Since forEach returns undefined, we use it to update variables
 * defined outside the loop.
 */
const numbers: number[] = [10, 20, 30, 40];
let totalSum = 0;

numbers.forEach((num) => {
    totalSum += num;
});

console.log("\nTotal Sum calculated via forEach:", totalSum);


// --- 4. forEach vs. map() ---

/**
 * It is a common mistake to use forEach when you actually need map().
 *
 * Use .map() when:
 * - You want to transform data into a NEW array.
 * - You intend to chain methods (e.g., .map().filter()).
 *
 * Use .forEach() when:
 * - You just need to loop through data.
 * - You are performing an action (logging, saving to DB, modifying DOM).
 */

// WRONG WAY: Using forEach to create a new array (Manual pushing)
const squaredManual: number[] = [];
numbers.forEach(n => squaredManual.push(n * n));

// RIGHT WAY: Using map()
const squaredMap = numbers.map(n => n * n);

console.log("\nSquared via forEach:", squaredManual);
console.log("Squared via map():", squaredMap);


// --- 5. Summary Table ---
/**
 * | Feature             | .forEach()                               | .map()                                   |
 * |---------------------|------------------------------------------|------------------------------------------|
 * | Return Value        | undefined                                | A new array                              |
 * | Purpose             | Perform an action (Side effects)          | Transform data                           |
 * | Chainable           | No                                       | Yes                                      |
 * | Original Array      | Unchanged (unless manually mutated)      | Unchanged                                |
 * | Time Complexity     | O(n)                                      | O(n)                                     |
 */
