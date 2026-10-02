import {test,chromium} from "@playwright/test"

/**
 * Test Case: Browser Context Demo
 *
 * Context:
 * This test demonstrates the Playwright hierarchy: Browser -> BrowserContext -> Page.
 *
 * Key Concepts:
 * 1. Browser: A physical browser instance (e.g., Chromium, Firefox, WebKit).
 * 2. BrowserContext: An isolated "incognito-like" session within the browser.
 *    Contexts provide complete isolation of cookies, local storage, and cache.
 * 3. Page: A single tab or window within a BrowserContext.
 *
 * Why use multiple contexts?
 * - To simulate multiple users/sessions in a single test without restarting the browser.
 * - To test multi-user interactions (e.g., Chat app: User A sends, User B receives).
 * - To maintain total isolation between different test scenarios for reliability.
 */
test("Browser Context Demo",async()=>{
    // Launch the Chromium Browser instance
    const browser = await chromium.launch()

    // Create two separate, isolated browser contexts
    // Each context is like a fresh incognito window
    const context1 = await browser.newContext()
    const context2 = await browser.newContext()

    // Create a new page (tab) within each context
    const context1_page = await context1.newPage()
    const context2_page = await context2.newPage()

    // Navigate both pages to the same URL
    // Because they are in different contexts, they have separate cookies/sessions
    await context1_page.goto("https://sdetqa.vercel.app/autoplay.html")
    await context2_page.goto("https://sdetqa.vercel.app/autoplay.html")

    await context1_page.waitForTimeout(3000)
    await context2_page.waitForTimeout(3000)

    // Clean up: Close contexts and then the browser
    await context1.close()
    await context2.close()

    await browser.close()
})
