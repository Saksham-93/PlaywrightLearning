import {test,expect,Locator} from "@playwright/test"

test("Checking Dropdown is sorted or not" ,async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    let animalsList:Locator = page.locator("#animals>option")

    let original:string[] = (await animalsList.allTextContents()).map(text=>text.trim())

    let sortedList:string[]= [...original].sort()

    console.log("Original..",original)
    console.log("Sorted list..",sortedList)

    expect(sortedList).toStrictEqual(original)
})

test("Checking Dropdown is sorted or not second example" ,async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    let colorsList:Locator = page.locator("#colors>option")

    let original:string[] = (await colorsList.allTextContents()).map(text=>text.trim())

    let sortedList:string[]= [...original].sort()

    console.log("Original..",original)
    console.log("Sorted list..",sortedList)

    expect(sortedList).not.toBe(original)
})

