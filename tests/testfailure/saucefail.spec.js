const { test, expect } = require('@playwright/test');

test('SauceDemo Complete Flow', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');
    // await page.waitForTimeout(2000);


    await page.fill('#user-name', 'standard_user');
    // await page.waitForTimeout(2000);

    await page.fill('#password', 'secret_sauce');
    // await page.waitForTimeout(2000);

    await page.click('#login-button');
    // await page.waitForTimeout(3000);

    await page.pause();

    // await expect(page).toHaveTitle('Google')/


    // await page.screenshot({
    //     path:'failure.png'
    // });

});