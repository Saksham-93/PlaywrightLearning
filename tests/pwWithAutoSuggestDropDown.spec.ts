import {test,expect,Locator} from "@playwright/test"

/**
 * This test suite demonstrates how to handle auto-suggest dropdowns (comboboxes).
 * It includes examples from Google and Flipkart to show how to fill a field and
 * interact with the dynamically appearing suggestion list.
 */

test("Handling Auto Suggest DropDown Example 1",async({page})=>{
    // Navigate to Google
    await page.goto("https://www.google.com/")

    // Fill the search box with a query
    await page.locator("[name='q']").first().fill("playwright")

    // Short wait for the suggestions to appear in the DOM
    await page.waitForTimeout(300)

    // Count the number of suggestion items appearing in the dropdown
    let optionsCount:number = await page.locator("//*[@id='Alh6id']//ul//li").count()

    console.log("Total Options count ",optionsCount)
})

test("Handling Auto Suggest DropDown Example 2",async({page})=>{
    // Navigate to Flipkart
    await page.goto("https://www.flipkart.com/")

    // Fill the search box with "smart"
    await page.locator("input[title='Search for Products, Brands and More']").first().fill("smart")

    // Wait for suggestions to be populated
    await page.waitForTimeout(5000)

    // Locate the suggestion list items
    let options:Locator = page.locator("ul>li")
    let optionsCount:number = await page.locator("ul>li").count()

    console.log("Total Options count ",optionsCount)

    // Iterate through the suggestions and click on the one that matches "smart tv" exactly
    for(let i=0;i<optionsCount;i++)
    {
        let option = await options.nth(i).innerText()
        if(option === "smart tv")
        {
           await options.nth(i).click()
            break;
        }
    }
})