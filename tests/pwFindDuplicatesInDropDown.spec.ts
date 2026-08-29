import {test,expect} from "@playwright/test"

test("Handling Multi Dropdown in Playwright Option 1 By Visible Text" ,async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

   let options:string[] = (await page.locator("#colors>option").allTextContents()).map(text=>text.trim())

   const mySet = new Set<string>
   const duplicates:string[]=[]

   for(let option of options)
   {
     if(mySet.has(option))
     {
        duplicates.push(option)
     }
     else
     {
        mySet.add(option)
     }
   }

   for(let duplicate of duplicates)
   {
    console.log("Duplicates are --->")
    console.log(duplicate)
   }
})