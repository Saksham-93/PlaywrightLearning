import {test,expect} from "@playwright/test"

/**
 * Test Case: Auth Popup (Basic Authentication)
 *
 * Context:
 * This test demonstrates how to handle Basic HTTP Authentication in Playwright.
 * Instead of dealing with the browser's native auth popup, we provide the
 * credentials directly within the BrowserContext configuration.
 */
test("Auth Popup",async({browser})=>{

    // Create a new context with httpCredentials to bypass the Basic Auth popup automatically
    const context = await browser.newContext(
        {
            httpCredentials:{
                username:"admin",
                password:"admin"
            }
        }
    )

    const page = await context.newPage()

    // Navigate to the page protected by Basic Auth
    await page.goto("https://the-internet.herokuapp.com/basic_auth")

    // The content can take time to load after authentication.
    // Instead of a hard sleep, we use a locator-based assertion which has built-in auto-waiting.
    const successMessageLocator = page.locator('#content > div.example > p')

    // toBeVisible() ensures the element is present and visible before proceeding
    await expect(successMessageLocator).toBeVisible()

    const expectedString:string|null = await successMessageLocator.textContent()

    expect(expectedString).toContain("Congratulations! You must have the proper credentials.")

    await context.close()
})
