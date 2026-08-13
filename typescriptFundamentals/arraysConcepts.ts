/**
 * Arrays in TypeScript
 *
 * An array is a collection of elements of the same type.
 * TypeScript provides several ways to declare and initialize arrays,
 * ensuring type safety throughout the application.
 */

// --- 1. Declaring and Initializing Arrays ---

/**
 * Approach 1: Square Bracket Notation (Most Common)
 * This is the shorthand syntax for declaring arrays.
 */
let fruits: string[] = ["Apple", "Banana", "Mango"];
fruits[0] = "Orange"; // Updating an element
fruits.push("Grape");  // Adding an element to the end

console.log("Fruits Array (Square Bracket):", fruits);


/**
 * Approach 2: Generic Array Type
 * Using the Array<T> generic syntax. This is functionally equivalent to string[].
 */
let scores: Array<number> = [85, 92, 78, 95];
scores.push(88);

console.log("Scores Array (Generic):", scores);


// --- 2. Common Array Operations ---

let mixedNumbers: number[] = [10, 20, 30, 40, 50];

// Accessing elements by index
console.log("Element at index 2:", mixedNumbers[2]); // 30

// Adding elements
mixedNumbers.push(60);       // Adds to the end
mixedNumbers.unshift(0);     // Adds to the beginning

// Removing elements
mixedNumbers.pop();          // Removes from the end
mixedNumbers.shift();        // Removes from the beginning

console.log("Updated Mixed Numbers:", mixedNumbers);


// --- 3. Iterating Over Arrays ---

let employees: string[] = ["Saksham", "Akrati", "Advika"];

console.log("\n--- Array Iteration Methods ---");

/**
 * Method A: Traditional 'for' loop
 * Provides the index, useful when you need to know the position.
 */
console.log("Using traditional for loop:");
for (let i = 0; i < employees.length; i++) {
    console.log(`Index ${i}: ${employees[i]}`);
}

/**
 * Method B: 'for...of' loop (Recommended for values)
 * Cleanest way to iterate when you only need the values.
 */
console.log("\nUsing for...of loop:");
for (let emp of employees) {
    console.log(emp);
}

/**
 * Method C: 'forEach' method
 * A functional approach to iteration.
 */
console.log("\nUsing forEach method:");
employees.forEach((emp, index) => {
    console.log(`Employee ${index + 1}: ${emp}`);
});

/**
 * Method D: 'for...in' loop
 * Iterates over the keys (indexes) of the array.
 */
console.log("\nUsing for...in loop:");
for (let index in employees) {
    console.log(`Key ${index}: ${employees[index]}`);
}
