/**
 * TypeScript Extending Interfaces
 *
 * Just like classes, interfaces can inherit from other interfaces using the 'extends' keyword.
 * This allows us to build complex types by combining smaller, simpler ones.
 *
 * Key Concepts:
 * 1. Single Inheritance: A child interface inherits all properties of a parent interface.
 * 2. Multiple Inheritance: An interface can extend multiple other interfaces.
 * 3. Type Composition: Building a specialized type from general building blocks.
 */

export {}; // Avoid global scope conflicts

// --- Basic Extension ---

interface Animal {
    name: string;
    species: string;
}

// Dog extends Animal: it must have name, species, AND color
interface Dog extends Animal {
    color: string;
    breed: string;
}

const myDog: Dog = {
    name: "Sheero",
    species: "Canine",
    color: "Black",
    breed: "Labrador"
};

// --- Multiple Interface Extension ---

interface Movable {
    speed: number;
    move(): void;
}

interface Flyable {
    altitude: number;
    fly(): void;
}

// Bird extends both Movable and Flyable
interface Bird extends Movable, Flyable {
    wingSpan: number;
}

const eagle: Bird = {
    speed: 50,
    altitude: 1000,
    wingSpan: 2.1,
    move() {
        console.log("The bird is moving on the ground...");
    },
    fly() {
        console.log("The bird is soaring in the sky!");
    }
};

// --- Type Composition Example ---

interface User {
    id: string;
    username: string;
}

interface AuthenticatedUser extends User {
    token: string;
    expiry: Date;
}

interface AdminUser extends AuthenticatedUser {
    permissions: string[];
}

const admin: AdminUser = {
    id: "uuid-123",
    username: "superadmin",
    token: "jwt-token-abc",
    expiry: new Date(),
    permissions: ["all_access", "manage_users"]
};

// --- Testing Extending Interfaces ---

console.log("--- Extending Interfaces Tests ---");
console.log(`Dog: ${myDog.name} the ${myDog.breed} (${myDog.color})`);
eagle.move();
eagle.fly();
console.log(`Admin ${admin.username} has ${admin.permissions.length} permissions.`);
