import {test,expect,chromium} from "@playwright/test"
const appURL = "https://sdetqa.vercel.app/login_app"

async function saveAdminStorage()
{
    let browser = await chromium.launch({headless:false})
    let context = await browser.newContext();
    let page = await context.newPage()

    //Login to the application
        await page.goto(appURL)
    
        await page.getByRole('textbox', { name: 'Username' }).fill('admin')
        await page.getByLabel('Password').fill('admin123')
    
        await page.getByText('💾 Local').click()
    
        await page.getByRole('button', { name: 'Login' }).click()
    
        await expect(page.getByText('Welcome', { exact: true })).toBeVisible()

        await context.storageState({path:'storage-data/admin_data.json'})
}

async function saveUserStorage()
{
    let browser = await chromium.launch({headless:false})
    let context = await browser.newContext();
    let page = await context.newPage()

    //Login to the application
        await page.goto(appURL)
    
        await page.getByRole('textbox', { name: 'Username' }).fill('testuser1')
        await page.getByLabel('Password').fill('testuser123')
    
        await page.getByText('💾 Local').click()
    
        await page.getByRole('button', { name: 'Login' }).click()
    
        await expect(page.getByText('Welcome', { exact: true })).toBeVisible()

        await context.storageState({path:'storage-data/user_data.json'})
}

saveAdminStorage()
saveUserStorage()