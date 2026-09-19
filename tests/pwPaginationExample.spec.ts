import { test, expect } from "@playwright/test";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

test("Pagination table data extraction", async ({ page }) => {
    // Use a simple relative path that is more likely to work across different Playwright configs
    const filePath = 'testData.txt';

    // Clean up previous test data
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }

    await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");

    const tableRows = page.locator("#example tbody tr");
    const nextButton = page.locator("[data-dt-idx='next']");

    let hasNext = true;
    let pageCount = 1;

    while (hasNext) {
        // Ensure the table is loaded and visible
        await tableRows.first().waitFor({ state: 'visible' });

        // Capture the text of the first row to detect when the page actually changes
        const firstRowTextBefore = await tableRows.first().innerText();

        let pageDataString = `--- Page ${pageCount} ----\n`;

        // Get all current rows on the page
        const rows = await tableRows.all();

        for (const row of rows) {
            const cells = await row.locator('td').allTextContents();
            if (cells.length > 0) {
                pageDataString += cells.join(', ') + '\n';
            }
        }

        // Write only the current page data to the file
        fs.appendFileSync(filePath, pageDataString);
        console.log(`Extracted Page ${pageCount}`);

        if (await nextButton.isEnabled()) {
            await nextButton.click();
            pageCount++;

            // Wait for the content to actually change instead of using a hard timeout
            await expect(async () => {
                const currentFirstRowText = await tableRows.first().innerText();
                expect(currentFirstRowText).not.toBe(firstRowTextBefore);
            }).toPass();
        } else {
            console.log("Reached the last page.");
            hasNext = false;
        }
    }

    // Final assertion to verify the file was created and contains data
    expect(fs.existsSync(filePath)).toBe(true);
    const finalContent = fs.readFileSync(filePath, 'utf8');
    expect(finalContent.length).toBeGreaterThan(0);
});