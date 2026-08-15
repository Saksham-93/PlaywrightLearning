/**
 * Anonymous Functions in TypeScript
 *
 * An anonymous function is a function that does not have a name.
 * In TypeScript, these are typically used as "function expressions"
 * where the function is assigned to a variable or passed directly as an argument.
 */

// --- 1. Function Expressions ---

/**
 * Instead of declaring a function with the 'function' keyword at the start,
 * we create a function and assign it to a variable.
 * This is a "named function expression" because the variable has a name,
 * but the function itself is anonymous.
 */
const multiply = function(a: number, b: number): number {
    return a * b;
};

console.log("Multiplication Result:", multiply(10, 20));


// --- 2. Differences: Declaration vs Expression ---

/**
 * Function Declaration:
 * function add(a: number, b: number) { return a + b; }
 * - Hoisted: Can be called before it is defined in the code.
 *
 * Function Expression (Anonymous):
 * const add = function(a: number, b: number) { return a + b; };
 * - Not Hoisted: Must be defined before it is called.
 */
try {
    // This would work if it were a declaration
    // console.log(hoistedFunc());
} catch (e) {
    console.log("Error: Function expressions are not hoisted!");
}


// --- 3. Passing Anonymous Functions as Arguments ---

/**
 * One of the most powerful uses of anonymous functions is passing them
 * directly into other functions (callbacks) without assigning them to a variable first.
 */
function executeOperation(a: number, b: number, operation: (x: number, y: number) => number): void {
    const result = operation(a, b);
    console.log("Operation Result:", result);
}

// Passing an anonymous function expression directly
executeOperation(10, 5, function(x, y) {
    return x - y; // Subtracts b from a
});


// --- 4. Relationship with Arrow Functions ---

/**
 * Arrow functions are essentially a more concise syntax for anonymous functions.
 * Most of the time, if you need an anonymous function, you should use an arrow function.
 */

// Traditional Anonymous Function Expression
const squareTrad = function(n: number): number {
    return n * n;
};

// Equivalent Arrow Function
const squareArrow = (n: number): number => n * n;

console.log("Square (Trad):", squareTrad(4));
console.log("Square (Arrow):", squareArrow(4));


// --- 5. Immediately Invoked Function Expressions (IIFE) ---

/**
 * An IIFE is an anonymous function that is executed as soon as it is defined.
 * This is often used to create a private scope and avoid polluting the global namespace.
 */
(function() {
    const privateVar = "I am hidden from the outside world";
    console.log("IIFE executed: " + privateVar);
})();

// console.log(privateVar); // Error: privateVar is not defined outside the IIFE
