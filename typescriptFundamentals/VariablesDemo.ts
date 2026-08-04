/**
 * TypeScript Variables Master Demo
 * -----------------------------------------------------------------------------
 * This file demonstrates the differences between 'var', 'let', and 'const'.
 * Understanding these is crucial for avoiding bugs related to scope and hoisting.
 */

// =============================================================================
// 1. VAR (The Legacy Way)
// =============================================================================
console.log("--- VAR DEMO ---");

// A) Function Scope: var is scoped to the nearest function, NOT the block {}.
if (true) {
    var varVariable = "I am accessible outside this block!";
}
console.log(`var: ${varVariable}`); // Works! (Because var ignores block scope)

// B) Redeclaration: var allows you to declare the same variable multiple times.
var greeting = "Hello";
var greeting = "Hi"; // No error
console.log(`Greeting: ${greeting}`);

// C) Hoisting: var declarations are moved to the top of their scope.
console.log(`Hoisted value: ${hoistedVar}`); // Returns undefined, not a ReferenceError
var hoistedVar = "I was hoisted!";


// =============================================================================
// 2. LET (The Modern Standard)
// =============================================================================
console.log("\n--- LET DEMO ---");

// A) Block Scope: let is scoped to the nearest curly braces {}.
if (true) {
    let letVariable = "I am hidden inside this block!";
    console.log(`Inside block: ${letVariable}`);
}
// console.log(letVariable); // UNCOMMENT THIS: Will throw "ReferenceError: letVariable is not defined"

// B) No Redeclaration: You cannot declare the same variable twice in the same scope.
let user = "Saksham";
// let user = "John"; // UNCOMMENT THIS: Will throw "Cannot redeclare block-scoped variable 'user'"

// C) Re-assignment: let allows you to change the value.
let score = 10;
score = 20; // Allowed
console.log(`Updated score: ${score}`);

// D) Temporal Dead Zone (TDZ): let is hoisted but not initialized.
// console.log(notYetDefined); // UNCOMMENT THIS: Will throw "ReferenceError"
let notYetDefined = "Now I am here!";


// =============================================================================
// 3. CONST (The Immutable Way)
// =============================================================================
console.log("\n--- CONST DEMO ---");

// A) Constant Value: Cannot be re-assigned or redeclared.
const PI = 3.14159;
// PI = 3.14; // UNCOMMENT THIS: Will throw "Assignment to constant variable"

// B) Object/Array Mutability (The "Gotcha"):
// While you cannot re-assign the variable itself, you CAN change the contents of the object/array.
const userProfile = {
    name: "Saksham Sahani",
    age: 25
};

userProfile.age = 26; // This is ALLOWED!
console.log(`Updated profile age: ${userProfile.age}`);

// userProfile = { name: "New User" }; // UNCOMMENT THIS: Will throw "Assignment to constant variable"

const colors = ["Red", "Green"];
colors.push("Blue"); // ALLOWED!
console.log(`Colors array: ${colors}`);


// =============================================================================
// SUMMARY COMPARISON TABLE
// =============================================================================
/*
 | Feature            | var                | let                | const              |
 |-------------------|--------------------|--------------------|--------------------|
 | 1. Scope          | Function Scope      | Block Scope        | Block Scope        |
 | 2. Re-declaration | Allowed             | Not Allowed         | Not Allowed         |
 | 3. Re-assignment | Allowed            | Allowed            | Not Allowed         |
 | 4. Hoisting       | Yes (undefined)     | Yes (TDZ/Error)    | Yes (TDZ/Error)    |
 | 5. Initial Value   | Optional           | Optional           | Mandatory          |
*/

console.log("\nDemo completed successfully!");
