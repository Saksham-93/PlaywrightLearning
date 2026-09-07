import {test,expect} from "@playwright/test"

/**
 * This test suite demonstrates how to interact with a single-select dropdown.
 * It covers selecting a single option by visible text, value, label, and index,
 * as well as validating the dropdown options.
 */

test("Handling Dropdown in Playwright Option 1 By Visible Text" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Select the option that matches the visible text "India"
    await page.locator("#country").selectOption("India")
    await page.waitForTimeout(3000)
})

test("Handling Dropdown in Playwright Option 2 By Value" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Select the option using its internal 'value' attribute
    await page.locator("#country").selectOption({value:'uk'})
    await page.waitForTimeout(3000)
})

test("Handling Dropdown in Playwright Option 3 By label" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Select the option using its label
    await page.locator("#country").selectOption({label:'Japan'})
    await page.waitForTimeout(3000)
})

test("Handling Dropdown in Playwright Option 4 By index" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Select the option based on its zero-based index
    await page.locator("#country").selectOption({index:4})
    await page.waitForTimeout(3000)
})

test("Handling Options in Dropdown" , async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Verify that the dropdown contains the expected number of options
    await expect(page.locator("#country>option")).toHaveCount(10)

    // Extract and trim all option texts for validation
    const countryNames:string[] = (await page.locator("#country>option").allTextContents()).map(text=>text.trim())

    console.log(countryNames)

    // Assert that 'Japan' is one of the options available in the dropdown
    expect(countryNames).toContain('Japan')
})