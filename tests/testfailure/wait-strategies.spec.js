const { test } = require('@playwright/test');

test('Wait Strategies', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    console.log('Bad Wait Start');

    await page.waitForTimeout(5000);

    console.log('Bad Wait End');

});