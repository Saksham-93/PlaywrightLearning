import {test,expect} from "@playwright/test"

/**
 * Test Case: Common Popup Overlay
 *
 * Context:
 * This test demonstrates how to handle a common popup overlay in Playwright.
 * It navigates to a page, triggers a popup, verifies its visibility and content,
 * and then closes the popup by clicking a button.
 *
 * Steps:
 * 1. Navigate to the autoplay page.
 * 2. Click the button that triggers the popup.
 * 3. Verify the popup container is visible.
 * 4. Verify the heading inside the popup.
 * 5. Click the 'Yes' button to dismiss the popup.
 * 6. Verify the popup is now hidden.
 */
test("Common Popup Overlay" , async({page})=>{

    await page.goto("https://sdetqa.vercel.app/autoplay.html")

    await page.locator("#PopUp").click()

    const popBox = page.locator("#inlinePopup")
    await expect(popBox).toBeVisible()

    await expect(popBox.getByRole('heading',{name:'Be always in touch'})).toBeVisible()

    await popBox.getByRole('button',{name:'Yes'}).click()
    await expect(popBox).toBeHidden()

    await page.close()
})