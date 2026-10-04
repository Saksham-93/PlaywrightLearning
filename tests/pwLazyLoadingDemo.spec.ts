import {test,expect} from "@playwright/test"

/**
 * Spec file to demonstrate Playwright Lazy Loading (Infinite Scroll) automation.
 *
 * This test showcases how to handle pages that load content dynamically as the user scrolls.
 *
 * Key Concepts Demonstrated:
 * 1. Infinite Scrolling: Using a while loop to repeatedly scroll to the bottom of the page.
 * 2. Height Comparison: Comparing the previous page height with the current page height
 *    to determine when all content has been loaded.
 * 3. Dynamic Content Handling: Incorporating waitForTimeout to allow the browser
 *    time to fetch and render new data from the server.
 * 4. Page Evaluation: Using page.evaluate() to interact with the window and document objects.
 */
test("Lazy Loading Demo",async({page})=>{

    await page.goto("https://www.booksbykilo.in/new-books?pricerange=201to500")

    let previousHeight = 0 

    while(true)
    {
        await page.evaluate(()=>{
            window.scrollTo(0,document.body.scrollHeight)
        })

        await page.waitForTimeout(2000)

        const currentHeight = await page.evaluate(()=>{
             return document.body.scrollHeight
        })

        console.log("====================")

        console.log(`Previous Height : ${previousHeight}`)
        console.log(`Current Height : ${currentHeight}`)

        if (previousHeight===currentHeight)
        {
            break
        }
        previousHeight=currentHeight
    }
})