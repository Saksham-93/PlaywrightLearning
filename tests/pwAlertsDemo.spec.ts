import {test,expect} from "@playwright/test"

/**
 * Test Suite: Handle dialogs/alerts
 *
 * Context:
 * This suite demonstrates how to handle different types of browser dialogs
 * (Alerts, Confirmations, and Prompts) using Playwright's `page.on('dialog')` listener.
 * In Playwright, dialogs must be handled by setting up a listener before the action
 * that triggers the dialog occurs.
 */
test.describe("Handle dialgs/alerts",()=>{

    test.beforeEach('Navigate to the Test Application',async({page})=>{

    await page.goto("https://sdetqa.vercel.app/autoplay.html")
    await expect(page.getByText('AutoPlay')).toBeVisible()
})

test('Simple Alert',async({page})=>{
    /**
     * Simple Alert:
     * An alert is a dialog that only has an 'OK' button.
     * We verify the dialog type is 'alert' and check its message content.
     */
    page.on('dialog',(dialog)=>{
        expect(dialog.type()).toBe('alert')
        expect(dialog.message()).toContain('Simple alert!')
        dialog.accept()
    })

    await page.waitForTimeout(5000)
    await page.getByRole('button',{name:'Simple'}).click()
})

test('Confirmation Alert',async({page})=>{
    /**
     * Confirmation Alert:
     * A confirmation dialog has 'OK' and 'Cancel' buttons.
     * We verify the dialog type is 'confirm' and dismiss it (clicks Cancel).
     */
    page.on('dialog',(dialog)=>{

        expect(dialog.type()).toBe('confirm')
        expect(dialog.message()).toContain('Confirm?')
        dialog.dismiss()
    })

    await page.getByRole('button',{name:"Confirm"}).click()
})

test('Prompt Alert',async({page})=>{
    /**
     * Prompt Alert:
     * A prompt dialog asks the user for input.
     * We verify the dialog type is 'prompt' and accept it with a specific input value.
     */
    page.on('dialog',(dialog)=>{
        expect(dialog.type()).toBe('prompt')
        dialog.accept("Welcome")
    })
})

})
