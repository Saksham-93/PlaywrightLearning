/**
 * TypeScript Modules
 *
 * Modules allow you to split your code into separate files, making it
 * more maintainable and reusable.
 *
 * Key Concepts:
 * 1. Named Exports: Exporting specific variables, functions, or classes.
 * 2. Default Exports: Exporting a single primary entity from a module.
 * 3. Importing: Using the 'import' keyword to use exported members in another file.
 * 4. Static Members in Modules: Combining modules with static class methods.
 */

export {}; // This file itself is a module

// 1. Named Export of a function
export function add(a: number, b: number): number {
    return a + b;
}

// 2. Named Export of a class
export class Formatter {
    // Static method: Accessible without creating an instance
    static toUpper(str: string): string {
        return str.toUpperCase();
    }

    // Instance method: Requires 'new Formatter()'
    public formatGreeting(name: string): string {
        return `Hello, ${this.toUpper(name)}!`;
    }
}

// 3. Default Export (Example: A config object)
const config = {
    apiVersion: "1.0",
    environment: "development"
};
export default config;
