/**
 * TypeScript Object Type Aliases
 *
 * Type aliases allow us to define a custom name for a type. This makes the code
 * more reusable, readable, and easier to maintain.
 *
 * Key Concepts:
 * 1. Basic Type Aliases: Naming a specific object shape.
 * 2. Intersection Types (&): Combining multiple types into one.
 * 3. Union Types (|): Allowing a variable to be one of several types.
 * 4. Type Aliases for Functions: Defining a signature for a function.
 */

export {}; // Avoid global scope conflicts

// --- 1. Basic Type Alias ---
type Product = {
    name: string;
    price: number;
    getInfo(): string; // Function signature within an object
};

const book1: Product = {
    name: "Learn TypeScript",
    price: 300,
    getInfo() {
        return `The price of ${this.name} is ${this.price}`;
    }
};

const book2: Product = {
    name: "Mastering React",
    price: 500,
    getInfo() {
        return `The price of ${this.name} is ${this.price}`;
    }
};

// --- 2. Intersection Types (&) ---
// An intersection type combines multiple types. The final object MUST have all properties of all combined types.

type Personal = {
    name: string;
    age: number;
};

type Contact = {
    email: string;
    phone: number;
};

// Candidate = Personal AND Contact AND the extra property candidateInfo
type Candidate = Personal & Contact & {
    candidateInfo(): string;
};

const candidate: Candidate = {
    name: "Saksham",
    age: 23,
    email: "saksham.sahani@gmail.com",
    phone: 3234355566,
    candidateInfo() {
        return `${this.name} can be contacted at ${this.email} or ${this.phone}`;
    }
};

// --- 3. Union Types (|) ---
// A union type allows a value to be one of several different types.

type Status = "Pending" | "Approved" | "Rejected"; // String Literal Union

type ID = string | number; // Union of different types

interface Admin {
    role: "admin";
    manageUsers(): void;
}

interface User {
    role: "user";
    viewProfile(): void;
}

type Account = Admin | User;

const myAcc: Account = {
    role: "admin",
    manageUsers() { console.log("Managing users..."); }
};

// --- Testing Type Aliases ---

console.log("--- Type Alias Tests ---");
console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(candidate.candidateInfo());
console.log(`Candidate Status: ${"Approved" as Status}`);
myAcc.manageUsers();
