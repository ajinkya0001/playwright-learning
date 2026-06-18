const { test } = require('@playwright/test');

test('Multiple Tabs', async ({ page }) => {

    await page.goto(
      'https://demoqa.com/browser-windows'
    );

    const pagePromise =
        page.context().waitForEvent('page');

    await page.click('#tabButton');

    const newTab =
        await pagePromise;

    await newTab.waitForLoadState();

    console.log(await newTab.title());

});

//A tab opens inside the same browser window. Playwright must switch control to the new tab.