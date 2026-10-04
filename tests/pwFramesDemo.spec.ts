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
    test.setTimeout(90000);

   await page.goto("https://ui.vision/demo/webtest/frames/")

   await page.goto("https://ui.vision/demo/webtest/frames/")
   
   const parentFrame = page.frameLocator("[src='frame_3.html']")

   //const childFrame = page.frameLocator("[src='https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true']")
    const childFrame = parentFrame.frameLocator("iframe")

    console.log(await childFrame.locator(".cBGGJ").textContent())

    await childFrame.getByRole('radio', { name: 'I am a human' }).click();
    await childFrame.getByRole('checkbox', { name: 'Form Autofilling' }).click();
    await childFrame.getByText('Next').click();

    // Adding a small wait for the next page of the form to load
    await page.waitForTimeout(1000);

    await childFrame.getByRole('textbox', { name: 'Enter a short text' }).fill("Short Message");
    
    
    await childFrame.locator('div.geS5n > div.AgroKb:nth-of-type(2) > div.edhGSc.zKHdkd > div.RpC4Ne.oJeWuf:nth-of-type(1) > div.Pc9Gce.Wic03c:nth-of-type(2) > textarea.KHxj8b.tL9Q4c').fill("Answers");

    await childFrame.getByText('Submit').first().click();

     await expect(childFrame.locator('body.mcWRN > div.Uc2NEf:nth-of-type(1) > div.teQAzf > div.RH5hzf.RLS9Fe > div.idZHHb:nth-of-type(1) > div.vHW8K:nth-of-type(3)')).toContainText("Thank you for testing the UI")


   
 
})