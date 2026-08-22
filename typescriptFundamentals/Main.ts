/**
 * TypeScript Main Entry Point
 *
 * This file demonstrates how to import and use members from different modules.
 * It serves as the entry point for executing the logic defined across the project.
 */

import { add, Formatter } from "./Module";
import defaultCfg from "./Module"; // Importing the default export

console.log("--- Module Integration Tests ---");

// Testing the named export 'add' function
const sum = add(10, 20);
console.log(`Sum from module: ${sum}`);

// Testing the static method of the named export 'Formatter' class
const upperStr = Formatter.toUpper("welcome to typescript");
console.log(`Formatted string: ${upperStr}`);

// Testing the instance method of Formatter
const myFormatter = new Formatter();
console.log(myFormatter.formatGreeting("saksham"));

// Testing the default export config
console.log(`API Version: ${defaultCfg.apiVersion}, Env: ${defaultCfg.environment}`);
