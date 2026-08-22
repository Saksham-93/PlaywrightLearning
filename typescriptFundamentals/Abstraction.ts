/**
 * TypeScript Abstraction
 *
 * Abstraction is the process of hiding the complex implementation details and
 * showing only the necessary features of an object. It reduces complexity
 * by allowing the developer to focus on what an object does instead of how it does it.
 *
 * Key Concepts:
 * 1. Abstract Classes: Classes that cannot be instantiated directly. They serve as blueprints for other classes.
 * 2. Abstract Methods: Methods declared in an abstract class that have no implementation. Child classes MUST implement these methods.
 * 3. Concrete Methods: Regular methods in an abstract class that provide a default implementation.
 * 4. Abstract Class vs Interface:
 *    - Interfaces define a contract (structure).
 *    - Abstract Classes define a base identity and can provide shared logic (implementation).
 */

export {}; // Avoid global scope conflicts

// --- 1. Defining an Abstract Class ---

abstract class Appliance {
    constructor(public brand: string, public model: number) {}

    // Abstract Method: No implementation here.
    // Every appliance must have a way to turn on, but the "how" differs per appliance.
    abstract turnOn(): void;
    abstract turnOff(): void;

    // Concrete Method: Shared logic available to all child classes.
    public displayDetails(): void {
        console.log(`Appliance: ${this.brand} Model ${this.model}`);
    }
}

// --- 2. Implementing Concrete Classes ---

class WashingMachine extends Appliance {
    public mode: string = "Quick Wash";

    // Implementing the abstract methods required by Appliance
    public override turnOn(): void {
        console.log(`${this.brand} Washing Machine is starting the ${this.mode} cycle...`);
    }

    public override turnOff(): void {
        console.log(`${this.brand} Washing Machine is draining water and powering off.`);
    }

    public setMode(newMode: string): void {
        this.mode = newMode;
        console.log(`Mode changed to: ${this.mode}`);
    }
}

class Microwave extends Appliance {
    public powerLevel: number = 800;

    // Implementing the abstract methods required by Appliance
    public override turnOn(): void {
        console.log(`${this.brand} Microwave is heating at ${this.powerLevel}W...`);
    }

    public override turnOff(): void {
        console.log(`${this.brand} Microwave is beeping and powering off.`);
    }
}

// --- 3. Testing Abstraction ---

console.log("--- Abstraction Tests ---");

// const genericAppliance = new Appliance("Generic", 101);
// ERROR: Cannot create an instance of an abstract class.

const myWasher = new WashingMachine("LG", 2024);
myWasher.displayDetails(); // Using the concrete method from base class
myWasher.turnOn();         // Using the implementation in WashingMachine
myWasher.setMode("Heavy Duty");
myWasher.turnOn();
myWasher.turnOff();

console.log("");

const myMicrowave = new Microwave("Samsung", 505);
myMicrowave.displayDetails();
myMicrowave.turnOn();
myMicrowave.turnOff();

// --- Summary: Abstract Class vs Interface ---
/*
| Feature             | Interface               | Abstract Class               |
|---------------------|-------------------------|------------------------------|
| Instantiation       | No                      | No                           |
| Implementation      | No (signatures only)     | Yes (can have logic)         |
| Multiple Inheritance| Yes (can extend many)   | No (extends only one class)  |
| Purpose             | Defines a contract      | Defines a base identity      |
*/
