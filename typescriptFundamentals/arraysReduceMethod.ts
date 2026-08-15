/**
 * Array .reduce() Method in TypeScript
 *
 * The .reduce() method is one of the most powerful array functions. It executes
 * a "reducer" callback function on each element of the array, resulting in a
 * single output value.
 *
 * Common use cases:
 * - Calculating a sum or product of an array.
 * - Flattening a nested array.
 * - Grouping data from an array into an object.
 */

// --- 1. Basic Summation ---

const numbers: number[] = [1, 2, 3, 4, 5];

/**
 * reduce(callback, initialValue)
 *
 * callback parameters:
 * - accumulator (total): The value resulting from the previous call.
 * - currentValue (element): The current element being processed.
 */
const totalSum = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 0); // '0' is the initialValue for the accumulator

console.log("Total Sum of numbers:", totalSum); // 15


// --- 2. Calculating a Product ---

/**
 * Example: Finding the product of all numbers in the array.
 * Note: The initial value must be 1 for multiplication.
 */
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("Product of numbers:", product); // 120


// --- 3. Reducing to a Different Type (Array to Object) ---

/**
 * .reduce() is not limited to returning a number. It can return any type,
 * including an object or another array.
 */
const fruits: string[] = ["apple", "banana", "apple", "orange", "banana", "apple"];

/**
 * Task: Count occurrences of each fruit (creating a frequency map).
 * Initial Value: An empty object {}.
 */
const fruitCounts = fruits.reduce((counts, fruit) => {
    // If fruit exists in counts, increment; otherwise, set to 1
    counts[fruit] = (counts[fruit] || 0) + 1;
    return counts;
}, {} as Record<string, number>);

console.log("Fruit Frequency Map:", fruitCounts);
// Output: { apple: 3, banana: 2, orange: 1 }


// --- 4. Flattening a Nested Array ---

/**
 * Example: Converting a 2D array into a 1D array.
 */
const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattened = nestedArray.reduce((acc, curr) => {
    return acc.concat(curr);
}, [] as number[]);

console.log("Flattened Array:", flattened); // [1, 2, 3, 4, 5, 6]


// --- 5. Summary Table ---
/**
 * | Parameter      | Description                                             |
 * |----------------|---------------------------------------------------------|
 * | Accumulator    | Stores the running result of the reduction.              |
 * | Current Value  | The item currently being processed in the array.          |
 * | Initial Value  | The starting value of the accumulator (highly recommended)|
 * | Return Value   | A single value of any type (Number, String, Object, etc.) |
 * | Time Complexity| O(n)                                                     |
 */
