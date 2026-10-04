import {test,expect} from "@playwright/test"

/**
 * Spec file to demonstrate Playwright IFrame handling.
 *
 * This spec showcases:
 * 1. Frame Counting: Identifying the total number of frames present on a page.
 * 2. IFrame Interaction: Using frameLocator() to access and interact with elements inside a specific frame.
 * 3. Nested IFrames: Demonstrating how to traverse from a parent frame to a child frame using chained frameLocator() calls.
 * 4. Content Validation: Extracting and verifying text content from elements deep within nested frame structures.
 */

test("Handling IFrames ", async({page})=>{

   await page.goto("https://ui.vision/demo/webtest/frames/")
   
    const frames = page.frames()
    let framesCount:number = frames.length

    console.log(`Count of frames are : ${framesCount}`)

    expect(framesCount).toBe(7)

    await page.frameLocator('frame[src="frame_1.html"]').locator('#id1 > div > input').fill("Entering test in First frame")
   
    await page.waitForTimeout(5000)
   
    

})

test("Handling Child IFrames ", async({page})=>{

   await page.goto("https://ui.vision/demo/webtest/frames/")
   
   const parentFrame = page.frameLocator("[src='frame_3.html']")

   //const childFrame = page.frameLocator("[src='https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true']")
    const childFrame = parentFrame.frameLocator("iframe")

    console.log(await childFrame.locator(".cBGGJ").textContent())
   
 
})