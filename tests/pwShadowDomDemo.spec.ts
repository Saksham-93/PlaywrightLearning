import { test, expect } from "@playwright/test";

/**
 * Spec file to demonstrate Playwright Shadow DOM interactions.
 *
 * Key Concept:
 * Playwright's locators are designed to be "Shadow DOM aware." This means
 * that standard locators (like page.locator(), getByRole(), etc.) automatically
 * pierce through shadow roots to find elements, provided the shadow root is
 * "open" (which is the standard for most web components).
 *
 * In this demo, we interact with elements inside the #shadow_host element,
 * showcasing that no special 'shadowRoot' traversal is required in Playwright.
 */

test("Shadow DOM Elements Interaction Demo", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/autoplay");

    // Target the shadow host
    const shadowHost = page.locator('#shadow_host');
    await expect(shadowHost).toBeVisible();

    // 1. Interact with an input field inside the Shadow DOM
    // We scope the locator to #shadow_host to avoid strict mode violations
    // with other input[type="text"] elements on the page.
    const shadowInput = page.locator('#shadow_host input[type="text"]');
    await shadowInput.fill("Playwright Shadow DOM");
    await expect(shadowInput).toHaveValue("Playwright Shadow DOM");

    // 2. Interact with a checkbox inside the Shadow DOM
    const shadowCheckbox = page.locator('#shadow_host input[type="checkbox"]');
    await shadowCheckbox.check();
    await expect(shadowCheckbox).toBeChecked();

    // 3. Interact with a link inside the Shadow DOM
    // We use a simple text-based locator which Playwright uses to pierce shadow roots
    const youtubeLink = page.getByText('Youtube', { exact: false });
    await expect(youtubeLink).toBeVisible();
    await expect(youtubeLink).toHaveText(/Youtube/i);

    // 4. Verify text content inside the Shadow DOM
    const infoText = page.locator('#shadow_host span.info');
    await expect(infoText).toContainText("Mobiles");

    console.log("Successfully interacted with multiple elements inside the Shadow DOM!");
});
