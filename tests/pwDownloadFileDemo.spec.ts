import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

/**
 * Test Case: File Download Demo
 *
 * Context:
 * This test demonstrates how to handle file downloads in Playwright.
 *
 * Key Concept:
 * Playwright does not download files to a default system folder. Instead,
 * it provides a `download` event. We use `page.waitForEvent('download')`
 * to capture the download stream and then save it to a specific
 * directory in the project using `download.saveAs()`.
 */

test.describe("File Download Suite", () => {

    const downloadFolder = path.join(process.cwd(), "downloads");

    test.beforeEach(async () => {
        // Ensure the downloads folder exists
        if (!fs.existsSync(downloadFolder)) {
            fs.mkdirSync(downloadFolder, { recursive: true });
        }
    });

    test("Download File Demo", async ({ page }) => {
        await page.goto("https://sdetqa.vercel.app/autoplay");

        // Start waiting for the download event before clicking the download button
        const downloadPromise = page.waitForEvent('download');

        // Trigger the download
        await page.getByRole('button', { name: 'Download File' }).click();

        // Wait for the download process to complete and get the download object
        const download = await downloadPromise;

        // Define the path where the file should be saved
        const downloadPath = path.join(downloadFolder, "sample.txt");

        // Save the downloaded file to the local filesystem
        await download.saveAs(downloadPath);

        // Verify the file exists on the disk
        expect(fs.existsSync(downloadPath)).toBe(true);

        console.log(`File successfully downloaded and saved to: ${downloadPath}`);
    });

    test.afterEach(async () => {
        // Clean up the downloads folder after each test to ensure a fresh state
        console.log("Cleaning up downloads folder...");
        if (fs.existsSync(downloadFolder)) {
            const files = fs.readdirSync(downloadFolder);
            for (const file of files) {
                fs.unlinkSync(path.join(downloadFolder, file));
            }
        }
    });
});
