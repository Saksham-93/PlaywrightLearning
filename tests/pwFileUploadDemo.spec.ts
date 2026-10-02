import {test,expect} from "@playwright/test"

/**
 * Test Suite: File Upload Demo
 *
 * Context:
 * This suite demonstrates how to handle file uploads in Playwright,
 * covering both single file and multiple file upload scenarios.
 */

test.beforeEach('Navigate to the Application Url',async({page})=>{
    await page.goto("https://sdetqa.vercel.app/autoplay")
})

test("Single File Upload",async({page})=>{
    const singleFileInput = page.locator("#singleFileInput")
    const uploadSingleButton = page.getByRole('button', { name: 'Upload Single File' })
    const uploadStatus = page.locator("#singleFileStatus")

    // Set the file to be uploaded
    await singleFileInput.setInputFiles("uploads/Lab_Flight_Booking.pdf")
    await uploadSingleButton.click()

    // Verify the upload status message
    await expect(uploadStatus).toHaveText(/Single file selected: Lab_Flight_Booking.pdf/)
})

test("Multiple Files Upload",async({page})=>{
    const multipleFileInput = page.locator('#multipleFilesInput')
    const uploadMultipleButton = page.getByRole('button', { name: 'Upload Multiple Files' })
    const multipleFileUploadStatus = page.locator('#multipleFilesStatus')

    // Set multiple files to be uploaded by passing an array of paths
    await multipleFileInput.setInputFiles([
        "uploads/Lab_Flight_Booking.pdf",
        "uploads/test_data.txt"
    ])

    await uploadMultipleButton.click()

    // Verify that the status reflects the multiple files uploaded
    // Note: The exact text depends on the application's implementation,
    // usually it lists the filenames.
    await expect(multipleFileUploadStatus).toBeVisible()
    await expect(multipleFileUploadStatus).toContainText("Lab_Flight_Booking.pdf")
    await expect(multipleFileUploadStatus).toContainText("test_data.txt")
})

test.afterEach("Closing the page",async({page})=>{
    await page.close()
})
