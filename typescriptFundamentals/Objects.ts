/**
 * TypeScript Objects
 *
 * Objects are collections of related data and functionality. In TypeScript, we can
 * define the shape of an object using Type Inference, the 'object' type, or custom types.
 *
 * Key Concepts:
 * 1. Object Literals: Creating objects on the fly.
 * 2. Type Inference: TS automatically assigns types based on initial values.
 * 3. Dot vs Bracket Notation: Different ways to access properties.
 * 4. The 'object' type: Represents any non-primitive type.
 * 5. Object Methods: Functions defined inside objects and the 'this' context.
 */

export {}; // Avoid global scope conflicts

// --- 1. Object with Type Inference ---
// TypeScript infers that 'employee' has properties: name(string), age(number), etc.
const employee = {
    name: "John",
    age: 30,
    salary: 30000,
    job: "Engineer",
    getDetails: function(): string {
        // 'this' refers to the current object instance
        return `${this.name} is an ${this.job}, age ${this.age}, salary ${this.salary}`;
    }
};

// --- 2. Accessing Object Properties ---

// Approach A: Dot Notation (Preferred, cleaner, provides better IDE autocomplete)
console.log(`Dot Notation: ${employee.name}`);

// Approach B: Bracket Notation (Used when property names are dynamic or contain spaces)
const propertyToAccess = "salary";
console.log(`Bracket Notation (Dynamic): ${employee[propertyToAccess]}`);

// --- 3. Modifying Object Properties ---
employee.job = "Manager"; // OK: inferred as string
// employee.age = "Thirty"; // ERROR: Type 'string' is not assignable to type 'number'.

// --- 4. The 'object' type vs Specific Types ---

// Using the general 'object' type:
// This tells TS that 'user' is not a primitive (string, number, boolean),
// but it doesn't know WHICH properties it has.
const genericUser: object = { id: 1, username: "dev123" };
console.log("Generic User object created:", genericUser);
// console.log(genericUser.id); // ERROR: Property 'id' does not exist on type 'object'.

// Better Approach: Define a shape (using an inline type)
const specificUser: { id: number; username: string } = {
    id: 1,
    username: "dev123"
};
console.log(`Specific User: ${specificUser.username}`);

// --- Testing Objects ---
console.log("--- Object Tests ---");
console.log(employee.getDetails());
console.log(`Updated Job: ${employee.job}`);
