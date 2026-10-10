import { test, expect } from '@playwright/test';

const BASE_URL = 'https://demowebshop.tricentis.com';

test.describe('Hard vs Soft Assertions Demo', () => {

  test('Demonstrating Hard Assertions (Test stops on first failure)', async ({ page }) => {
    await page.goto(BASE_URL);

    // This hard assertion will fail if the title is wrong, and the test stops HERE.
    // The subsequent steps will NEVER be executed.
    await expect(page).toHaveTitle('Wrong Title - This will fail');

    console.log('This line will NOT be printed because the hard assertion failed.');
    await expect(page).toHaveURL(BASE_URL);
  });

  test('Demonstrating Soft Assertions (Test continues after failure)', async ({ page }) => {
    await page.goto(BASE_URL);

    // This soft assertion will fail, but Playwright will KEEP RUNNING the test.
    await expect.soft(page).toHaveTitle('Wrong Title - This will fail');

    console.log('This line WILL be printed even though the soft assertion failed.');

    // Another soft assertion
    await expect.soft(page.locator('.header-logo')).toBeVisible();

    // A final hard assertion to verify the URL
    await expect(page).toHaveURL(BASE_URL);

    // The test will be marked as failed at the end because of the soft failures.
  });

  test('Mixed Assertions Example', async ({ page }) => {
    await page.goto(BASE_URL);

    // Softly check for non-critical elements (UI glitches shouldn't stop the whole test)
    await expect.soft(page.locator('.footer')).toBeVisible();
    await expect.soft(page.locator('text=Privacy Policy')).toBeVisible();

    // Hard check for a critical path (If the login button is missing, the rest of the test is useless)
    const loginLink = page.locator('a[href="/login"]');
    await expect(loginLink).toBeVisible();

    await loginLink.click();
    await expect(page).toHaveURL(/.*login/);
  });
});
