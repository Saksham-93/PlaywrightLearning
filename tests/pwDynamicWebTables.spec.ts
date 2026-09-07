import { test, expect, Locator } from "@playwright/test";

/**
 * This test suite demonstrates handling dynamic web tables.
 * It covers adding new records, deleting records, and verifying
 * that the table updates dynamically without a full page reload.
 */

test("Dynamic Web Table - Add and Delete Records", async ({ page }) => {
    await page.goto("https://demoqa.com/web-tables");

    // --- Scenario 1: Add a Record ---
    await page.locator("#add").click();

    // Fill in the details for the new record
    await page.locator("#firstName").fill("Claude");
    await page.locator("#lastName").fill("Code");
    await page.locator("#userEmail").fill("claude@example.com");
    await page.locator("#submit").click();

    // Verify the new record is added to the table
    const rows = page.locator(".rt-tr-group");
    const allRowsText = await rows.allTextContents();
    const recordFound = allRowsText.some(text => text.includes("Claude"));

    expect(recordFound).toBe(true);
    console.log("Successfully added record: Claude Code");

    // --- Scenario 2: Delete a Record ---
    // Find the row containing "Claude" and click its delete button
    // We use a locator that finds the row containing the text and then finds the delete button within it
    const rowToDelete = page.locator(".rt-tr-group", { hasText: "Claude" });
    await rowToDelete.locator(".rt-td:has(.delete-record)").click();

    // Verify the record is removed
    const updatedRowsText = await rows.allTextContents();
    const recordStillExists = updatedRowsText.some(text => text.includes("Claude"));

    expect(recordStillExists).toBe(false);
    console.log("Successfully deleted record: Claude Code");
});

test("Dynamic Web Table - Sorting", async ({ page }) => {
    await page.goto("https://demoqa.com/web-tables");

    // Capture the first name of the first row before sorting
    const firstRowBefore = page.locator(".rt-tr-group").first().locator(".rt-td").first();
    const nameBefore = await firstRowBefore.innerText();
    console.log("First name before sorting:", nameBefore);

    // Click the 'First Name' header to sort
    await page.locator(".rt-th:has-text('First Name')").click();

    // Capture the first name after sorting
    const firstRowAfter = page.locator(".rt-tr-group").first().locator(".rt-td").first();
    const nameAfter = await firstRowAfter.innerText();
    console.log("First name after sorting:", nameAfter);

    // Verify that the first name has changed (indicating the sort worked)
    expect(nameBefore).not.toBe(nameAfter);
});
