import {test,expect,chromium} from "@playwright/test"

/**
 * Cookies Real Use-Case Demo
 *
 * This spec demonstrates a real-world scenario for cookie management:
 * 1. Performing a login to generate session cookies.
 * 2. Saving those cookies to a local JSON file (persistence).
 * 3. Loading those saved cookies into a new context to bypass the login flow.
 */

import fs from 'fs'

const cookieFile = './storage-data/cookies.data.json'
const appURL = "https://sdetqa.vercel.app/login_app"


test.describe.configure({mode:'serial'})

test("Login and Save cookies", async({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto(appURL)

    await page.getByRole('textbox', { name: 'Username' }).fill('admin')
    await page.getByLabel('Password').fill('admin123')

    await page.getByText('🍪 Cookie').click()

    await page.getByRole('button', { name: 'Login' }).click()

    await expect(page.getByText('Welcome', { exact: true })).toBeVisible()

    const cookies = await context.cookies()

    fs.writeFileSync(cookieFile,JSON.stringify(cookies,null,2))

    console.log("Cookies Saves Succesfully")


})

test("Login using Saved cookies", async({browser})=>{

    const context = await browser.newContext()

    const savedCookies = JSON.parse(fs.readFileSync(cookieFile,'utf8'))

    context.addCookies(savedCookies)

    const page = await context.newPage()
    await page.goto(appURL)

    await expect(page.getByText('Welcome', { exact: true })).toBeVisible()

})