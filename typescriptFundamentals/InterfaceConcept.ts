/**
 * TypeScript Interface Concepts
 *
 * An interface defines a "contract" or "blueprint" for the shape of an object.
 * It focuses on WHAT an object should look like, not HOW it should behave.
 *
 * Key Concepts:
 * 1. Basic Interface: Defines required properties and their types.
 * 2. Optional Properties: Properties that may or may not exist (marked with ?).
 * 3. Readonly Properties: Properties that cannot be changed after object creation.
 * 4. Index Signatures: For objects where the key names are unknown but the value types are the same.
 * 5. Interface for Arrays/Tuples: Defining the structure of collection types.
 * 6. Abstract Methods: Defining method signatures that must be implemented.
 */

export {}; // Avoid global scope conflicts

// 1. Basic Interface
interface Person {
    name: string;
    age: number;
}

const student: Person = {
    name: "John",
    age: 30
};

// 2. Optional Properties
interface Employee {
    eid: number;
    ename: string;
    edepartment?: string; // Optional
}

const emp1: Employee = { eid: 101, ename: "John" }; // OK
const emp2: Employee = { eid: 102, ename: "Jane", edepartment: "Engineering" }; // OK

// 3. Readonly Properties & Method Signatures
interface Book {
    title: string;
    readonly isbn: string; // Cannot be modified
    display(): void;        // Abstract method signature
}

const myBook: Book = {
    title: "Lean JS",
    isbn: "123-ABC",
    display() {
        console.log(`Book: ${this.title}, ISBN: ${this.isbn}`);
    }
};
// myBook.isbn = "456-DEF"; // ERROR: Cannot assign to 'isbn' because it is a read-only property.

// 4. Index Signatures
// Useful when you don't know the property names in advance, but know the types.
interface Dictionary {
    [key: string]: string; // Any string key must have a string value
}

const translations: Dictionary = {
    hello: "Hola",
    goodbye: "Adiós",
    thankyou: "Gracias"
};

// 5. Interface for Arrays and Tuples
interface StringArray {
    [index: number]: string;
}
const list: StringArray = ["Apple", "Banana", "Cherry"];

interface Coordinate {
    0: number; // Latitude
    1: number; // Longitude
}
const location: Coordinate = [40.7128, -74.0060];

// --- Testing Interface Concepts ---

console.log("--- Interface Tests ---");
console.log(`Person: ${student.name}, Age: ${student.age}`);
console.log(`Employee 1: ${emp1.ename}, Dept: ${emp1.edepartment ?? "N/A"}`);
myBook.display();
console.log(`Translation for 'hello': ${translations["hello"]}`);
console.log(`Location: ${location[0]}, ${location[1]}`);
