 import {test,expect,Page,Locator} from "@playwright/test"

 async function selectDate(page:Page,targetYear:string,targetMonth:string,targetDay:string,isFuture:boolean)
 {
     while(true)
     {
        const currentMonth = await page.locator('.ui-datepicker-month').innerText()
        const currentYear = await page.locator('.ui-datepicker-year').innerText()

        if(currentMonth == targetMonth && currentYear == targetYear)
        {
            break;
        }

        if(isFuture)
        {
            await page.locator('.ui-datepicker-next').click()
        }
        else
        {
            await page.locator('.ui-datepicker-prev').click()
        }
     }

     //Select the date
    //  const dates = await page.locator('.ui-datepicker-calendar td').all()

    //  for(const date of dates)
    //  {
    //     const dayText = await date.innerText()

    //     if(dayText == targetDay)
    //     {
    //         await date.click()
    //         break
    //     }
    //  }

    await page.locator('.ui-datepicker-calendar td',{hasText:targetDay}).first().click()
     
 }
 
 
 
 test.skip("Demo jQuery DatePicker using Fill Option",async({page})=>{
    
    await page.goto("https://sdetqa.vercel.app/autoplay")
    
    const datePicker = page.locator("#datepicker1")
    await expect(datePicker).toBeVisible()

    await datePicker.fill("09/23/2026")

    


 })

 test("Demo jQuery DatePicker using Calender Option",async({page})=>{
    
    await page.goto("https://sdetqa.vercel.app/autoplay")
    
    const datePicker = page.locator("#datepicker1")
    await expect(datePicker).toBeVisible()

    await datePicker.click()

    const targetYear = '2026'
    const targetMonth = 'September'
    const targetDay = '19'
    
    //Select the date from Calender using Reusable fn
    await selectDate(page,targetYear,targetMonth,targetDay,true)


    //Verify Selected Date

    await expect(datePicker).toHaveValue("09/19/2026")



 })