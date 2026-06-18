const { test } = require('@playwright/test');

test('Browser Popup', async ({ page }) => {

    await page.goto('https://demoqa.com/browser-windows');

    const popupPromise =
        page.waitForEvent('popup');

    await page.click('#windowButton');

    const popup =
        await popupPromise;

    console.log(await popup.title());

});