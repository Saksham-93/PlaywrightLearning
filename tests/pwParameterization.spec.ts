import {test,expect} from "@playwright/test"

//testData
const searchItems:string[]=['laptop','Gift card','smartphone','monitor']

for(const item of searchItems)
{
  
test(`Search Test for ${item}`, async({page})=>{


    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator('#small-searchterms').fill(item)
    await page.getByRole('button', { name: 'Search' }).click()

    await expect.soft(page.locator("h2 a")).toContainText(item,{ignoreCase:true})
})
}


