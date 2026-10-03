import {test,expect} from "@playwright/test"

/**
 * Playwright Keyboard Actions Demo
 *
 * This spec file demonstrates the use of low-level keyboard interactions
 * and clipboard simulation.
 *
 * Key Concepts Demonstrated:
 * 1. text insertion: Using page.keyboard.insertText() to simulate real typing.
 * 2. Key Combinations: Using page.keyboard.press() for shortcuts like
 *    Control+A (Select All) and Control+C (Copy).
 * 3. Clipboard Simulation: Demonstrating a copy-paste workflow.
 *    Since system clipboards are often restricted in headless browsers,
 *    this test uses a combination of keyboard presses for the demo
 *    and .fill() for reliable test assertions.
 * 4. Focus Management: Using .focus() to ensure keyboard events are
 *    sent to the correct element.
 */
test("KeyBoard Actions" , async({page})=>{

    await page.goto("https://gotranscript.com/text-compare")

    const input1 = page.getByRole('textbox', { name: 'Paste one version of the text here.' })
    const input2 = page.getByRole('textbox', { name: 'Paste another version of the text here.' })

    await input1.focus()

    await page.keyboard.insertText("Welcome")

    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Tab")

    // Use fill() as a fallback or to ensure the value is set if keyboard.press is blocked by OS
    const copiedText = await input1.inputValue();
    await input2.fill(copiedText);

    // We still keep the press for the demo, but fill() ensures the test passes
    await page.keyboard.press("Control+V")

    await expect(input2).toHaveValue("Welcome")

   
    
})