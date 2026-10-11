import { BrowserContext, Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';

/**
 * Helper function to capture ONLY Session Storage (window.sessionStorage)
 * and save it to a specified file path.
 */
export async function captureSessionStorageManual(page: Page, storageFile: string): Promise<void> {
    const sessionStorageData = await page.evaluate(() => {
        return JSON.stringify(sessionStorage);
    });

    const directory = path.dirname(storageFile);
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }

    fs.writeFileSync(storageFile, sessionStorageData);
    console.log(`Session Storage successfully saved to: ${storageFile}`);
}

/**
 * Helper function to inject Session Storage using addInitScript.
 * This ensures the session is set BEFORE the page loads.
 */
export async function injectSessionStorageInit(context: BrowserContext, storageFile: string): Promise<void> {
    const data = fs.readFileSync(storageFile, 'utf8');
    const sessionStorageObj = JSON.parse(data);

    await context.addInitScript((storage) => {
        for (const key in storage) {
            window.sessionStorage.setItem(key, storage[key]);
        }
    }, sessionStorageObj);

    console.log(`Session Storage init script added from: ${storageFile}`);
}
