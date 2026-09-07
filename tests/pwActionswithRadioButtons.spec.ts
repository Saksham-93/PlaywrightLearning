import {test,expect,Locator} from "@playwright/test"

/**
 * This test suite demonstrates how to interact with Radio Buttons in Playwright.
 * It covers enabling checks and selecting a specific radio button by its label.
 */

test("Handling Playwright Action with Radio Button " , async({page})=>{
    // Navigate to the practice page
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Locate the 'Male' radio button using getByLabel
    // .first() is used in case there are multiple matches to ensure we get the intended one
    const maleRadioBtn:Locator = page.getByLabel("Male").first()

    // Verify the radio button is enabled and interactable
    await expect(maleRadioBtn).toBeEnabled()

    // Select the radio button
    await maleRadioBtn.check()

    // Verify that the radio button is now checked
    await expect(maleRadioBtn).toBeChecked()
})