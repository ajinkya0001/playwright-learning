const { test } = require('@playwright/test');

test('Locator Practice', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    // ID Locator
    await page.locator('#user-name')
        .fill('standard_user');

    await page.waitForTimeout(2000);
    
    // CSS Locator
    await page.locator('#password')
    .fill('secret_sauce');
    await page.waitForTimeout(2000);    // getByRole
    
    
    await page.getByRole('button',
        { name: 'Login' })
        .click();
        await page.waitForTimeout(2000);    // getByRole

});