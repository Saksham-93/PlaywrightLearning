/**
 * TypeScript Classes and Advanced Concepts
 *
 * This file covers:
 * 1. Classes: Blueprints for creating objects.
 * 2. Readonly Properties: Properties that cannot be changed after initialization.
 * 3. Optional Properties: Properties that may or may not be provided (using ?).
 * 4. Static Members: Variables and methods that belong to the class itself, not instances.
 * 5. Getters and Setters: Methods used to control access to a property.
 */

export {}; // Avoid global scope conflicts

class Student {
    // Static property: Shared across all instances of Student
    static schoolName: string = "Greenwood High";

    // Using Parameter Properties in the constructor:
    // 'readonly' ensures studentId cannot be modified.
    // 'email' is optional (marked with ?).
    constructor(
        public readonly studentId: number,
        private _name: string,
        public email?: string
    ) {}

    // Getter for name: Allows controlled read access to the private _name property
    get name(): string {
        return this._name;
    }

    // Setter for name: Allows controlled write access with validation
    set name(newName: string) {
        if (newName.trim().length > 0) {
            this._name = newName;
        } else {
            console.error("Error: Name cannot be empty.");
        }
    }

    public displayInfo(): void {
        console.log(`--- Student Info [ID: ${this.studentId}] ---`);
        console.log(`Name: ${this.name}`);

        // Handling optional property with optional chaining or nullish check
        console.log(`Email: ${this.email ?? "Email not provided"}`);
        console.log(`School: ${Student.schoolName}`);
    }

    // Static method: Can be called without creating an instance of the class
    static changeSchoolName(newName: string): void {
        Student.schoolName = newName;
        console.log(`School name updated to: ${Student.schoolName}`);
    }
}

// --- Testing the Concepts ---

// 1. Creating instances
const stu1 = new Student(101, "Saksham"); // No email provided
const stu2 = new Student(102, "Alice", "alice@example.com");

stu1.displayInfo();
stu2.displayInfo();

// 2. Testing Readonly
// stu1.studentId = 105; // ERROR: Cannot assign to 'studentId' because it is a read-only property.

// 3. Testing Getters and Setters
console.log(`\nUpdating name for stu1...`);
stu1.name = "Saksham Sahani"; // Uses setter
console.log(`New Name: ${stu1.name}`); // Uses getter

stu1.name = ""; // Triggers setter validation error

// 4. Testing Static Members
console.log(`\nDefault School: ${Student.schoolName}`);
Student.changeSchoolName("Sunrise Academy");
console.log(`Updated School for all: ${Student.schoolName}`);

// Instance cannot access static method directly
// stu1.changeSchoolName("Fail"); // ERROR: Property 'changeSchoolName' does not exist on type 'Student'.
