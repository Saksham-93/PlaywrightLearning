/**
 * Common Array Methods in TypeScript
 *
 * This file covers the most fundamental methods used to manipulate arrays.
 * These methods are categorized by whether they modify the original array
 * (Mutable) or return a new one (Immutable).
 */

// --- 1. Basic Properties ---

const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: string[] = ["apple", "mango", "oranges", "banana"];

console.log("Numbers Length:", numbers.length); // 5
console.log("Fruits Length:", fruits.length);   // 4


// --- 2. Adding/Removing Elements (Mutable Operations) ---

/**
 * .push() - Adds one or more elements to the END of the array.
 * Returns: The new length of the array.
 */
numbers.push(6, 7);
console.log("After push (6, 7):", numbers); // [1, 2, 3, 4, 5, 6, 7]

/**
 * .pop() - Removes the LAST element from the array.
 * Returns: The element that was removed, or 'undefined' if the array is empty.
 */
const removedNumber = numbers.pop();
console.log("After pop:", numbers);           // [1, 2, 3, 4, 5, 6]
console.log("Removed Element:", removedNumber); // 7

/**
 * .shift() - Removes the FIRST element from the array.
 * Returns: The element that was removed, or 'undefined' if the array is empty.
 */
const firstNum = numbers.shift();
console.log("After shift:", numbers);          // [2, 3, 4, 5, 6]
console.log("Removed First Element:", firstNum); // 1

/**
 * .unshift() - Adds one or more elements to the BEGINNING of the array.
 * Returns: The new length of the array.
 */
fruits.unshift("kiwi", "pear");
console.log("After unshift (kiwi, pear):", fruits); // ["kiwi", "pear", "apple", "mango", "oranges", "banana"]


// --- 3. Combining and Extracting (Immutable Operations) ---

/**
 * .concat() - Merges two or more arrays or values into a new array.
 * Returns: A new array containing the combined elements.
 */
const combinedNumbers = numbers.concat([8, 9, 10]);
console.log("Combined Array:", combinedNumbers); // [2, 3, 4, 5, 6, 8, 9, 10]


/**
 * .slice() - Extracts a section of an array and returns it as a new array.
 * Syntax: slice(startIndex, endIndex) - Note: endIndex is NOT included.
 * Returns: A new array.
 */
// Extracts from index 2 up to (but not including) index 5
const extractedFruits = fruits.slice(2, 5);
console.log("Sliced Elements (index 2 to 4):", extractedFruits);


// --- 4. Summary Table ---
/**
 * | Method     | Action                                  | Mutation | Return Value               |
 * |------------|-----------------------------------------|----------|----------------------------|
 * | .push()    | Add to end                               | Mutable  | New length (number)        |
 * | .pop()     | Remove from end                           | Mutable  | Removed element (T | undef)|
 * | .shift()   | Remove from start                        | Mutable  | Removed element (T | undef)|
 * | .unshift() | Add to start                             | Mutable  | New length (number)        |
 * | .concat()  | Combine arrays/values                    | Immutable| New array                  |
 * | .slice()   | Extract sub-section                      | Immutable| New array                  |
 */
