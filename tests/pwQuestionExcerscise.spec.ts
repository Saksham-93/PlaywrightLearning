import {test,expect} from "@playwright/test"

test("Interview Questions",async({page})=>{

    await page.goto("https://blazedemo.com/")

        //     2. Select Boston as departure city
        // 3. Select London as destination city

    await page.locator("[name='fromPort']").selectOption({value:"Boston"})

    await page.locator("[name='toPort']").selectOption({value:"London"})

    await page.waitForTimeout(3000)

    await page.locator("input.btn.btn-primary").click()

    //Verify that flights result table is displayed

    const pageHeader = await page.locator("//h3").textContent()
    expect(pageHeader).toEqual("Flights from Boston to London: ")

    const tableRowsCount = await page.locator("table tbody tr").count()
    expect(tableRowsCount).toBeGreaterThan(0)

    //Capture all flight prices from the table

    const tableRows=  page.locator("table tbody tr")
    let price:string|null=""
    let priceArr=[]

    for(let row =0 ; row<tableRowsCount;row++)
    {
        price=await tableRows.locator('td:nth-child(7)').nth(row).textContent()
         if (price) { // Only push if price is not null
            priceArr.push(price);
        }
    }

    console.log(priceArr)

    // 1. Map the strings to numbers by removing the '$' and converting to float
    const numericPrices = priceArr.map(price => parseFloat(price.replace('$', '')));

    // 2. Find the lowest value in the numeric array
    const lowestPrice = Math.min(...numericPrices);

    console.log(`The lowest price is: $${lowestPrice}`);

    // 3. Find the index of the lowest price to know which row to click
    const lowestPriceIndex = numericPrices.indexOf(lowestPrice);
    console.log(`Lowest price found at index: ${lowestPriceIndex}`);

    // 4. Click the flight number (2nd column) of that specific row
    await tableRows.locator('td:nth-child(2) input.btn.btn-small').nth(lowestPriceIndex).click();

    await page.waitForTimeout(3000)

     expect(await page.locator("//h2").textContent()).toEqual("Your flight from TLV to SFO has been reserved.")

    // Verify that we navigated to the purchase page
    //await expect(page).toHaveURL(/.*purchase/);
})