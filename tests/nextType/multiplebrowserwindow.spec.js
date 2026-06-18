const { test } = require('@playwright/test');

test('Multiple Windows', async ({ page }) => {

    await page.goto(
      'https://demoqa.com/browser-windows'
    );

    const newWindow =
      page.context().waitForEvent('page');

    await page.click('#windowButton');

    const childWindow =
      await newWindow;

    console.log(
      await childWindow.title()
    );

});

// Some enterprise applications launch completely separate windows. Automation needs to switch between them.