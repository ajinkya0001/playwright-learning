const { test } = require('@playwright/test');

test('Console Analysis', async ({ page }) => {

    page.on('console', msg => {
        console.log('BROWSER LOG:', msg.text());
    });

    await page.goto('https://demoqa.com');

});