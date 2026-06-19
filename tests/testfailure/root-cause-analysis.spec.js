const { test, expect } = require('@playwright/test');

test('Root Cause Analysis Practice', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('wrong_password');

    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/inventory/);

});