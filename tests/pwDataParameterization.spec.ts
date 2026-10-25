import { test, expect } from '@playwright/test';

const loginTestData: string[][] = [
    ["laura.taylor1234@example.com", "test123", "valid"],
    ["invaliduser@example.com", "test123", "invalid"],
    ["validuser@example.com", "test123", "invalid"],
    ["", "", "invalid"]
];

test.describe('Login Data Parameterization Tests', () => {
    for (const [email, password, expectedResult] of loginTestData) {
        test(`Login attempt with ${expectedResult === 'valid' ? 'valid' : 'invalid'} credentials: ${email}`, async ({ page }) => {
            await page.goto('https://demowebshop.tricentis.com/login');

            const emailInput = page.getByRole('textbox', { name: 'Email:' });
            const passwordInput = page.getByLabel('Password:');
            const loginButton = page.getByRole('button', { name: 'Log in' });

            await emailInput.fill(email);
            await passwordInput.fill(password);
            await loginButton.click();

            if (expectedResult === 'valid') {
                // Verify successful login (e.g., check if "Logout" link is visible or user is redirected to home)
                await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
            } else {
                // Verify login failure (e.g., check for error message)
                await expect(page.locator('.validation-summary-errors')).toBeVisible();
            }
        });
    }
});
