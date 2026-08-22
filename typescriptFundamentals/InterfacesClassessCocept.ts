/**
 * TypeScript Interfaces and Classes
 *
 * While 'extends' is for inheritance between similar types (Class to Class, Interface to Interface),
 * 'implements' is used when a class wants to adhere to a contract defined by an interface.
 *
 * Key Concepts:
 * 1. 'implements' keyword: Forces a class to define all properties and methods specified in the interface.
 * 2. Decoupling: Interfaces allow you to separate the definition of a "behavior" from its actual implementation.
 * 3. Multiple Implementation: A single class can implement multiple interfaces.
 * 4. Interface-based Polymorphism: Writing code that works with any class as long as it implements a specific interface.
 */

export {}; // Avoid global scope conflicts

// Contract 1: Ability to make a sound
interface SoundMaker {
    sound(): void;
}

// Contract 2: Ability to be fed
interface Feedable {
    eat(food: string): void;
}

// Class Dog implements both SoundMaker and Feedable
class Dog implements SoundMaker, Feedable {
    constructor(public name: string, public breed: string) {}

    public sound(): void {
        console.log(`${this.name} the ${this.breed} is barking: Woof! Woof!`);
    }

    public eat(food: string): void {
        console.log(`${this.name} is happily eating ${food}.`);
    }
}

// Class Cat implements both SoundMaker and Feedable
class Cat implements SoundMaker, Feedable {
    constructor(public name: string) {}

    public sound(): void {
        console.log(`${this.name} the cat is meowing: Meow!`);
    }

    public eat(food: string): void {
        console.log(`${this.name} is delicately eating ${food}.`);
    }
}

// --- Interface-based Polymorphism ---

// This function doesn't care if it's a Dog, Cat, or Robot,
// as long as it's a 'SoundMaker'.
function playSound(animal: SoundMaker) {
    console.log("Playing sound...");
    animal.sound();
}

// This function works with any 'Feedable' object.
function feedAnimal(animal: Feedable, food: string) {
    console.log(`Feeding time!`);
    animal.eat(food);
}

// --- Testing Interface and Class Concepts ---

console.log("--- Interfaces and Classes Tests ---");

const myDog = new Dog("Buddy", "Golden Retriever");
const myCat = new Cat("Luna");

// Polymorphic calls
playSound(myDog);
playSound(myCat);

feedAnimal(myDog, "Kibble");
feedAnimal(myCat, "Tuna");

console.log("\nPolymorphism in action: Different classes, same interface contract.");
