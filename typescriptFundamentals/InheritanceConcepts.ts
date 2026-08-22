/**
 * TypeScript Inheritance Concepts
 *
 * Inheritance allows a class (child/subclass) to inherit properties and methods from another class (parent/superclass).
 *
 * Key Concepts:
 * 1. 'extends' keyword: Used to create a child class from a parent class.
 * 2. 'super()': Calls the parent class constructor.
 * 3. Method Overriding: Redefining a parent method in the child class to change its behavior.
 * 4. Method Extension: Calling the parent method using 'super.methodName()' and adding new logic.
 * 5. Polymorphism: Using a parent class reference to hold a child class object.
 */

export {}; // Avoid global scope conflicts

class Vehicle {
    // Using parameter properties for brevity
    constructor(
        public name: string,
        public color: string,
        public model: string
    ) {}

    public start(): void {
        console.log(`${this.name} started...`);
    }

    public stop(): void {
        console.log(`${this.name} stopped...`);
    }

    public displayInformation(): string {
        return `Vehicle: ${this.name}, Color: ${this.color}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(
        year: number,
        name: string,
        color: string,
        model: string
    ) {
        super(name, color, model); // Required call to parent constructor
        this.year = year;
    }

    public year: number;

    // Method Overriding: Completely replaces the parent's start() behavior
    public override start(): void {
        console.log(`${this.name} (Car) is revving its engine and starting...`);
    }

    // Method Extension: Reuses parent logic and adds more
    public stop(): void {
        super.stop(); // Call parent stop()
        console.log(`${this.name} has applied the parking brake.`);
    }

    public getFullDetails(): void {
        console.log(`${this.displayInformation()}, Year: ${this.year}`);
    }
}

class ElectricCar extends Car {
    constructor(
        year: number,
        name: string,
        color: string,
        model: string,
        public batteryCapacity: number
    ) {
        super(year, name, color, model);
    }

    // Overriding start for Electric Cars
    public override start(): void {
        console.log(`${this.name} (Electric) silently powers on...`);
    }

    public checkBattery(): void {
        console.log(`Battery capacity for ${this.name} is ${this.batteryCapacity} kWh.`);
    }
}

// --- Testing Inheritance ---

console.log("--- Basic Inheritance ---");
const myHonda = new Car(2025, "Honda", "Red", "City");
myHonda.start(); // Overridden version
myHonda.stop();  // Extended version (calls super.stop)
myHonda.getFullDetails();

console.log("\n--- Multi-level Inheritance ---");
const myTesla = new ElectricCar(2024, "Tesla", "White", "Model 3", 75);
myTesla.start(); // ElectricCar override
myTesla.stop();  // Car extension
myTesla.checkBattery();

console.log("\n--- Polymorphism ---");
// A Vehicle reference can hold any object that "is a" Vehicle
const vehicles: Vehicle[] = [
    new Vehicle("Generic Bike", "Blue", "X1"),
    new Car(2020, "Toyota", "Silver", "Camry"),
    new ElectricCar(2023, "Rivian", "Green", "R1T", 135)
];

vehicles.forEach(v => {
    v.start(); // Calls the specific implementation for each object (Polymorphism)
});
