import {test,expect} from '@playwright/test'

test('Static Web table handling' , async({page})=>{

    //Functional Validations 

    // Count number of rows in the table → Expected: 4
    // Count number of columns in the table → Expected: 5

    await page.goto('https://sdetqa.vercel.app/autoplay')
    const staticTable = page.locator('table').first()
    const staticTableHeaders =  staticTable.locator('thead th')
    const staticTableRows = staticTable.locator('tbody tr')
    const rowCount = await staticTableRows.count()

    expect(await staticTableHeaders.count()).toBe(5)
    expect(await staticTableRows.count()).toBe(4)

    // Read all data from 2nd row (index 2 → 3rd row including header) → Expected: Keyboard |
     // Electronics | $79 | 0 | Out of Stock

    const thirdRowData = await staticTableRows.nth(2).locator('td').allTextContents()
    console.log(thirdRowData)

    // Read all data from the table (excluding header) → Expected: 4 rows of product data

    for(let i:number=0;i<4;i++)
    {
        console.log(await staticTableRows.nth(i).locator('td').allTextContents())
        console.log("**************************")
    }

    //Print all product names → Expected: Laptop, Mouse, Keyboard, Monitor

    const productCount = await staticTableRows.locator('td:nth-child(1)').count()

    for(let j:number=0;j<productCount;j++)
    {
       console.log(await staticTableRows.locator('td:nth-child(1)').nth(j).allInnerTexts())
    }

    //Print products where Stock = 0 → Expected: Keyboard

    const outOfStockProduct:string[]=[]

    for(let r:number=0;r<rowCount;r++)
    {
        const stockText = await staticTableRows.nth(r).locator('td:nth-child(4)').textContent();
        const productName = await staticTableRows.nth(r).locator('td:nth-child(1)').textContent();

        if(stockText?.trim()==='0')
        {
            outOfStockProduct.push(productName?.trim()?? '')
        }

       
    }
     expect(outOfStockProduct).toEqual(["Keyboard"])



})