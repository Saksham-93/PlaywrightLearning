/**
 * Array .map() Method in TypeScript
 *
 * The .map() method creates a NEW array by calling a provided function on every
 * element in the calling array. It is used for transforming data without
 * mutating the original array.
 *
 * Key Concepts:
 * - Immutability: The original array remains unchanged.
 * - Length: The resulting array always has the same length as the original.
 * - Transformation: Each element is converted to a new value based on the callback.
 */

// --- 1. Basic Transformation ---

const numbers: number[] = [1, 2, 3, 4, 5];

/**
 * Example: Squaring each number.
 * We use an arrow function for a concise transformation.
 */
const squaredNumbers = numbers.map((num): number => num * num);

console.log("Original Numbers:", numbers);
console.log("Squared Numbers:", squaredNumbers);


// --- 2. Transforming to a Different Type ---

/**
 * .map() can change the type of the elements.
 * Here, we transform an array of numbers into an array of strings.
 */
const numberLabels = numbers.map((num): string => `Item #${num}`);

console.log("Number Labels:", numberLabels);


// --- 3. Working with Arrays of Objects ---

/**
 * In real-world applications, .map() is frequently used to extract
 * specific properties from an array of objects (Projection).
 */
interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Mouse", price: 25 },
    { id: 103, name: "Keyboard", price: 75 },
];

// Task: Get an array containing only the product names
const productNames = products.map(product => product.name);
console.log("Product Names:", productNames);


// --- 4. Using the Index Parameter ---

/**
 * The map callback provides the index of the current element as the second argument.
 */
const indexedNumbers = numbers.map((num, index): string => {
    return `Position ${index}: Value ${num}`;
});

console.log("Indexed List:", indexedNumbers);


// --- 5. Chaining map() with filter() ---

/**
 * You can combine map and filter to perform complex data transformations.
 */

// Task: Double only the even numbers from the original list
const doubledEvens = numbers
    .filter(num => num % 2 === 0) // Keep only evens [2, 4]
    .map(num => num * 2);           // Double them [4, 8]

console.log("Doubled Even Numbers:", doubledEvens);


// --- 6. Summary Table ---
/**
 * | Feature             | Description                                      |
 * |---------------------|--------------------------------------------------|
 * | Return Value        | A new array of the same length                   |
 * | Original Array      | Unchanged (Immutable)                            |
 * | Callback Return     | The new value to be placed in the new array     |
 * | Time Complexity     | O(n)                                             |
 */
