/**
 * Playwright Test: Page Title Verification
 *
 * This test case verifies that the browser navigates to the specified URL
 * and correctly retrieves and validates the page title.
 *
 * Purpose: Learning how to use page.title() and expect(page).toHaveTitle().
 */


import {test,expect} from "@playwright/test"

test("Verify the page title", async ({page})=>{

    //step1
    await page.goto("https://www.google.com")

    let title:string = await page.title()

    console.log(title)

    await expect(page).toHaveTitle(title)

})