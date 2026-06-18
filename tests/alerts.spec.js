const { test } = require('@playwright/test');

test('Alert Handling', async ({ page }) => {

    await page.goto(
        'https://demoqa.com/alerts'
    );

    page.on('dialog',
    async dialog => {

        console.log(dialog.message());

        await dialog.accept();

    });

    await page.click('#alertButton');

});