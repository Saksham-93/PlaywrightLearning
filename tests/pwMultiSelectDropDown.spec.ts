import {test,expect} from "@playwright/test"

/**
 * This test suite demonstrates various methods for selecting multiple options in a multi-select dropdown.
 * It covers selection by visible text, value, label, and index, as well as validating the number of options.
 */

test("Handling Multi Dropdown in Playwright Option 1 By Visible Text" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Select options using their visible text labels
    await page.locator("#colors").selectOption(["Red","Blue"])
    await page.waitForTimeout(5000)
})

test("Handling Dropdown in Playwright Option 2 By Value" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Select options using their 'value' attribute (usually lowercase in HTML)
    await page.locator("#colors").selectOption(["red","blue","green"])
    await page.waitForTimeout(3000)
})

test("Handling Dropdown in Playwright Option 3 By label" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Select options using an array of objects specifying the label
    await page.locator("#colors").selectOption([{label:"Red"},{label:"Blue"},{label:"Green"}])
    await page.waitForTimeout(3000)
})

test("Handling Dropdown in Playwright Option 4 By index" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Select options using their zero-based index positions
    await page.locator("#colors").selectOption([{index:0},{index:2},{index:4}])
    await page.waitForTimeout(3000)
})

test("Handling Options in Dropdown" , async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Verify the total number of available options in the dropdown
    await expect(page.locator("#colors>option")).toHaveCount(7)

    // Extract all option texts, trim them, and store in an array
    const colorNames:string[] = (await page.locator("#colors>option").allTextContents()).map(text=>text.trim())

    console.log(colorNames)

    // Assert that a specific expected color is present in the list
    expect(colorNames).toContain('Blue')
})