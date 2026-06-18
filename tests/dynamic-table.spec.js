const { test } = require('@playwright/test');

test('Dynamic Table Validation', async ({ page }) => {

    await page.goto('https://demoqa.com/webtables');

    const rows = await page.locator('.rt-tr-group').count();

    console.log('Total Rows = ' + rows);

});