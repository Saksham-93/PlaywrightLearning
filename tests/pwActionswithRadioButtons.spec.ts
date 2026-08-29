import {test,expect,Locator} from "@playwright/test"

test("Handling Playwright Action with Radio Button " , async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const maleRadioBtn:Locator = page.getByLabel("Male").first()

    await expect(maleRadioBtn).toBeEnabled()
    
    await maleRadioBtn.check()

    await expect(maleRadioBtn).toBeChecked()
})