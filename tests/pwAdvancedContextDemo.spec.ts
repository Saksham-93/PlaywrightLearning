import { test, expect, chromium } from "@playwright/test";

/**
 * Test Suite: Advanced Browser Context Configuration
 *
 * Purpose:
 * This suite demonstrates how to customize the BrowserContext to simulate
 * various real-world environments and user settings.
 *
 * Concepts Covered:
 * 1. Color Scheme (Dark/Light Mode)
 * 2. Geolocation (Fake GPS)
 * 3. Device Permissions (Camera, Microphone)
 * 4. Viewport (Screen Resolution)
 * 5. Ignoring HTTPS Errors (SSL Certifications)
 */

test.describe("Advanced Context Configurations", () => {

    test("Demonstrate Advanced Context Parameters", async ({ browser }) => {
        console.log("--- Launching Advanced Context ---");

        // Define advanced parameters for the context
        const context = await browser.newContext({
            // 1. Viewport: Setting a specific screen resolution
            viewport: { width: 1280, height: 720 },

            // 2. Color Scheme: Emulating Dark Mode
            colorScheme: 'dark',

            // 3. Permissions: Granting access to Camera and Microphone
            permissions: ['geolocation', 'camera', 'microphone'],

            // 4. Geolocation: Setting a fake GPS location (e.g., New York City)
            geolocation: { longitude: -74.0060, latitude: 40.7128 },

            // 5. SSL/HTTPS: Ignoring SSL certificate errors (useful for dev/test environments)
            ignoreHTTPSErrors: true,
        });

        const page = await context.newPage();

        // Navigate to a site that can detect these settings
        await page.goto("https://browserleaks.com/geo");

        // Verify the geolocation was applied (checking the page content for coordinates)
        const locationText = await page.innerText('body');
        console.log("Checking for simulated geolocation in page content...");
        // We expect the coordinates to be reflected on the page
        expect(locationText).toContain('40.7128');

        console.log("Advanced Context verification complete.");

        // Clean up
        await context.close();
    });

    test("Comparing Light vs Dark Mode rendering", async ({ browser }) => {
        console.log("--- Comparing Color Schemes ---");

        // Context 1: Light Mode
        const lightContext = await browser.newContext({ colorScheme: 'light' });
        const lightPage = await lightContext.newPage();
        await lightPage.goto("https://www.google.com");
        console.log("Light mode page loaded.");

        // Context 2: Dark Mode
        const darkContext = await browser.newContext({ colorScheme: 'dark' });
        const darkPage = await darkContext.newPage();
        await darkPage.goto("https://www.google.com");
        console.log("Dark mode page loaded.");

        await lightContext.close();
        await darkContext.close();
    });
});
