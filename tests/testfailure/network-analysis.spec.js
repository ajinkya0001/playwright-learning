const { test } = require('@playwright/test');

test('Network Analysis', async ({ page }) => {

    page.on('request', request => {
        console.log('REQUEST:', request.method(), request.url());
    });

    page.on('response', response => {
        console.log('RESPONSE:', response.status(), response.url());
    });

    await page.goto('https://www.saucedemo.com/');

});