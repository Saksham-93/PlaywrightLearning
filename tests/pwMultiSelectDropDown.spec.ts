import {test,expect} from "@playwright/test"

test("Handling Multi Dropdown in Playwright Option 1 By Visible Text" ,async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#colors").selectOption(["Red","Blue"])

    await page.waitForTimeout(5000)
})

test("Handling Dropdown in Playwright Option 2 By Value" ,async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#colors").selectOption(["red","blue","green"])
    await page.waitForTimeout(3000)
})

test("Handling Dropdown in Playwright Option 3 By label" ,async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#colors").selectOption([{label:"Red"},{label:"Blue"},{label:"Green"}])
    await page.waitForTimeout(3000)
})

test("Handling Dropdown in Playwright Option 4 By label" ,async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#colors").selectOption([{index:0},{index:2},{index:4}])
    await page.waitForTimeout(3000)
})

test("Handling Options in Dropdown" , async({page})=>{
    
   await page.goto("https://testautomationpractice.blogspot.com/")
    
    await expect(page.locator("#colors>option")).toHaveCount(7)

    const colorNames:string[] = (await page.locator("#colors>option").allTextContents()).map(text=>text.trim())

    console.log(colorNames)

    expect(colorNames).toContain('Blue')
})