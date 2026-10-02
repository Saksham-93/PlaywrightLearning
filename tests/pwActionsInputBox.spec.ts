import {test,expect,Locator} from "@playwright/test"

/**
 * Test Case: Handling PW Actions Input Box
 *
 * Context:
 * This test demonstrates how to interact with basic input fields in Playwright.
 * It covers locating elements by placeholder, verifying state (visibility, enabled),
 * checking attributes (maxlength), filling values, and validating the input.
 */
test("Handling PW Actions Input Box" , async({page})=>{

    // Navigate to the practice page
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Locate the input field using its placeholder text
    let inputName:Locator = page.getByPlaceholder("Enter Name")

    // Verify that the input box is visible to the user
    await expect(inputName).toBeVisible()
    // Verify that the input box is enabled and can be interacted with
    await expect(inputName).toBeEnabled()

    // Extract and verify the 'maxlength' attribute to ensure input constraints are correct
    const maxLength:string | null = await inputName.getAttribute("maxlength")
    expect(maxLength).toBe("15")

    // Type the name into the input box
    await inputName.fill("Saksham")

    // Retrieve the current value of the input field to validate it was entered correctly
    let name:string = await inputName.inputValue()
    console.log(name)
    expect(name).toBe("Saksham")
})
