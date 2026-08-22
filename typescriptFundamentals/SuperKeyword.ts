/**
 * TypeScript 'super' Keyword
 *
 * The 'super' keyword is used in a derived (child) class to access and call
 * functionality from the base (parent) class.
 *
 * Key Concepts:
 * 1. super(): Calls the parent class constructor. This MUST be called before 'this' is used in the child constructor.
 * 2. super.methodName(): Calls a method from the parent class, allowing the child to extend its logic rather than completely replacing it.
 * 3. Context: 'super' is only available within classes that extend another class.
 */

export {}; // Avoid global scope conflicts

class Parent {
    public num: number = 10;

    constructor() {
        console.log("Parent Class: Constructor executed.");
    }

    public show(): void {
        console.log("Parent Class: show() method called.");
    }
}

class Child extends Parent {
    public num: number = 20;

    constructor() {
        // Call parent constructor first
        super();
        console.log("Child Class: Constructor executed.");
    }

    public show(): void {
        // Call the parent's version of the show() method
        super.show();
        console.log(`Child Class: show() method called. Number is ${this.num}`);
    }

    public displayBoth(): void {
        console.log(`Child value: ${this.num}`);
        // Note: we cannot call super.num directly as it's a property,
        // but we can access it if it's public/protected.
        // However, if it's shadowed (re-declared in child), this.num refers to child.
    }
}

// --- Testing 'super' ---

console.log("--- 'super' Keyword Tests ---");

const ch = new Child();
ch.show();

console.log("\nTesting property shadowing:");
const parentInstance = new Parent();
console.log(`Parent num: ${parentInstance.num}`);

const childInstance = new Child();
console.log(`Child num: ${childInstance.num}`);
