import {test,expect, Locator} from "@playwright/test"

test("Handling BootStrap Dropdown",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.fill("input[name='username']","Admin")
    await page.fill("input[name='password']","admin123")

    await page.locator(".orangehrm-login-button").click()
    await page.locator("//span[text()='PIM']").click()

    await page.waitForTimeout(200)

    //Click on JOB Title
    await page.locator("form i").nth(2).click()
    
    await page.waitForTimeout(5000)
    
    let jobTitles:Locator = page.locator("div[role='listbox'] span")
    let count = await jobTitles.count()
    
    console.log(count)
    
    for(let i =0;i<count;i++)
    {
        //console.log(await jobTitles.nth(i).innerText())
        let text = await jobTitles.nth(i).innerText()
        if (text === "QA Lead")
        {
             jobTitles.nth(i).click()

        }
    }
    await page.waitForTimeout(5000)

})