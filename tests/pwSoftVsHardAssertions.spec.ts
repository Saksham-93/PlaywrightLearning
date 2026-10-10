import {test,expect} from "@playwright/test"

test.skip("Hard Assertions" , async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")

    // Assertion 1 

    await expect(page).toHaveTitle("Demo Web Shop2")

    // Assertion2 

    await expect(page).toHaveURL("https://demowebshop.tricentis.com/")

    //Assertion 3

    const logo = page.locator("img[alt='Tricentis Demo Web Shop']")
    await expect(logo).toBeVisible()

    await page.waitForTimeout(3000)
})

test("Soft Assertions" , async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")

    // Assertion 1 

    await expect.soft(page).toHaveTitle("Demo Web Shop2")

    // Assertion2 

    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/")

    //Assertion 3

    const logo = page.locator("img[alt='Tricentis Demo Web Shop']")
    await expect.soft(logo).toBeVisible()

    await page.waitForTimeout(3000)
})