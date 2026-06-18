const { test } = require('@playwright/test');

test('Sorting Validation', async ({ page }) => {

    await page.goto('https://demoqa.com/webtables');

    await page.click('text=First Name');

    await page.waitForTimeout(2000);

});