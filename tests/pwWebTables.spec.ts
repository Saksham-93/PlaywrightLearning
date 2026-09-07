import { test, expect, Locator } from "@playwright/test";

/**
 * This test suite demonstrates how to handle static web tables in Playwright.
 * It covers counting rows and columns, extracting specific cell data,
 * and validating table headers.
 */

test("Basic Web Table Operations", async ({ page }) => {
    // Navigate to a page with a data table
    await page.goto("https://demoqa.com/web-tables");

    // 1. Validate Table Headers
    const headers: Locator = page.locator(".rt-th");
    const headerTexts = await headers.allTextContents();

    console.log("Table Headers:", headerTexts);
    expect(headerTexts).toContain("First Name");
    expect(headerTexts).toContain("Last Name");
    expect(headerTexts).toContain("Email");

    // 2. Count Total Rows and Columns
    // We target the table body cells to get actual data rows
    const rows: Locator = page.locator(".rt-tr-group");
    const cols: Locator = page.locator(".rt-th");

    const rowCount = await rows.count();
    const colCount = await cols.count();

    console.log(`Table has ${rowCount} rows and ${colCount} columns`);
    expect(rowCount).toBeGreaterThan(0);

    // 3. Extract data from a specific cell (e.g., Row 2, Col 1)
    // Note: indices are 0-based
    const targetRow = rows.nth(1); // Second row
    const targetCell = targetRow.locator(".rt-td").nth(0); // First column
    const cellValue = await targetCell.innerText();

    console.log("Value at Row 2, Col 1:", cellValue);
    expect(cellValue).not.toBe("");
});

test("Verify Table Content across all rows", async ({ page }) => {
    await page.goto("https://demoqa.com/web-tables");

    const rows: Locator = page.locator(".rt-tr-group");
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {
        const cells = rows.nth(i).locator(".rt-td");
        const firstName = await cells.nth(0).innerText();
        const lastName = await cells.nth(1).innerText();

        console.log(`Row ${i + 1}: ${firstName} ${lastName}`);
        expect(firstName).not.toBe("");
    }
});
