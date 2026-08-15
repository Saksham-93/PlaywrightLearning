/**
 * Callback Functions in TypeScript
 *
 * A callback function is a function passed as an argument to another function,
 * which is then "called back" (executed) inside the outer function.
 * Callbacks are essential for handling asynchronous operations, event listeners,
 * and creating flexible, reusable utility functions.
 */

// --- 1. Basic Callback Implementation ---

/**
 * Example: A function that greets a user and then executes a callback.
 * The 'callback' parameter is a function that takes a string and returns nothing (void).
 */
function greet(name: string, callback: (message: string) => void): void {
    console.log(`Hello, ${name}!`);
    callback("Welcome to the TypeScript tutorial!");
}

// Defining a separate function to use as a callback
function showMessage(message: string): void {
    console.log(`Callback says: ${message}`);
}

// Passing the function by name
greet("Saksham", showMessage);


// --- 2. Callbacks with Calculation ---

/**
 * Example: A function that performs a calculation and passes the result to a callback.
 */
function sum(a: number, b: number, callback: (result: number) => void): void {
    const result = a + b;
    callback(result);
}

// Using a named function as callback
function displayResult(res: number): void {
    console.log(`The final sum is: ${res}`);
}

sum(10, 20, displayResult);


// --- 3. Using Anonymous Arrow Functions as Callbacks ---

/**
 * In modern TypeScript/JavaScript, we often pass arrow functions directly
 * as arguments instead of defining separate named functions.
 */
sum(50, 50, (res) => {
    console.log(`The result from the anonymous callback is: ${res}`);
});


// --- 4. Defining Callback Types (Type Aliases) ---

/**
 * When callbacks become complex, it's best to define a type alias.
 * This improves readability and makes the callback signature reusable.
 */
type ProcessorCallback = (value: number) => void;

function processData(data: number[], callback: ProcessorCallback): void {
    data.forEach(item => callback(item));
}

// Using the type-aliased callback
processData([10, 20, 30], (val) => {
    console.log(`Processing value: ${val * 2}`);
});


// --- 5. Real-World Example: Custom Filter Implementation ---

/**
 * A custom filter function that takes a 'predicate' callback.
 * The predicate callback determines if an element should be included in the new array.
 */
function customFilter<T>(array: T[], predicate: (item: T) => boolean): T[] {
    const result: T[] = [];
    for (const item of array) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use callback to filter even numbers
const evens = customFilter(numbers, (n) => n % 2 === 0);
console.log("Filtered Even Numbers:", evens);

// Use callback to filter numbers greater than 5
const greaterThanFive = customFilter(numbers, (n) => n > 5);
console.log("Numbers > 5:", greaterThanFive);


// --- 6. Summary of Callback Benefits ---
/**
 * Why use callbacks?
 * 1. Decoupling: The outer function doesn't need to know exactly what the
 *    callback does; it only cares that the callback follows the correct signature.
 * 2. Flexibility: You can change the behavior of the outer function by
 *    passing different callback functions.
 * 3. Asynchronous Flow: Essential for handling responses from APIs or timers
 *    (e.g., setTimeout).
 */
