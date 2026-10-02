import {test,chromium} from "@playwright/test"

/**
 * Test Case: Role Based Access (RBAC) using Browser Contexts
 *
 * Context:
 * This test demonstrates how to simulate multiple users with different roles
 * (e.g., Admin and Customer) simultaneously in a single test execution.
 *
 * Key Learning:
 * By using separate `BrowserContext` instances, Playwright ensures that
 * cookies, sessions, and local storage are completely isolated. This allows us to
 * log in as two different users on the same website without the sessions
 * interfering with each other.
 */
test("Role Based Access",async()=>{

    // Launch the Chromium Browser instance
    const browser = await chromium.launch()

    // Setup Context and Page for User 1 (Admin/Standard User)
    const adminContext = await browser.newContext()
    const adminPage = await adminContext.newPage()

    // Setup Context and Page for User 2 (Customer/Visual User)
    const customerContext = await browser.newContext()
    const customerPage = await customerContext.newPage()

    // Process: Login as the first user (Admin)
    await adminPage.goto("https://www.saucedemo.com/")
    await adminPage.getByRole('textbox', { name: 'Username' }).fill("standard_user")
    await adminPage.locator('#password').fill("secret_sauce")
    await adminPage.locator('#login-button').click()

    // Process: Login as the second user (Customer) in the isolated context
    await customerPage.goto("https://www.saucedemo.com/")
    await customerPage.getByRole('textbox', { name: 'Username' }).fill("visual_user")
    await customerPage.locator('#password').fill("secret_sauce")
    await customerPage.locator('#login-button').click()

    console.log("Both users are logged in independently")

    // Wait to observe the independent sessions
    await adminPage.waitForTimeout(3000)
    await customerPage.waitForTimeout(3000)

    // Clean up: Close contexts and the browser instance
    await adminContext.close()
    await customerContext.close() // Changed from customerPage.close() to close the entire context

    await browser.close()

})
