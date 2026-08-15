/**
 * Arrow Functions in TypeScript
 *
 * Arrow functions provide a more concise way to write functions in JavaScript and TypeScript.
 * They are particularly useful for short functions and as callbacks.
 */

// --- 1. Basic Arrow Function Syntax ---

/**
 * A standard arrow function.
 * Syntax: (parameters) => { body }
 */
const greet = (): void => {
    console.log("Hello! This is a basic arrow function.");
};

greet();


// --- 2. Type Annotations for Parameters and Return Values ---

/**
 * Just like regular functions, you should type your parameters and return value
 * to ensure type safety.
 */
const add = (a: number, b: number): number => {
    return a + b;
};

console.log("Sum:", add(2, 3));


// --- 3. Implicit Returns (Shorthand Syntax) ---

/**
 * If the function body consists of only one expression, you can omit the
 * curly braces { } and the 'return' keyword. This is called an implicit return.
 */
const multiply = (num1: number, num2: number): number => num1 * num2;

console.log("Product:", multiply(2, 3));


// --- 4. Arrow Functions with Rest Parameters ---

/**
 * Arrow functions can also use rest parameters to accept an indefinite
 * number of arguments as an array.
 */
const findElements = (...elements: (number | string)[]): number => {
    return elements.length;
};

console.log("Number of elements:", findElements(1, 2, 3, 'boy', 'girl'));


// --- 5. Using Arrow Functions as Callbacks ---

/**
 * Arrow functions are most commonly used as arguments to other functions
 * (higher-order functions) like map, filter, and reduce.
 */
const numbers: number[] = [1, 2, 3, 4, 5];

// Using arrow function in map to double the numbers
const doubled = numbers.map((n: number): number => n * 2);
console.log("Doubled Numbers:", doubled);

// Using arrow function in filter to get even numbers
const evens = numbers.filter((n: number): boolean => n % 2 === 0);
console.log("Even Numbers:", evens);


// --- 6. Defining Arrow Functions with Type Aliases ---

/**
 * You can define the function signature separately using a type alias.
 * This makes the code cleaner when you have multiple functions with the same signature.
 */
type MathOp = (x: number, y: number) => number;

const subtract: MathOp = (x, y) => x - y;
const divide: MathOp = (x, y) => x / y;

console.log("Subtraction:", subtract(10, 5));
console.log("Division:", divide(10, 5));


// --- 7. Key Differences from Regular Functions ---
/**
 * Note: Arrow functions differ from regular 'function' declarations in two main ways:
 * 1. 'this' context: Arrow functions do not have their own 'this'. They inherit 'this'
 *    from the surrounding lexical scope.
 * 2. Hoisting: Regular functions are hoisted; arrow functions (assigned to variables)
 *    are not. You must define them before calling them.
 */
