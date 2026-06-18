const { test, expect } = require('@playwright/test');

test('Delete Employee', async ({ page }) => {

    await page.goto('https://demoqa.com/webtables');
    await page.waitForTimeout(2000);
    
    await page.click('#delete-record-1');
    await page.waitForTimeout(2000);

});