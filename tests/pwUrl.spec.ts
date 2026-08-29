/**
 * Playwright Test: Page URL Verification
 *
 * This test case verifies that the browser navigates to the specified URL
 * and validates that the resulting URL matches the expected pattern.
 *
 * Purpose: Learning how to use page.url() and expect(page).toHaveURL().
 */


import {test,expect} from "@playwright/test"

test("Verify the page url", async ({page})=>{

    //step1
    await page.goto("https://www.google.com")

    let url:string = await page.url()

    console.log(url)

    await expect(page).toHaveURL(/google/)

})