import { test, expect } from "@playwright/test";

/**
 * Spec file to demonstrate Playwright Infinite Scrolling Dropdown handling.
 *
 * This spec showcases how to interact with a <select> element that loads items
 * dynamically as the user scrolls through the list.
 *
 * Key Concepts Demonstrated:
 * 1. Element-Level Infinite Scrolling: Moving the scroll position of a select element
 *    until a specific option is loaded into the DOM.
 * 2. Browser-Side Loop: Using page.evaluate() to run the scroll-and-check loop
 *    directly in the browser context for maximum performance.
 * 3. Async Synchronization: Using Promises within evaluate to allow lazy-loaded
 *    content to render.
 * 4. Selection: Using selectOption to pick the target item once it is available.
 */

test("Infinite Scroll Dropdown Selection Demo", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/autoplay");

    const dropdown = page.locator('#scrollable');
    const targetItem = "Item 200";

    console.log(`Searching for ${targetItem} using optimized browser-side scrolling...`);

    // Perform the infinite scroll logic directly inside the browser for efficiency
    await dropdown.evaluate(async (select: HTMLSelectElement, itemText: string) => {
        while (true) {
            // Check whether the target item is available in the current options list
            const itemFound = Array.from(select.options).some(option => option.text === itemText);

            if (itemFound) {
                console.log(`Found ${itemText} in the DOM!`);
                break;
            }

            // Scroll to the bottom of the dropdown to trigger lazy loading of more items
            select.scrollTop = select.scrollHeight;

            // Wait for new items to load from the server/API
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
    }, targetItem);

    // Select the target option (Playwright automatically handles scrolling to the element)
    await dropdown.selectOption({ label: targetItem });

    // Validation: Verify that the correct item is selected
    // For <select> elements, toHaveValue checks the 'value' attribute.
    // If the value is the same as the label, this works perfectly.
    await expect(dropdown).toHaveValue(targetItem);

    console.log(`Successfully selected and verified: ${targetItem}`);
});
