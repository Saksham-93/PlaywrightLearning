import { test, expect, Browser, BrowserContext, Page } from "@playwright/test";

/**
 * Test Suite: Playwright Built-in Fixtures Demo
 *
 * Purpose:
 * This suite demonstrates the difference between the built-in Playwright fixtures:
 * 'browser', 'context', and 'page'.
 *
 * Understanding Fixtures:
 * 1. { browser }: The root fixture. Represents the browser process.
 *    - Use this when you need to create multiple isolated contexts manually.
 * 2. { context }: A BrowserContext fixture. An isolated "incognito" session.
 *    - Playwright creates a new context for every single test by default.
 * 3. { page }: A Page fixture. A single tab within the current context.
 *    - This is the most common fixture used for standard tests.
 */

test.describe("Built-in Fixtures Comparison", () => {

    test("Showcase { page } fixture - Standard Use Case", async ({ page }) => {
        console.log("--- Running Page Fixture Test ---");

        // The 'page' fixture is automatically created within a fresh context
        await page.goto("https://sdetqa.vercel.app/autoplay.html");

        // Simple verification
        await expect(page).toHaveURL(/autoplay.html/);
        console.log("Page fixture: Successfully navigated to page in an auto-created context.");
    });

    test("Showcase { context } fixture - Session Control", async ({ context, page }) => {
        console.log("--- Running Context Fixture Test ---");

        // We have access to the context that the 'page' belongs to.
        // We can use this to manipulate session state, cookies, or permissions.
        const currentContext = context;

        // Example: Adding a cookie to the current context
        await currentContext.addCookies([{
            name: 'test_cookie',
            value: 'playwright_learning',
            domain: 'sdetqa.vercel.app',
            path: '/'
        }]);

        await page.goto("https://sdetqa.vercel.app/autoplay.html");

        // Verify cookie was set in this specific context
        const cookies = await currentContext.cookies();
        const hasCookie = cookies.some(c => c.name === 'test_cookie');
        expect(hasCookie).toBe(true);

        console.log("Context fixture: Successfully manipulated session state for the current page.");
    });

    test("Showcase { browser } fixture - Full Control", async ({ browser }) => {
        console.log("--- Running Browser Fixture Test ---");

        // The 'browser' fixture gives us the browser instance.
        // We can create completely independent contexts manually here.

        // Create Context A
        const contextA = await browser.newContext();
        const pageA = await contextA.newPage();
        await pageA.goto("https://sdetqa.vercel.app/autoplay.html");

        // Create Context B (completely isolated from A)
        const contextB = await browser.newContext();
        const pageB = await contextB.newPage();
        await pageB.goto("https://sdetqa.vercel.app/autoplay.html");

        console.log(`Page A URL: ${pageA.url()}`);
        console.log(`Page B URL: ${pageB.url()}`);

        // Cleanup manual contexts
        await contextA.close();
        await contextB.close();

        console.log("Browser fixture: Manually created and managed two isolated contexts.");
    });
});
