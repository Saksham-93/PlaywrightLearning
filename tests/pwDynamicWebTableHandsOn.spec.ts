import {test,expect} from "@playwright/test"

test.describe("Handling Dynamic Web Table", () =>{

    test.beforeEach("Navigate to the url",async({page})=>{
        
        await page.goto("https://sdetqa.vercel.app/autoplay")
        //await page.waitForTimeout(3000)
    })

    test("Verify CPU validation ",async({page})=>{

        const rows = await page.locator("#taskTable tbody tr").all();
        expect(rows.length).toBeGreaterThan(0)
        
        let cpuload:string =''
        for(const row of rows)
        {
            const processName = await row.locator('td').nth(0).innerText()
            if(processName==='Chrome')
            {
                   cpuload = await row.locator('td',{'hasText':'%'}).innerText()
                   const expectedCpuLoad = await page.locator('strong.chrome-cpu').innerText()
                   expect(cpuload).toEqual(expectedCpuLoad)
                   break
            }
        }

        
    })

    test("Verify Firefox memory validation ",async({page})=>{

        const rows = await page.locator('#taskTable tbody tr').all()
        expect(rows.length).toBeGreaterThan(0)

        let memoryConsumed:string = ""

        for (const row of rows)
        {
            const processName = await row.locator('td').nth(0).innerText()
            if(processName === 'Firefox')
            {
                memoryConsumed = await row.locator('td',{'hasText':/MB$/}).innerText()
                const expectedMemoryUsage = await page.locator('strong.firefox-memory').innerText()
                expect(memoryConsumed).toEqual(expectedMemoryUsage)
                break
            }
        }
        
    })
})