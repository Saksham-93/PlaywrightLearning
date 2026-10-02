import {test,expect,Locator} from "@playwright/test"

/**
 * Test Suite: Handling Playwright Action with Radio Button
 *
 * Context:
 * This test suite demonstrates how to interact with Radio Buttons in Playwright.
 * Unlike checkboxes, radio buttons are typically used for mutually exclusive options.
 *
 * Key Learnings:
 * - Using `getByLabel` to locate radio buttons.
 * - Handling potential multiple matches with `.first()`.
 * - Verifying state using `toBeEnabled()` and `toBeChecked()`.
 */
test("Handling Playwright Action with Radio Button " , async({page})=>{
    // Navigate to the practice page
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Locate the 'Male' radio button using getByLabel
    // .first() is used in case there are multiple matches to ensure we get the intended one
    const maleRadioBtn:Locator = page.getByLabel("Male").first()

    // Verify the radio button is enabled and interactable
    await expect(maleRadioBtn).toBeEnabled()

    // Select the radio button (effectively clicking it)
    await maleRadioBtn.check()

    // Verify that the radio button is now checked
    await expect(maleRadioBtn).toBeChecked()
})
