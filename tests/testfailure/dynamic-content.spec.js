const { test, expect } = require('@playwright/test');

test('Dynamic Content Example', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    await page.locator('button').click();

    await expect(
        page.locator('#finish')
    ).toBeVisible();

});