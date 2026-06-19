const { test } = require('@playwright/test');

test('Explicit Wait Example', async ({ page }) => {

    await page.goto('https://demoqa.com/dynamic-properties');

    await page.waitForSelector('#visibleAfter');

    await page.locator('#visibleAfter').click();

});