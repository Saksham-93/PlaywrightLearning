import {test,expect} from "@playwright/test"

/**
 * Playwright Mouse Actions & Browser Management Demo
 *
 * This spec file serves as a comprehensive demonstration of various Playwright
 * interaction patterns, focusing on mouse actions, keyboard control,
 * and browser context management.
 *
 * Key Concepts Demonstrated:
 * 1. Browser Context Hierarchy:
 *    Showcases the explicit flow: Browser -> BrowserContext -> Page.
 *    This is used in the Right Click Demo to demonstrate isolation and manual cleanup.
 *
 * 2. Mouse Interactions:
 *    - Right Click: Triggering custom context menus.
 *    - Hover: Verifying tooltips via the 'title' attribute.
 *    - Double Click: Executing double-click events and handling resulting dialogs.
 *    - Drag and Drop: Moving elements from a source to a target location.
 *
 * 3. Keyboard & Focus:
 *    - Demonstrates how to focus an element and use keyboard arrows (ArrowRight/ArrowLeft)
 *      to manipulate UI components like sliders.
 *
 * 4. Logic & Synchronization:
 *    - Loop concepts: Using while-loops to reach a specific state (e.g., slider at 50).
 *    - Dialog Handling: Using page.on('dialog') to manage browser alerts.
 *    - Explicit Waits: Using waitForTimeout for visual verification in demos.
 */
test("Right Click Demo" , async({browser})=>{

    // Create a new browser context to demonstrate the Browser -> BrowserContext -> Page hierarchy
    const context = await browser.newContext()
    // Create a new page within the explicit context
    const page = await context.newPage()

    await page.goto("https://sdetqa.vercel.app/autoplay")

    const rightClickButton = page.locator("#rightClickBtn")

    await rightClickButton.click({button:"right"})

    await page.waitForTimeout(3000)

    const allOptions = await page.locator('#customContextMenu button').allInnerTexts()

    console.log(allOptions)

    expect(allOptions).toEqual(['Edit', 'Cut', 'Copy', 'Paste', 'Delete', 'Quit'])

    let quitOption = page.getByRole('button', { name: 'Quit' })
    await expect(quitOption).toBeVisible()

    page.on('dialog',(dialog)=>{
        expect(dialog.message()).toContain('Quit')
        dialog.accept()
    })

    await quitOption.click()

    // Close the context to ensure clean teardown and resource management
    await context.close()
})

test("Mouse Hover Demo ",async({page})=>{
     await page.goto("https://sdetqa.vercel.app/autoplay")

     const hoverMeLocator = page.getByText('Hover me').first()
     await hoverMeLocator.hover()

     console.log("attribute Value :", await hoverMeLocator.getAttribute('title'))
     expect(await hoverMeLocator.getAttribute('title')).toBe('This is a tooltip')
    })

test("Double Click Demo ",async({page})=>{
     await page.goto("https://sdetqa.vercel.app/autoplay")

     const doubleClickButton = page.getByRole('button', { name: 'Double click' })

     page.once('dialog',(dialog)=>{
        expect(dialog.message()).toContain("Double clicked!")
        dialog.accept()
     })
     await doubleClickButton.dblclick()
     await page.getByRole('button', { name: 'Copy Text' }).dblclick()

     const field2 = page.locator('#field2')

     await expect(field2).toHaveValue("Hello World!")
    })

test("Drag And Drop Demo",async({page})=>{
     await page.goto("https://sdetqa.vercel.app/autoplay")

     let source = page.locator('body > div.container:nth-of-type(1) > div.grid-3.compact-grid:nth-of-type(16) > div.card:nth-of-type(2) > div > div:nth-of-type(1)')
     let target = page.locator('body > div.container:nth-of-type(1) > div.grid-3.compact-grid:nth-of-type(16) > div.card:nth-of-type(2) > div > div:nth-of-type(2)')

     page.on('dialog',(dialog)=>{
        expect(dialog.message()).toContain('Dropped!')
        dialog.accept()
     })

     await source.dragTo(target)
    })

test("Slider Automation Demo", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/autoplay");

    const slider = page.locator('#priceSlider');
    const sliderVal = page.locator('#sliderVal');

    // Focus on the slider to enable keyboard actions
    await slider.focus();

    // Initial verification: check if it's at 0 or 100
    let currentVal = await sliderVal.innerText();
    console.log(`Initial Slider Value: ${currentVal}`);

    // Loop to move the slider to 50
    while (parseInt(currentVal) !== 50) {
        if (parseInt(currentVal) < 50) {
            await page.keyboard.press('ArrowRight');
        } else {
            await page.keyboard.press('ArrowLeft');
        }
        currentVal = await sliderVal.innerText();
    }

    console.log(`Final Slider Value: ${currentVal}`);
    expect(currentVal).toBe('50');
});
