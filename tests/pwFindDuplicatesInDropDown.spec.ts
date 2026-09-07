import {test,expect} from "@playwright/test"

/**
 * This test suite focuses on detecting duplicate values within a dropdown list.
 * It extracts all options and uses a Set to identify which values appear more than once.
 */

test("Handling Multi Dropdown in Playwright Option 1 By Visible Text" ,async({page})=>{
    // Navigate to the practice page
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Extract all text contents from the options of the #colors dropdown and trim whitespace
    let options:string[] = (await page.locator("#colors>option").allTextContents()).map(text=>text.trim())

    // Use a Set to keep track of unique values encountered
    const mySet = new Set<string>()
    const duplicates:string[]=[]

    // Iterate through options to find duplicates
    for(let option of options)
    {
        if(mySet.has(option))
        {
            // If the set already contains the option, it's a duplicate
            duplicates.push(option)
        }
        else
        {
            // Otherwise, add it to the set
            mySet.add(option)
        }
    }

    // Log any identified duplicates to the console
    for(let duplicate of duplicates)
    {
        console.log("Duplicates are --->")
        console.log(duplicate)
    }
})