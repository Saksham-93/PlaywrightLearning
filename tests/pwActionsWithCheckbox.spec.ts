import {test,expect,Locator} from "@playwright/test"

/**
 * This test suite demonstrates various ways to interact with checkboxes using Playwright.
 * It covers basic checking, iterating through multiple checkboxes, slicing for specific elements,
 * implementing toggle logic, and selecting checkboxes based on their labels.
 */

test("Handling Checkbox Action ",async({page})=>{
    // Navigate to the practice page
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Locate a specific checkbox using its ID
    let sundayCheckBox:Locator = page.locator("#sunday")

    // Check the checkbox
    await sundayCheckBox.check()

    // Verify the checkbox is indeed checked
    await expect(sundayCheckBox).toBeChecked()
})

test("Handling Checkbox Hands On Example",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Locate all labels that contain the text 'day' to identify checkboxes for days of the week
    let weekdays:Locator = page.locator("//label[contains(text(),'day')]")

    // Extract the text content of all matched labels
    let weekNames:string[] = await weekdays.allTextContents()

    // Print each day's name to the console
    for(let week of weekNames)
    {
        console.log(week)
    }
})

test("Clicking on All Checkboxes+ Hands On Example",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Locate all labels containing 'day'
    let weekdays:Locator = page.locator("//label[contains(text(),'day')]")

    // Get the text names of the days
    let weekNames:string[] = await weekdays.allTextContents()

    // Map the day names to Playwright locators using getByLabel
    let checkBoxes:Locator[] = weekNames.map(index => page.getByLabel(index))

    // Ensure that exactly 7 days of the week were found
    expect(checkBoxes.length).toBe(7)

    // Iterate through each checkbox, check it, and verify the action
    for(const checkBox of checkBoxes)
    {
        await checkBox.check()
        await expect(checkBox).toBeChecked()
    }

    // Pause for visibility of the result
    await page.waitForTimeout(3000)
})

test("Clicking on last 3 checkboxes Hands On Example",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    let weekdays:Locator = page.locator("//label[contains(text(),'day')]")
    let weekNames:string[] = await weekdays.allTextContents()
    let checkboxes:Locator[] = weekNames.map(index => page.getByLabel(index))

    // Use slice(-3) to get only the last three elements of the array
    const lastThree:Locator[] = checkboxes.slice(-3)

    for(let checkbox of lastThree)
    {
        await checkbox.check()
        await expect(checkbox).toBeChecked()
    }

    await page.waitForTimeout(3000)
})

test("Clicking And Unclicking checkboxes Hands on",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    let weekdays:Locator = page.locator("//label[contains(text(),'day')]")
    let weekNames:string[] = await weekdays.allTextContents()
    let checkboxes:Locator[] = weekNames.map(index => page.getByLabel(index))

    // First, check all checkboxes
    for(let checkbox of checkboxes)
    {
        await checkbox.check()
        await expect(checkbox).toBeChecked()
    }

    // Then, uncheck the last three
    const lastThree:Locator[] = checkboxes.slice(-3)
    for(let checkbox of lastThree)
    {
        await checkbox.uncheck()
        await expect(checkbox).not.toBeChecked()
    }

    // Finally, implement a toggle: if checked, uncheck; if unchecked, check
    for(let checkBox of checkboxes)
    {
        if (await checkBox.isChecked()){
            await checkBox.uncheck()
            await expect(checkBox).not.toBeChecked()
        }
        else
        {
            await checkBox.check()
            await expect(checkBox).toBeChecked()
        }
    }

    await page.waitForTimeout(3000)
})

test("Clicking Random checkboxes",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    let weekdays:Locator = page.locator("//label[contains(text(),'day')]")
    let weekNames:string[] = await weekdays.allTextContents()
    let checkboxes:Locator[] = weekNames.map(index => page.getByLabel(index))

    // Define a specific set of indices to check
    let indexes:number[] = [1,3,6]

    for(let index of indexes)
    {
        await checkboxes[index].check()
        await expect(checkboxes[index]).toBeChecked()
    }

    await page.waitForTimeout(3000)
})

test("Select Checkbox based on label",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    let weekdays:Locator = page.locator("//label[contains(text(),'day')]")
    let weekNames:string[] = await weekdays.allTextContents()

    const weekName:string = "Wednesday"

    // Iterate through available labels and check the one that matches the target weekName (case-insensitive)
    for(let label of weekNames)
    {
        if(label.toLowerCase() === weekName.toLowerCase())
        {
            const checkBox = page.getByLabel(label)
            await checkBox.check()
            await expect(checkBox).toBeChecked()
            break; // Exit loop once the match is found and checked
        }
    }

    await page.waitForTimeout(3000)
})
