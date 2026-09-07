import {test,expect,Locator} from "@playwright/test"

/**
 * This test suite verifies if the options in a dropdown are sorted alphabetically.
 * It compares the original list of options with a sorted version of the same list.
 */

test("Checking Dropdown is sorted or not" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Locate all options within the #animals dropdown
    let animalsList:Locator = page.locator("#animals>option")

    // Extract option texts and trim whitespace
    let original:string[] = (await animalsList.allTextContents()).map(text=>text.trim())

    // Create a sorted copy of the original list
    let sortedList:string[]= [...original].sort()

    console.log("Original..",original)
    console.log("Sorted list..",sortedList)

    // If the original list is equal to the sorted list, then it was already sorted
    expect(sortedList).toStrictEqual(original)
})

test("Checking Dropdown is sorted or not second example" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Locate all options within the #colors dropdown
    let colorsList:Locator = page.locator("#colors>option")

    // Extract option texts and trim whitespace
    let original:string[] = (await colorsList.allTextContents()).map(text=>text.trim())

    // Create a sorted copy of the original list
    let sortedList:string[]= [...original].sort()

    console.log("Original..",original)
    console.log("Sorted list..",sortedList)

    // Assert that the original list is NOT equal to the sorted list (verifying it is unsorted)
    expect(sortedList).not.toBe(original)
})
