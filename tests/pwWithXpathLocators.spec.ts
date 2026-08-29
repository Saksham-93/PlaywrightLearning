 import {test,expect,Locator} from "@playwright/test"

 test("Hands on with Playwright Locators" , async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")

    await page.locator("//*[@id='small-searchterms' and @name='q']").fill("Simple Computer")

    await page.locator("//*[@class='button-1 search-box-button']").click()

    await expect(page.getByRole("link",{name:"Simple Computer"}).first()).toBeVisible()

    
 })

 test("Hands on Xpath Locator with Multiple Elements concept",async({page})=>{
     
   await page.goto("https://demowebshop.tricentis.com/")

   let computer:Locator = page.locator("//h2/a[contains(text(),'computer')]")

   const count:number = await computer.count()

   for(let i:number=0;i<count;i++)
   {
      const text:String|null = await computer.nth(i).textContent()
      console.log(text)
   }
 })

  test("Hands on Xpath Locator with Multiple Elements concept Another Approach",async({page})=>{
     
   await page.goto("https://demowebshop.tricentis.com/")

   let computer:Locator = page.locator("//h2/a[contains(text(),'computer')]")

   let products:string[] = await computer.allTextContents()

   for(let product of products)
   {
      console.log("Product name is ",product)
   }
 })

 test("Hands on Xpath Locator with Starts with concept ",async({page})=>{
    
   await page.goto("https://demowebshop.tricentis.com/")

   let productLoc:Locator = page.locator("//h2/a[starts-with(@href,'/build')]")

   let productNames:string[] = await productLoc.allTextContents()

   for(let name of productNames)
   {
      console.log(name)
   }
     
   //
 })

 test("Hands on Xpath Locator with last and position concepts ",async({page})=>{
    
   await page.goto("https://demowebshop.tricentis.com/")

   let lastLocatorConcept:Locator = page.locator("//*[@class='column follow-us']//li[last()]")

   let psoitionLocatorConcept:Locator = page.locator("//*[@class='column follow-us']//li[position()=2]")
    
   console.log(await lastLocatorConcept.textContent())
   console.log(await psoitionLocatorConcept.textContent())

   
 })

 test("Hands on Xpath Locator with Dynamic Locator concepts ",async({page})=>{
    
   await page.goto("https://testautomationpractice.blogspot.com/")

   let dynamicLocator:Locator = page.locator("//button[contains(@name,'st')]")

   await dynamicLocator.click()

   await expect(dynamicLocator).toHaveText("STOP")

   await dynamicLocator.click()

   await expect(dynamicLocator).toHaveText("START")



   
 })

 test.only("Hands on Playwright Inbuilt Locator with Dynamic Locator concepts ",async({page})=>{
    
   await page.goto("https://testautomationpractice.blogspot.com/")

   let dynamicLocator:Locator = page.getByRole("button",{name:/START|STOP/})

   await dynamicLocator.click()

   await expect(dynamicLocator).toHaveText("STOP")

   await dynamicLocator.click()

   await expect(dynamicLocator).toHaveText("START")

})