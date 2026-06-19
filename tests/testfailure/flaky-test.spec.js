const { test } = require('@playwright/test');

test('Flaky Test Example', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    await page.locator('button').click();

    await page.waitForTimeout(1000);

    await page.locator('#finish').click();

});