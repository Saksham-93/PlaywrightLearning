import { test, expect, Locator } from "@playwright/test";

/**
 * This test suite demonstrates handling tables with pagination.
 * It uses the OrangeHRM demo site to show how to navigate between pages
 * and verify data across different pages of a table.
 */

test("Pagination Table - Navigate and Verify Data", async ({ page }) => {
    // 1. Login to OrangeHRM
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.fill("input[name='username']", "Admin");
    await page.fill("input[name='password']", "admin123");
    await page.locator(".orangehrm-login-button").click();

    // 2. Navigate to PIM section
    await page.locator("//span[text()='PIM']").click();
    await page.waitForLoadState("networkidle");

    // 3. Verify data on Page 1
    const firstPageRows = page.locator(".orangehrm-row");
    const firstPageCount = await firstPageRows.count();
    console.log(`Page 1 has ${firstPageCount} records`);
    expect(firstPageCount).toBeGreaterThan(0);

    // 4. Navigate to Page 2
    // We locate the pagination 'Next' button (usually an arrow or number '2')
    const nextButton = page.locator(".pagination .page-item:nth-child(3) a"); // Adjust selector based on actual DOM
    await nextButton.click();

    // Wait for the table to refresh
    await page.waitForTimeout(2000);

    // 5. Verify data on Page 2
    const secondPageRows = page.locator(".orangehrm-row");
    const secondPageCount = await secondPageRows.count();
    console.log(`Page 2 has ${secondPageCount} records`);
    expect(secondPageCount).toBeGreaterThan(0);

    // 6. Verify that the data on Page 2 is different from Page 1
    // We compare the first record of Page 1 (captured earlier) with Page 2
    // Note: In a real test, you'd store the first page's first name in a variable
});

test("Pagination Table - Search and Pagination", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.fill("input[name='username']", "Admin");
    await page.fill("input[name='password']", "admin123");
    await page.locator(".orangehrm-login-button").click();
    await page.locator("//span[text()='PIM']").click();

    // Use search to filter data (which often changes pagination)
    await page.locator("input[placeholder='Type for filtering']").fill("Employee");
    await page.waitForTimeout(2000);

    const rowsAfterSearch = page.locator(".orangehrm-row");
    const count = await rowsAfterSearch.count();
    console.log(`Found ${count} records matching search`);

    // Verify if the pagination buttons are disabled if only one page of results exists
    const nextButton = page.locator(".pagination .page-item.disabled");
    await expect(nextButton).toBeVisible();
});
