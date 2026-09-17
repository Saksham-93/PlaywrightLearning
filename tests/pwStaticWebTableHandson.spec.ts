import { test, expect, Locator } from '@playwright/test'

test.describe('Static Web Table Handling', () => {
    let staticTable: Locator;
    let staticTableHeaders: Locator;
    let staticTableRows: Locator;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://sdetqa.vercel.app/autoplay');
        staticTable = page.locator('table').first();
        staticTableHeaders = staticTable.locator('thead th');
        staticTableRows = staticTable.locator('tbody tr');
    });

    test('Verify table row and column counts', async () => {
        // Count number of columns in the table → Expected: 5
        expect(await staticTableHeaders.count()).toBe(5);

        // Count number of rows in the table → Expected: 4
        expect(await staticTableRows.count()).toBe(4);
    });

    test('Read data from a specific row', async () => {
        // Read all data from 2nd row (index 2 → 3rd row including header)
        // Expected: Keyboard | Electronics | $79 | 0 | Out of Stock
        const thirdRowData = await staticTableRows.nth(2).locator('td').allTextContents();
        console.log("Third row data:", thirdRowData);

        // Basic verification that it's not empty
        expect(thirdRowData.length).toBe(5);
    });

    test('Read all data from the table', async () => {
        const rowCount = await staticTableRows.count();

        for (let i = 0; i < rowCount; i++) {
            const rowData = await staticTableRows.nth(i).locator('td').allTextContents();
            console.log(rowData);
            console.log("**************************");
        }
    });

    test('Print all product names', async () => {
        const productNamesLocator = staticTableRows.locator('td:nth-child(1)');
        const productCount = await productNamesLocator.count();

        for (let j = 0; j < productCount; j++) {
            const name = await productNamesLocator.nth(j).innerText();
            console.log(name);
        }
    });

    test('Find products where Stock = 0', async () => {
        const rowCount = await staticTableRows.count();
        const outOfStockProduct: string[] = [];

        for (let r = 0; r < rowCount; r++) {
            const stockText = await staticTableRows.nth(r).locator('td:nth-child(4)').textContent();
            const productName = await staticTableRows.nth(r).locator('td:nth-child(1)').textContent();

            if (stockText?.trim() === '0') {
                outOfStockProduct.push(productName?.trim() ?? '');
            }
        }

        expect(outOfStockProduct).toEqual(["Keyboard"]);
    });

    test('Find products where Status = "In Stock"', async () => {
        const rowCount = await staticTableRows.count();
        const inStockProduct: string[] = [];

        for (let r = 0; r < rowCount; r++) {
            const statusText = await staticTableRows.nth(r).locator('td:nth-child(5) span').textContent();
            const productName = await staticTableRows.nth(r).locator('td:nth-child(1)').textContent();

            if (statusText?.trim() === 'In Stock') {
                inStockProduct.push(productName?.trim() ?? '');
            }
        }

        console.log("In Stock Products:", inStockProduct);
        expect(inStockProduct).toEqual(["Laptop", "Mouse", "Monitor"]);
    });

    test('Get price of a specific product', async () => {
        const rowCount = await staticTableRows.count();

        for (let a = 0; a < rowCount; a++) {
            const productName = await staticTableRows.nth(a).locator('td:nth-child(1)').textContent();
            const priceText = await staticTableRows.nth(a).locator('td:nth-child(3)').textContent();

            if (productName?.trim() === 'Mouse') {
                console.log("Price of Mouse:", priceText?.trim());
                expect(priceText?.trim()).toEqual('$29');
                break;
            }
        }
    });
});

test.describe('Data Processing Validations',()=>{
    
  //  11. Calculate total price of all products → Expected: 999 + 29 + 79 + 349 = 1456
   //12. Find product with highest price → Expected: Laptop ($999)
//13. Find product with lowest price → Expected: Mouse ($29)
//14. Print products with price greater than $100 → Expected: Laptop, Monitor
})
