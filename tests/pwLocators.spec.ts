/*
Locator - Idnetifies an element on the webpage
DOM - Document object Model


1) page.getByAltText() -- to locate an element , usually image, by its text alternative
2) page.getByText()  --    to locate by text content
3) page.getByRole()  -- to locate by explicit and implicit accessibility attributes
4) page.getByLabel() -- to locate a form control by assossciated label's text
5) page.getByPlaceHolder() -- to locate an input by placeholder
6) page.getByTitle() -- to locate an element by its title attribute
7) page.getByTestId() -- to locate an element based on it's data-testId attribute

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