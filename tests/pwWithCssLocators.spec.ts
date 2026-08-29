/**
 * Playwright Test: CSS Locators Verification
 *
 * This test suite explores various CSS selector strategies, including:
 * - Basic selectors: ID, Class, and Attributes.
 * - Absolute vs. Relative CSS paths.
 * - Advanced CSS concepts for navigating complex DOM structures.
 *
 * Purpose: Learning how to precisely target elements using CSS selectors.
 */


import {test,expect,Locator} from "@playwright/test"

test("Hands on CSS Locators" , async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")

    await expect(page.locator("#small-searchterms")).toBeVisible()

    await page.locator("#small-searchterms").fill("T-shirts") // Using tag#id , #id

    await page.locator(".search-box-button").click() //using .className

    await expect(page.locator("strong.result")).toHaveText("No products were found that matched your criteria.")

})

test("Hands on Css Locators Absolute Example " , async({page})=>{

    await page.goto("https://testpages.eviltester.com/pages/basics/basic-web-page/")

    let para:Locator = page.locator("html>body>div>div>div>main>div>div>p#para1")

    await expect(para).toHaveText("A paragraph of text")

    
})

test.only("Hands on CSS Locators with Relative Example" , async({page})=>{

    await page.goto("https://testpages.eviltester.com/pages/basics/basic-web-page/")

    let para:Locator = page.locator(".centered p")

    const paraCount = await para.count()

    for(let i =0 ; i < paraCount;i++)
    {
        const text = await para.nth(i).textContent()
        console.log(text)
    }
})

test("Hands on CSS Locators Advanced Concepts" , async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")

    let menuItems:Locator = await page.locator("ul.top-menu>li>a")

    const count = await menuItems.count()
    
    for(let i =0;i<count;i++)
    {
        const text = await menuItems.nth(i).textContent()
        console.log(text)
    }

})