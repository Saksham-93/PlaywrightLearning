# 🚀 Playwright & TypeScript Learning Journey

Welcome to the **PlaywrightLearning** repository! This project is a comprehensive learning journey focused on mastering **Playwright** for end-to-end automated testing and **TypeScript** fundamentals.

---

## 🎭 Playwright Automation Section

This section is dedicated to mastering the art of locating and interacting with web elements using various strategies.

### 🎯 Learning Objectives
- Verify basic page properties (Titles and URLs).
- Master multiple locator strategies to ensure robust and maintainable tests.
- Implement advanced DOM traversal techniques.

### 🛠️ Locator Strategies Covered

| Category | Focus Area | Key Concepts | Files |
| :--- | :--- | :--- | :--- |
| **Basics** | Page Verification | Title & URL validation | `tests/pwTitle.spec.ts`, `tests/pwUrl.spec.ts` |
| **CSS Locators** | Style-based Selection | ID, Class, Attributes, Absolute vs Relative | `tests/pwWithCssLocators.spec.ts` |
| **XPath Locators** | Path-based Selection | `contains()`, `starts-with()`, Indexing, Dynamic | `tests/pwWithXpathLocators.spec.ts` |
| **XPath Axes** | DOM Traversal | `self`, `parent`, `child`, `ancestor`, `descendant` | `tests/pwWithXpathAxesLocators.spec.ts` |
| **Built-in** | User-Centric Locators | `getByRole`, `getByText`, `getByLabel`, `getByTestId` | `tests/pwLocators.spec.ts` |

### 🚀 Running the Tests
To execute the Playwright tests, use the following commands:

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run tests in headed mode (to see the browser)
npx playwright test --headed

# Run a specific test file
npx playwright test tests/pwTitle.spec.ts
```

---

## 📘 TypeScript Fundamentals Section

Alongside automation, this repository tracks progress in mastering TypeScript, from basic syntax to Object-Oriented Programming.

### 📚 Table of Contents

#### 1. Language Basics
- **Variables & Basic Types**: `VariablesDemo.ts`, `STRINGS.ts`
- **Control Flow**: Conditionals, Loops (`for`, `while`, `do-while`), Jumping Statements.
- **Getting Started**: `firstDemo.ts`

#### 2. Functions
- **Core Concepts**: Function definitions and types.
- **Function Types**: Anonymous, Arrow, and Callback functions.
- **Advanced**: Function Overloading.

#### 3. Arrays
- **Fundamentals**: Array methods, Search & Manipulation (`indexOf`, `includes`, `splice`).
- **Higher-Order Methods**: `forEach`, `filter`, `map`, `reduce`.

#### 4. Types & Objects
- **Objects**: Type Aliases and Inline Type Objects.
- **Special Types**: Tuples.

#### 5. Object-Oriented Programming (OOP)
- **Classes & Interfaces**: Interface Extension, Interface vs Classes.
- **Inheritance & Polymorphism**: `super` keyword, Access Modifiers.

#### 6. Miscellaneous
- **Modules**: Learning how to structure code across files.
- **Documentation**: `TypeScriptLearningJourney.md`

---

## 📂 Project Structure

```text
.
├── tests/                   # Playwright test suites
│   └── *.spec.ts            # Individual locator and verification tests
├── typescriptFundamentals/  # TypeScript exercise files
│   └── *.ts                 # Language concept demonstrations
├── playwright.config.ts     # Playwright configuration
├── package.json             # Project dependencies and scripts
└── README.md                # Project overview (this file)
```

---
*This project serves as a living document of my progress in the modern web automation and development ecosystem.*
