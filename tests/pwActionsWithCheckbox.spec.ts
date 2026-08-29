import {test,expect,Locator} from "@playwright/test"

test("Handling Checkbox Action ",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    let sundayCheckBox:Locator = page.locator("#sunday")

    await sundayCheckBox.check()

    await expect(sundayCheckBox).toBeChecked()
})

test("Handling Checkbox Hands On Example",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    let weekdays:Locator = page.locator("//label[contains(text(),'day')]")

    let weekNames:string[] = await weekdays.allTextContents()

    for(let week of weekNames)
    {
        console.log(week)
    }
})

test("Clicking on All Checkboxes+ Hands On Example",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    let weekdays:Locator = page.locator("//label[contains(text(),'day')]")

    let weekNames:string[] = await weekdays.allTextContents()

    let checkBoxes:Locator[] = weekNames.map(index => page.getByLabel(index))

    expect(checkBoxes.length).toBe(7)

    for(const checkBox of checkBoxes)
    {
        await checkBox.check()
        await expect(checkBox).toBeChecked()
    }

    await page.waitForTimeout(3000)
})

test("Clicking on last 3 checkboxes Hands On Example",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    let weekdays:Locator = page.locator("//label[contains(text(),'day')]")

    let weekNames:string[] = await weekdays.allTextContents()

    let checkboxes:Locator[] = weekNames.map(index => page.getByLabel(index))

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

    for(let checkbox of checkboxes)
    {
        await checkbox.check()
        await expect(checkbox).toBeChecked()
    }

    const lastThree:Locator[] = checkboxes.slice(-3)

    for(let checkbox of lastThree)
    {
        await checkbox.uncheck()
        await expect(checkbox).not.toBeChecked()
    }

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

    let indexes:number[] = [1,3,6]

    for(let index of indexes)
    {
        await checkboxes[index].check()
        await expect(checkboxes[index]).toBeChecked()
    }
    
    await page.waitForTimeout(3000)
})

test.only("Select Checkbox based on label",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    let weekdays:Locator = page.locator("//label[contains(text(),'day')]")

    let weekNames:string[] = await weekdays.allTextContents()

    const weekName:string = "Wednesday"

    for(let label of weekNames)
    {
        if(label.toLowerCase() === weekName.toLowerCase())
        {
            const checkBox = page.getByLabel(label)
            await checkBox.check()
            await expect(checkBox).toBeChecked()
            break;
        }
    }
    
    await page.waitForTimeout(3000)
})



