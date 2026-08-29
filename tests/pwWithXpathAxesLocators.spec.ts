import {test,expect,Locator} from "@playwright/test"

test("Hands on Xpath Self locator example " , async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    let selfLocator:Locator = page.locator("(//td[text()='Selenium']/self::td[1])[1]")

    await expect(selfLocator).toHaveText("Selenium")
})

test("Hands on Xpath Parent locator example " , async({page})=>{
    await page.goto("https://www.dezlearn.com/webtable-example/")

    let parentLocator:Locator = page.locator("//td[text()='Mayur Deshmukh']/parent::tr")

    await expect(parentLocator).toContainText("mayur@dezlearn.com")
})

test("Hands on Xpath Child locator example " , async({page})=>{
    await page.goto("https://www.dezlearn.com/webtable-example/")

    let childLocator:Locator = page.locator("//table//tr[2]/child::td")
     
    for(let i:number=0;i<2;i++)
    {
        const text:string|null = await childLocator.nth(i).textContent()
    }
   
})

test.only("Hands on Xpath Ancestor locator example " , async({page})=>{
    await page.goto("https://www.dezlearn.com/webtable-example/")

    let ancesLocator:Locator = page.locator("//td[text()='Mayur Deshmukh']/ancestor::table//tr")
     
    let count:number = await ancesLocator.count()

     expect(count).toBe(7)
   
})

test.only("Hands on Xpath Descendant locator example " , async({page})=>{
    await page.goto("https://www.dezlearn.com/webtable-example/")

    let descendantLocator:Locator = page.locator("//table/descendant::tr/td[2]")
     
    let emails:string[] = await descendantLocator.allTextContents()

    console.log("Emails of the users -->")
    
    for (let email of emails)
    {
        console.log(email)
    }
   
})