/**
 * TypeScript Conditional Statements Master Demo
 * -----------------------------------------------------------------------------
 * This file demonstrates the various ways to control the flow of execution
 * in TypeScript using conditional statements.
 *
 * Run this file using: tsx conditionStatement.ts
 */

// =============================================================================
// 1. THE 'if' STATEMENT (Simple Conditional)
// =============================================================================
console.log("--- 1. SIMPLE IF STATEMENT ---");

let age: number = 20;
if (age >= 18) {
    console.log("Eligible for voting."); // Executes if condition is true
}

// Example: Check if a number is a multiple of 10
let num10: number = 30;
if (num10 % 10 === 0) {
    console.log(`${num10} is a multiple of 10.`);
}

console.log("\n");

// =============================================================================
// 2. THE 'if-else' STATEMENT (Binary Choice)
// =============================================================================
console.log("--- 2. IF-ELSE STATEMENT ---");

// Example: Check if a number is Even or Odd
let numEvenOdd: number = 11;
if (numEvenOdd % 2 === 0) {
    console.log(`${numEvenOdd} is Even.`);
} else {
    console.log(`${numEvenOdd} is Odd.`);
}

// Example: Check if a student is a teenager
let studentAge: number = 15;
if (studentAge >= 13 && studentAge <= 19) {
    console.log("Student is a teenager.");
} else {
    console.log("Student is not a teenager.");
}

console.log("\n");

// =============================================================================
// 3. THE 'if-else-if' LADDER (Multiple Choices)
// =============================================================================
console.log("--- 3. IF-ELSE-IF LADDER ---");

let checkNum: number = -5;

if (checkNum === 0) {
    console.log("Number is ZERO.");
} else if (checkNum > 0) {
    console.log("Number is POSITIVE.");
} else {
    console.log("Number is NEGATIVE.");
}

// Example: Grading System
let score: number = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

console.log("\n");

// =============================================================================
// 4. NESTED IF STATEMENTS (Conditions within Conditions)
// =============================================================================
console.log("--- 4. NESTED IF STATEMENTS ---");

let hasAccount: boolean = true;
let pinCorrect: boolean = false;

if (hasAccount) {
    console.log("Account found. Checking PIN...");
    if (pinCorrect) {
        console.log("Access Granted.");
    } else {
        console.log("Incorrect PIN. Access Denied.");
    }
} else {
    console.log("No account associated with this user.");
}

console.log("\n");

// =============================================================================
// 5. THE 'switch' STATEMENT (Efficient Multi-way Branching)
// =============================================================================
console.log("--- 5. SWITCH STATEMENT ---");

let dayNumber: number = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number!");
}

// Example: switch with strings
let fruit: string = "Apple";
switch (fruit) {
    case "Apple":
        console.log("Apples are red/green.");
        break;
    case "Banana":
        console.log("Bananas are yellow.");
        break;
    default:
        console.log("Unknown fruit.");
}

console.log("\n");

// =============================================================================
// 6. TRUTHY AND FALSY VALUES (JS/TS Logic)
// =============================================================================
console.log("--- 6. TRUTHY & FALSY ---");

/**
 * In TypeScript/JavaScript, certain values are automatically considered 'false'
 * when used in a boolean context. These are FALSY values:
 * 0, "", null, undefined, NaN, false
 */

let value: any = 0;

if (value) {
    console.log("This value is Truthy");
} else {
    console.log(`Value ${value} is Falsy`); // Executes because 0 is falsy
}

let nameValue: string = "";
if (!nameValue) {
    console.log("The name is an empty string, which is falsy.");
}

console.log("\n");

// =============================================================================
// 7. REAL-WORLD COMBINATION EXAMPLE: Simple ATM Logic
// =============================================================================
console.log("--- 7. REAL-WORLD ATM EXAMPLE ---");

function processAtmWithdrawal(balance: number, amount: number, pinCorrect: boolean) {
    if (!pinCorrect) {
        console.log("Authentication Failed: Incorrect PIN.");
        return;
    }

    if (amount <= 0) {
        console.log("Invalid Amount: Please enter a positive number.");
    } else if (amount > balance) {
        console.log(`Insufficient Funds: You tried to withdraw ${amount} but only have ${balance}.`);
    } else {
        const newBalance = balance - amount;
        console.log(`Withdrawal Successful! Remaining Balance: ${newBalance}`);
    }
}

processAtmWithdrawal(1000, 200, true);  // Success
processAtmWithdrawal(1000, 1200, true); // Insufficient funds
processAtmWithdrawal(1000, 200, false); // Auth failure
processAtmWithdrawal(1000, -50, true);  // Invalid amount

console.log("\nConditional Statements Demo completed successfully!");
