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

    await page.click('#add-to-cart-sauce-labs-backpack');
    // await page.waitForTimeout(2000);

    await page.click('.shopping_cart_link');
    // await page.waitForTimeout(3000);
    
    await expect(
        page.getByText('Sauce Labs Backpack')
    ).toBeVisible();
    // await page.waitForTimeout(3000);

    await page.click('#continue-shopping');
    // await page.waitForTimeout(3000);

});