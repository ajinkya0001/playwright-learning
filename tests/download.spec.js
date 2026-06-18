const { test } = require('@playwright/test');

test('File Download', async ({ page }) => {

    await page.goto(
        'https://demoqa.com/upload-download'
    );

    const downloadPromise =
        page.waitForEvent('download');

    await page.click('#downloadButton');

    const download =
        await downloadPromise;

    console.log(
        await download.path()
    );

});