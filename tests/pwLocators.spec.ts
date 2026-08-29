/**
 * Playwright Test: Built-in Locators
 *
 * This test suite demonstrates Playwright's recommended "User-First" locators:
 * - getByAltText(), getByText(), getByRole(), getByLabel().
 * - getByPlaceholder(), getByTitle(), and getByTestId().
 *
 * Purpose: Learning how to locate elements based on accessibility attributes and user-visible text.
 */


import {test,expect,Locator} from "@playwright/test"

test("Hands on Using pageByAltText Locator Technique",async({page})=>{

    await page.goto("https://www.nopcommerce.com/en")

    let logo:Locator = page.getByAltText("nopCommerce")

    await expect(logo).toBeVisible()
})

test("Hands on getByText inbuilt Locator",async({page})=>{

    await page.goto("https://www.nopcommerce.com/en")

    let pageText:Locator = page.getByText("Free and open-source eCommerce platform")

    await expect(pageText).toBeVisible()
})

test("Hands on Practise with getByRole inbuilt locator",async({page})=>{

    await page.goto("https://www.nopcommerce.com/en")

    await page.getByRole("link",{name:"Get started"}).first().click()

    let header:Locator = page.getByRole("heading",{name:"Get started"})

    await expect(header).toBeVisible()
})

test("Hands on getBylabel builtIn Locator",async ({page})=>{
    
    await page.goto("https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F")

    await page.getByLabel("Email:").fill("admin@yourstore.com")

    await page.getByLabel("Password:").fill("admin")

})

test("Hands on for getByPlaceHolder inbuilt Locator",async({page})=>{

    await page.goto("https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F")

    await page.getByRole("button",{name:"Log in"}).click()

    let dashboard = await page.getByRole("heading",{name:"Dashboard"})

    await expect(dashboard).toBeVisible()

    await page.getByPlaceholder("Search").fill("Maintenance")
})

test("Hands on getByTitle inbuilt Locator",async({page})=>{

    await page.goto("file:///Users/akratikhera/Downloads/app.html")

    await expect(page.getByTitle("Home page link")).toHaveText("Home")
    await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML")
    await expect(page.getByTitle("Tooltip text")).toHaveText("This text has a tooltip")

})

test("Hands on getBytestId inbuilt Locator",async({page})=>{

    await page.goto("file:///Users/akratikhera/Downloads/app.html")

    await expect(page.getByTestId("profile-name")).toHaveText("John Doe")
    await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com")
})