import {test,expect} from "@playwright/test"

/**
 * Test Suite: Handling New Tab/Window Demo
 *
 * Context:
 * This suite demonstrates how to handle new tabs or windows that open during
 * a user interaction in Playwright.
 *
 * Key Concept:
 * When a click opens a new window, we must use `context.waitForEvent('page')`
 * combined with `Promise.all` to capture the new page object as it is created.
 */

test("Handling New Tab Demo",async({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://sdetqa.vercel.app/autoplay")

    // Use Promise.all to wait for the 'page' event while clicking the button
    const [newTab]=await Promise.all(
        [
            context.waitForEvent('page'),
            page.getByRole("button",{name:"New Tab"}).click()
        ]
    )

    console.log("New Tab Title: " + await newTab.title())
    await expect(newTab).toHaveTitle(/Playwright/)

    await context.close()
})

test("Handling New Window Demo",async({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://sdetqa.vercel.app/autoplay")

    // Similarly, we capture the new window opened by the 'New Window' button
    const [newWindow]=await Promise.all(
        [
            context.waitForEvent('page'),
            page.getByRole("button",{name:"New Window"}).click()
        ]
    )

    console.log("New Window Title: " + await newWindow.title())

    // Verify that the new window navigates to the expected playwright.dev page
    await expect(newWindow).toHaveURL(/playwright.dev/)
    await expect(newWindow).toHaveTitle(/Playwright/)

    await context.close()
})
