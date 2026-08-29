/*

CSS stands for cascading style sheets

html+js+css

Types of CSS Locators

1) Absolute CSS Locator
2) Relative CSS Locator

How to use CSS Locator ->

1) tag with id                     tag#id
2) tag with class                  tag.class
3) tag with other attribute        tag[attribute=value]
4) tag with class and attribute    tag.class[attribute=value]


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