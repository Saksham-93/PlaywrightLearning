import { test, expect } from '@playwright/test';

const APP_URL = 'https://sdetqa.vercel.app/login_app';

test.describe('Login using Saved Storage State', () => {

  test('should be logged in automatically as ADMIN', async ({ browser }) => {
    // 1. Use admin storage state
    const context = await browser.newContext({
      storageState: '/Users/akratikhera/PWDOCS/tests/storage-data/admin_data.json'
    });

    const page = await context.newPage();
    await page.goto(APP_URL);

    // Verification for Admin
    await expect(page.getByText('Welcome', { exact: true })).toBeVisible();
    // Using the ID #displayUser as requested
    await expect(page.locator('#displayUser')).toHaveText('admin');

    console.log('Successfully verified Admin login via storage state!');
    await context.close();
  });

  test('should be logged in automatically as NORMAL USER', async ({ browser }) => {
    // 1. Use normal user storage state
    const context = await browser.newContext({
      storageState: '/Users/akratikhera/PWDOCS/tests/storage-data/user_data.json'
    });

    const page = await context.newPage();
    await page.goto(APP_URL);

    // Verification for Normal User
    await expect(page.getByText('Welcome', { exact: true })).toBeVisible();
    // Using the ID #displayUser as requested
    await expect(page.locator('#displayUser')).toHaveText('testuser1');

    console.log('Successfully verified Normal User login via storage state!');
    await context.close();
  });
});
