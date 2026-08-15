/**
 * Arrays with Functions in TypeScript
 *
 * This file demonstrates how functions interact with arrays, ranging from
 * basic array parameters and return values to advanced higher-order array methods.
 */

// --- 1. Basic Array Interaction ---

/**
 * Case A: Passing an array as a parameter.
 * This function checks if a specific number exists within a given array.
 */
function verifyNumber(ele: number, arr: number[]): boolean {
    for (const item of arr) {
        if (item === ele) {
            return true; // Found the element
        }
    }
    return false; // Element not found
}

console.log("Does 30 exist in [10, 20, 30, 40, 50]?:", verifyNumber(30, [10, 20, 30, 40, 50]));


/**
 * Case B: Returning an array from a function.
 * This function takes a string array and returns a new array with all elements in uppercase.
 */
function changeToUpper(data: string[]): string[] {
    const output: string[] = [];
    for (const str of data) {
        output.push(str.toUpperCase());
    }
    return output;
}

console.log("Uppercase days:", changeToUpper(["sat", "mon", "sun"]));


// --- 2. Higher-Order Array Methods (Functions as Arguments) ---

/**
 * TypeScript leverages powerful built-in array methods that take callbacks.
 * These are the most common ways to process arrays in modern software engineering.
 */
const numbers: number[] = [1, 2, 3, 4, 5, 6];

// A. .forEach() - Iterates through the array
console.log("\n--- forEach ---");
numbers.forEach((num, index) => console.log(`Index ${index} has value ${num}`));

// B. .map() - Transforms each element and returns a new array of the same length
console.log("\n--- map ---");
const squared = numbers.map((num) => num * num);
console.log("Squared numbers:", squared);

// C. .filter() - Filters elements based on a condition and returns a new array
console.log("\n--- filter ---");
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evens);

// D. .reduce() - Aggregates array elements into a single value (e.g., a sum)
console.log("\n--- reduce ---");
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of all numbers:", sum);

// E. .find() - Returns the first element that satisfies the condition
console.log("\n--- find ---");
const found = numbers.find((num) => num > 4);
console.log("First number greater than 4:", found);

// F. .some() and .every() - Condition checks
console.log("\n--- some/every ---");
const hasLargeNum = numbers.some((num) => num > 10); // true if at least one matches
const allPositive = numbers.every((num) => num > 0); // true if all match
console.log(`Has number > 10: ${hasLargeNum}, All positive: ${allPositive}`);


// --- 3. Using Generics for Flexible Array Functions ---

/**
 * Instead of restricting a function to 'number[]' or 'string[]',
 * we can use Generics <T> to make the function work for ANY type of array.
 */
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

console.log("\n--- Generics ---");
console.log("First number:", getFirstElement([10, 20, 30]));     // T becomes number
console.log("First string:", getFirstElement(["A", "B", "C"]));  // T becomes string
