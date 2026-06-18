const { test } = require('@playwright/test');

test('File Upload', async ({ page }) => {

    await page.goto(
        'https://demoqa.com/upload-download'
    );

    await page.setInputFiles(
        '#uploadFile',
        'sample.txt'
    );

});