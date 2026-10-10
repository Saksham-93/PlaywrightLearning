import { test, expect } from '@playwright/test';

const BASE_URL = 'https://demowebshop.tricentis.com';

test.describe('Playwright Auto-waiting and Actionability Demo', () => {

  test('Demo: Auto-waiting before Action (Click)', async ({ page }) => {
    await page.goto(BASE_URL);

    // Playwright automatically waits for the 'Login' link to be:
    // 1. Attached to DOM
    // 2. Visible
    // 3. Stable (not animating)
    // 4. Enabled
    // 5. Receiving events (not covered by other elements)
    const loginLink = page.locator('a[href="/login"]');
    await loginLink.click();

    await expect(page).toHaveURL(/.*login/);
  });

  test('Demo: Web-First Assertions (Auto-retry)', async ({ page }) => {
    await page.goto(BASE_URL);

    // Web-first assertions automatically retry until the condition is met
    // or the default timeout (usually 5s) is reached.
    const loginLink = page.locator('a[href="/login"]');

    // This will retry automatically if the element takes a moment to appear
    await expect(loginLink).toBeVisible({ timeout: 10000 });
  });

  test('Demo: Explicit Waiting (waitForSelector)', async ({ page }) => {
    await page.goto(BASE_URL);

    // While auto-waiting handles most cases, sometimes you need to wait for
    // a specific state explicitly.
    const loginLink = page.locator('a[href="/login"]');

    // Explicitly wait for the element to be present in the DOM
    await loginLink.waitFor({ state: 'attached' });

    await loginLink.click();
    await expect(page).toHaveURL(/.*login/);
  });

  test('Demo: Waiting for Network Response', async ({ page }) => {
    await page.goto(BASE_URL);

    // Useful for SPAs or pages where you need to wait for an API call to finish
    // before checking the UI.
    const promise = page.waitForResponse(response =>
      response.url().includes('/login') && response.status() === 200
    );

    await page.locator('a[href="/login"]').click();

    // Wait for the specific network response to complete
    await promise;

    await expect(page).toHaveURL(/.*login/);
  });

  test('Demo: Waiting for Page Load State', async ({ page }) => {
    // waitUntil: 'networkidle' waits until there are no network connections for at least 500ms.
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    await expect(page).toHaveTitle('Demo Web Shop');
  });
});
