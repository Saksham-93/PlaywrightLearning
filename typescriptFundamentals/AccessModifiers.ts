/**
 * TypeScript Access Modifiers
 *
 * Access modifiers control the visibility of class members (properties and methods).
 *
 * 1. public (default): Accessible from anywhere.
 * 2. private: Accessible only within the class it is defined in.
 * 3. protected: Accessible within the class it is defined in and its subclasses.
 * 4. readonly: Prevents a property from being modified after initialization.
 */

export {}; // Ensures the file is treated as a module to avoid global scope conflicts

class Parent {
    // Using "Parameter Properties" shorthand in constructor below
    // This automatically declares the property and assigns the value
    constructor(
        public name: string,           // Accessible everywhere
        protected age: number,         // Accessible in Parent and Child
        private ssn: number,          // Accessible only in Parent
        public readonly nationality: string // Accessible everywhere, but cannot be changed
    ) {}

    public displayParentInfo(): void {
        console.log("--- Parent Info ---");
        console.log(`Name: ${this.name}`);       // OK
        console.log(`Age: ${this.age}`);         // OK
        console.log(`SSN: ${this.getSsn()}`);     // OK: Using the private method here
        console.log(`Nationality: ${this.nationality}`); // OK
    }

    private getSsn(): number {
        return this.ssn;
    }
}

class Child extends Parent {
    constructor(
        name: string,
        age: number,
        ssn: number,
        nationality: string,
        private employeeId: number // Only accessible in Child
    ) {
        super(name, age, ssn, nationality);
    }

    public displayChildInfo(): void {
        console.log("--- Child Info ---");
        console.log(`Name: ${this.name}`);       // OK: public
        console.log(`Age: ${this.age}`);         // OK: protected
        console.log(`Employee ID: ${this.employeeId}`); // OK: private to Child

        // console.log(this.ssn);
        // ERROR: Property 'ssn' is private and only accessible within class 'Parent'.
    }
}

// --- Testing Access Modifiers ---

const parent = new Parent("John Doe", 50, 123456, "American");
parent.name = "John Updated";      // OK: public
// parent.age = 51;               // ERROR: protected
// parent.ssn = 999999;           // ERROR: private
// parent.nationality = "Canadian"; // ERROR: readonly

parent.displayParentInfo();

const child = new Child("Jane Doe", 25, 789012, "American", 101);
child.name = "Jane Updated";     // OK: public
// child.age = 26;                // ERROR: protected
// child.employeeId = 102;       // ERROR: private

child.displayChildInfo();

console.log("\nAccess Summary:");
console.log(`Public: ${parent.name} (Accessible)`);
console.log(`Protected: Accessible in Child, but not outside the class hierarchy.`);
console.log(`Private: Accessible only in the defining class.`);
console.log(`Readonly: Defined once, cannot be modified.`);