import { test, expect } from '@playwright/test';

const BASE_URL = 'https://demowebshop.tricentis.com';

test.describe('Playwright Waiting Methods Comprehensive Demo', () => {

  test('1. Explicit Element Wait: waitForSelector (via Locator)', async ({ page }) => {
    await page.goto(BASE_URL);

    // This is the modern way to explicitly wait for a locator to reach a state
    const loginLink = page.locator('a[href="/login"]');

    // Wait for the element to be visible before proceeding
    await loginLink.waitFor({ state: 'visible', timeout: 5000 });

    await expect(loginLink).toBeVisible();
  });

  test('2. State-Based Waits: waitForLoadState', async ({ page }) => {
    // This demonstrates waiting for the page to reach a specific loading state
    // 'load' - window.onload event
    // 'domcontentloaded' - DOMContentLoaded event
    // 'networkidle' - No network connections for 500ms
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveTitle('Demo Web Shop');
  });

  test('3. Network Waiting: waitForURL', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.locator('a[href="/login"]').click();

    // Explicitly wait for the URL to change to the expected login page
    // This is safer than just clicking and hoping the page loads instantly
    await page.waitForURL('**/login');

    await expect(page).toHaveURL(/.*login/);
  });

  test('4. Request/Response Waiting', async ({ page }) => {
    await page.goto(BASE_URL);

    // Wait for a specific API response to come back before asserting
    const responsePromise = page.waitForResponse(response =>
      response.url().includes('/login') && response.status() === 200
    );

    await page.locator('a[href="/login"]').click();

    const response = await responsePromise;
    console.log(`Response received with status: ${response.status()}`);

    await expect(page).toHaveURL(/.*login/);
  });

  test('5. The "Hard Wait": waitForTimeout (Discouraged)', async ({ page }) => {
    await page.goto(BASE_URL);

    // This is a "Static" or "Hard" wait.
    // It forces the test to stop for exactly 3 seconds regardless of page state.
    // WARNING: This is considered a bad practice (anti-pattern) as it makes tests slow and flaky.
    await page.waitForTimeout(3000);

    console.log('Wait completed after 3 seconds of forced idling.');
    await expect(page).toBeVisible();
  });

  test('Comparison: Web-First Assertion vs Explicit Wait', async ({ page }) => {
    await page.goto(BASE_URL);

    const loginLink = page.locator('a[href="/login"]');

    // APPROACH A: Explicit Wait (Wait then Assert)
    await loginLink.waitFor({ state: 'visible' });
    await expect(loginLink).toBeVisible();

    // APPROACH B: Web-First Assertion (Combined Wait & Assert)
    // This is the RECOMMENDED approach as it's cleaner and handles retries natively.
    await expect(loginLink).toBeVisible();
  });
});
