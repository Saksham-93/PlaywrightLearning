import {test,expect} from "@playwright/test"

/**
 * Spec file to demonstrate Playwright Scrolling capabilities.
 *
 * This spec covers:
 * 1. Basic visibility checks for elements.
 * 2. Scrolling to a specific element.
 * 3. Scrolling to specific pixel coordinates (X, Y).
 * 4. Scrolling to the absolute bottom of the page.
 * 5. Scrolling back to the top of the page.
 */

test("Automate Scrolling",async({page})=>{

    await page.goto("https://www.worldometers.info/geography/flags-of-the-world/")

    const usFlag = page.getByRole('img', { name: 'Flag of United States' })

    await expect(usFlag).toBeVisible()
})

test("Scroll to Specific Element",async({page})=>{

    await page.goto("https://www.worldometers.info/geography/flags-of-the-world/")

    const indiaFlag = page.getByRole('img', { name: 'Flag of India' })

    // scrollIntoViewIfNeeded ensures the element is in the viewport
    await indiaFlag.scrollIntoViewIfNeeded()
    await expect(indiaFlag).toBeVisible()
})

test("Scroll to Pixels Demo", async ({ page }) => {
    await page.goto("https://www.worldometers.info/geography/flags-of-the-world/");

    // Scroll to a specific coordinate (X: 0, Y: 500)
    await page.evaluate(() => window.scrollTo(0, 500));

    // Validate the current scroll position
    const scrollY = await page.evaluate(() => window.scrollY);
    console.log(`Current Scroll Position Y: ${scrollY}`);
    expect(scrollY).toBe(500);
});

test("Scroll to Bottom and Top Demo", async ({ page }) => {
    await page.goto("https://www.worldometers.info/geography/flags-of-the-world/");

    // 1. Scroll to the bottom of the page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Validate that we are at the bottom
    const bottomY = await page.evaluate(() => window.scrollY);
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    const viewportHeight = await page.evaluate(() => window.innerHeight);
    console.log(`Scroll Position: ${bottomY}, Total Height: ${totalHeight}, Viewport Height: ${viewportHeight}`);

    // Validation: The scroll position should be the total height minus the viewport height
    expect(Math.abs(bottomY - (totalHeight - viewportHeight))).toBeLessThan(10);

    // 2. Scroll back to the top
    await page.evaluate(() => window.scrollTo(0, 0));

    // Validate that we are back at the top
    const topY = await page.evaluate(() => window.scrollY);
    console.log(`Return Scroll Position Y: ${topY}`);
    expect(topY).toBe(0);
});
