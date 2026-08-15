/**
 * String Methods in TypeScript
 *
 * Strings are sequences of characters used to represent text.
 * TypeScript (via JavaScript) provides a rich set of built-in methods
 * to manipulate and analyze strings.
 */

// --- 1. Basic Properties & Character Access ---

const str: string = "Welcome to TypeScript";

console.log("Length of string:", str.length); // 20

/**
 * .charAt(index) - Returns the character at the specified index.
 */
console.log("Character at index 3:", str.charAt(3)); // 'c'

/**
 * Indexing via brackets (Alternative to charAt)
 */
console.log("Character at index 0:", str[0]); // 'W'


// --- 2. Searching and Existence ---

/**
 * .indexOf(substring) - Returns the first index of the search string, or -1 if not found.
 */
console.log("Index of 'come':", str.indexOf('come')); // 3

/**
 * .includes(substring) - Returns true if the string contains the specified value.
 * Note: String searches are case-sensitive.
 */
console.log("Includes 'abc':", str.includes('abc')); // false
console.log("Includes 'Welcome':", str.includes('Welcome')); // true

/**
 * .startsWith() and .endsWith() - Check if string begins or ends with specific characters.
 */
console.log("Starts with 'Wel':", str.startsWith('Wel')); // true
console.log("Ends with 'script':", str.endsWith('script')); // true


// --- 3. Extracting and Modifying ---

/**
 * .substring(startIndex, endIndex) - Extracts characters from startIndex up to (but not including) endIndex.
 */
console.log("Substring (2 to 4):", str.substring(2, 4)); // 'lc'

/**
 * .replace(searchValue, newValue) - Replaces the first occurrence of a value with another.
 */
console.log("Replace 'Welcome' with 'Hello':", str.replace("Welcome", "Hello"));


// --- 4. Splitting and Joining ---

/**
 * .split(separator) - Splits a string into an array of strings based on a separator.
 */
const credentials: string = "user@email.com,password123";
const parts = credentials.split(",");

console.log("Email:", parts[0]);     // user@email.com
console.log("Password:", parts[1]); // password123

/**
 * .join() - (Array method) Joins all elements of an array into a string.
 */
const words = ["TypeScript", "is", "awesome"];
console.log("Joined string:", words.join(" ")); // "TypeScript is awesome"


// --- 5. Trimming and Whitespace ---

/**
 * trim(), trimStart(), and trimEnd() remove whitespace from the edges of a string.
 */
const dirtyString = "   Hello World    ";
console.log(`"${dirtyString}"`);
console.log(`"${dirtyString.trim()}"`);       // "Hello World"
console.log(`"${dirtyString.trimStart()}"`); // "Hello World    "
console.log(`"${dirtyString.trimEnd()}"`);   // "   Hello World"


// --- 6. Case Conversion ---

console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());


// --- 7. Summary Table ---
/**
 * | Method         | Purpose                                    | Return Value       |
 * |----------------|--------------------------------------------|--------------------|
 * | .length        | Get total character count                   | number             |
 * | .charAt()      | Get character at index                      | string (char)      |
 * | .indexOf()     | Find position of substring                   | number (index/-1)   |
 * | .includes()    | Check if substring exists                   | boolean            |
 * | .substring()   | Extract part of string                      | string             |
 * | .replace()     | Replace part of string                      | string             |
 * | .split()       | Convert string to array                     | string[]           |
 * | .trim()        | Remove surrounding whitespace               | string             |
 * | .toLowerCase() | Convert to lowercase                        | string             |
 */
