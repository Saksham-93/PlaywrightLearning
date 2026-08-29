import {test,expect} from "@playwright/test"

test("Handling Dropdown in Playwright Option 1 By Visible Text" ,async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption("India")

    await page.waitForTimeout(3000)
})

test("Handling Dropdown in Playwright Option 2 By Value" ,async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption({value:'uk'})
    await page.waitForTimeout(3000)
})

test("Handling Dropdown in Playwright Option 3 By label" ,async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption({label:'Japan'})
    await page.waitForTimeout(3000)
})

test("Handling Dropdown in Playwright Option 4 By label" ,async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption({index:4})
    await page.waitForTimeout(3000)
})

test("Handling Options in Dropdown" , async({page})=>{
    
   await page.goto("https://testautomationpractice.blogspot.com/")
    
    await expect(page.locator("#country>option")).toHaveCount(10)

    const countryNames:string[] = (await page.locator("#country>option").allTextContents()).map(text=>text.trim())

    console.log(countryNames)

    expect(countryNames).toContain('Japan')
})