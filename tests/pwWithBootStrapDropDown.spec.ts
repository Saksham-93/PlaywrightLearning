import {test,expect, Locator} from "@playwright/test"

/**
 * This test suite demonstrates how to interact with a Bootstrap-style custom dropdown.
 * Since these are often not standard HTML <select> elements, they require clicking
 * the trigger and then selecting from a dynamic list of elements (usually <div> or <span>).
 */

test("Handling BootStrap Dropdown",async({page})=>{
    // Navigate to the OrangeHRM login page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // Perform login
    await page.fill("input[name='username']","Admin")
    await page.fill("input[name='password']","admin123")
    await page.locator(".orangehrm-login-button").click()

    // Navigate to the PIM (Personnel Information Management) section
    await page.locator("//span[text()='PIM']").click()
    await page.waitForTimeout(200)

    // Open the Job Title dropdown by clicking the trigger icon/element
    await page.locator("form i").nth(2).click()

    // Wait for the dropdown list to become visible and available in the DOM
    await page.waitForTimeout(5000)

    // Locate the options within the listbox
    let jobTitles:Locator = page.locator("div[role='listbox'] span")
    let count = await jobTitles.count()

    console.log(count)

    // Iterate through the available titles and select "QA Lead"
    for(let i =0;i<count;i++)
    {
        let text = await jobTitles.nth(i).innerText()
        if (text === "QA Lead")
        {
             // Click the specific option that matches the target text
             await jobTitles.nth(i).click()
        }
    }
    await page.waitForTimeout(5000)
})