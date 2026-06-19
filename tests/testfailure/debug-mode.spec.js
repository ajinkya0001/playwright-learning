const { test } = require('@playwright/test');

test('Debug Mode Practice', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.pause();

});