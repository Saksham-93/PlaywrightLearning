import {test,expect,Locator} from "@playwright/test"

test("Handling Auto Suggest DropDown Example 1",async({page})=>{

    await page.goto("https://www.google.com/")

    await page.locator("[name='q']").first().fill("playwright")
    
    await page.waitForTimeout(300)
    
    let optionsCount:number = await page.locator("//*[@id='Alh6id']//ul//li").count()

    console.log("Total Options count ",optionsCount)
})

test.only("Handling Auto Suggest DropDown Example 2",async({page})=>{

    await page.goto("https://www.flipkart.com/")

    await page.locator("input[title='Search for Products, Brands and More']").first().fill("smart")
    
    await page.waitForTimeout(5000)
    
    let options:Locator = page.locator("ul>li")
    let optionsCount:number = await page.locator("ul>li").count()


    console.log("Total Options count ",optionsCount)

    for(let i=0;i<optionsCount;i++)
    {
        //console.log(await options.nth(i).innerText()) 
        let option = await options.nth(i).innerText()
        if(option === "smart tv")
        {
           await options.nth(i).click()
            break;
        }
    }
})