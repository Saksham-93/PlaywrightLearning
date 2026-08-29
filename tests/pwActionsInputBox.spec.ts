import {test,expect,Locator} from "@playwright/test"

test("Handling PW Actions Input Box" , async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    let inputName:Locator = page.getByPlaceholder("Enter Name")

    await expect(inputName).toBeVisible()
    await expect(inputName).toBeEnabled()

    const maxLength:string | null = await inputName.getAttribute("maxlength")
    expect(maxLength).toBe("15")

    await inputName.fill("Saksham")

    let name:string = await inputName.inputValue()
    console.log(name)
    expect(name).toBe("Saksham")
})