/**
 * Objects vs Classes in TypeScript
 *
 * When should you use an Object Literal vs a Class?
 *
 * Object Literals:
 * - Best for simple data structures (e.g., a configuration object, a API response).
 * - Quick to create, no setup required.
 *
 * Classes:
 * - Best for complex entities that need a consistent structure and behavior.
 * - Allows for blueprints (instantiating many objects of the same type).
 * - Supports Inheritance, Encapsulation, and Polymorphism.
 */

export {}; // Avoid global scope conflicts

// --- 1. Object Literal Approach ---
// Good for a one-off instance.
const personObj = {
    ssn: "SSn-001",
    firstName: "Saksham",
    lastName: "Sahani",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// --- 2. Class Approach ---
// Better for creating multiple "Person" objects with the same structure.
class Person {
    // Using parameter properties for cleaner code
    constructor(
        public ssn: string,
        public firstName: string,
        public lastName: string
    ) {}

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public getDetails(): string {
        return `SSN: ${this.ssn}, Name: ${this.getFullName()}`;
    }
}

// --- Testing and Comparison ---

console.log("--- Object Literal ---");
console.log(personObj.getFullName());

console.log("\n--- Class Approach ---");
const person1 = new Person("SSn-001", "Saksham", "Sahani");
const person2 = new Person("SSn-002", "Jane", "Doe");

console.log(person1.getDetails());
console.log(person2.getDetails());

console.log("\nWhy Classes? Notice how person1 and person2 are guaranteed to have the same methods and properties, whereas personObj is just a single instance.");
