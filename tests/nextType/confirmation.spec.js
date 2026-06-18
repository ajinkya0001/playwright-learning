const { test } = require('@playwright/test');

test('Confirmation Dialog', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');

    page.on('dialog', async dialog => {

        console.log(dialog.message());

        await dialog.accept();

    });

    await page.click('#confirmButton');

});

// means new pop up coming and youare accepting it. If you want to dismiss it, you can use await dialog.dismiss() instead of await dialog.accept().