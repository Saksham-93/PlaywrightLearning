import { test, expect } from '@playwright/test';
import { captureSessionStorageManual, injectSessionStorageInit } from '../utils/sessionHelper';

const APP_URL = 'https://sdetqa.vercel.app/login_app';
const ADMIN_SESSION_FILE = '/Users/akratikhera/PWDOCS/tests/storage-data/admin_session_data.json';
const USER_SESSION_FILE = '/Users/akratikhera/PWDOCS/tests/storage-data/user_session_data.json';

test.describe('Session Storage with addInitScript Demo', () => {

  test('Capture and Restore Admin Session', async ({ browser, page }) => {
    // --- PART 1: CAPTURE ---
    await page.goto(APP_URL);
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByLabel('Password').fill('admin123');
    await page.getByLabel('⏳ Session').check();
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Welcome', { exact: true })).toBeVisible();

    // Save session using our helper
    await captureSessionStorageManual(page, ADMIN_SESSION_FILE);

    // --- PART 2: RESTORE ---
    const adminContext = await browser.newContext();
    // Inject the session BEFORE navigating
    await injectSessionStorageInit(adminContext, ADMIN_SESSION_FILE);

    const adminPage = await adminContext.newPage();
    await adminPage.goto(APP_URL);

    await expect(adminPage.getByText('Dashboard Welcome', { exact: true })).toBeVisible();
    await expect(adminPage.locator('#displayUser')).toContainText('admin');

    await adminContext.close();
  });

  test('Capture and Restore Normal User Session', async ({ browser, page }) => {
    // --- PART 1: CAPTURE ---
    await page.goto(APP_URL);
    await page.getByRole('textbox', { name: 'Username' }).fill('testuser');
    await page.getByLabel('Password').fill('testuser123');
    await page.getByLabel('⏳ Session').check();
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Welcome', { exact: true })).toBeVisible();

    // Save session using our helper
    await captureSessionStorageManual(page, USER_SESSION_FILE);

    // --- PART 2: RESTORE ---
    const userContext = await browser.newContext();
    // Inject the session BEFORE navigating
    await injectSessionStorageInit(userContext, USER_SESSION_FILE);

    const userPage = await userContext.newPage();
    await userPage.goto(APP_URL);

    await expect(userPage.getByText('Dashboard Welcome', { exact: true })).toBeVisible();
    await expect(userPage.locator('#displayUser')).toContainText('testuser');

    await userContext.close();
  });
});
