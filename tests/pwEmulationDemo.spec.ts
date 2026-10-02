import {test,devices} from "@playwright/test"

/**
 * Test Case: Emulator Test - Device Emulation
 *
 * Context:
 * This test demonstrates how to emulate specific mobile devices or screen sizes
 * using Playwright's built-in `devices` library.
 *
 * Key Concepts:
 * - Device Emulation: Simulates the viewport size, user agent, and device scale factor
 *   of a specific device (e.g., iPhone 15).
 * - browser.newContext(): By passing a device configuration from `devices`, we can
 *   force the browser to render the page as it would appear on that mobile device.
 *
 * This is essential for testing Responsive Web Design (RWD) and ensuring that
 * mobile-specific UI elements and behaviors work correctly.
 */
test("Emulator test on iPhone 15",async({browser})=>{

    // Create a new browser context with iPhone 15 emulation settings
    // devices['iPhone 15'] contains the viewport, userAgent, and deviceScaleFactor for that device
    const context = await browser.newContext({...devices['iPhone 15']})
    const page = await context.newPage()

    // Navigate to a website to verify the mobile layout
    await page.goto("https://www.google.com")

    // Pause to observe the mobile rendering in headed mode
    await page.waitForTimeout(10000)

    // Clean up
    await context.close()
})
