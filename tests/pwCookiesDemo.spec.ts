import {test,expect,chromium} from "@playwright/test"

/**
 * Cookies Management Demo
 *
 * This spec demonstrates how to:
 * 1. Add custom cookies to a browser context.
 * 2. Retrieve all cookies currently stored in the context.
 * 3. Clear cookies from the browser context.
 */

test("Cookies Demo",async()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.google.com')

    await context.addCookies([
      {
        name: 'session_id',
        value: 'abc123xyz789',
        domain: 'www.google.com',
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'Lax'
      },
      {
        name: 'user_preference',
        value: 'dark_mode',
        domain: 'www.google.com',
        path: '/',
        httpOnly: false,
        secure: true,
        sameSite: 'Lax'
      }
    ]);

    //Get all the cookies
    let cookies = await context.cookies()
    console.log("COOKIES ====>",cookies)
    
    //Clear all the cookies
    await context.clearCookies()
    cookies = await context.cookies()
    console.log("After Clearing COOKIES ====>",cookies)


})

