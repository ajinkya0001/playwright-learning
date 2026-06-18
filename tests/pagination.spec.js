const { test } = require('@playwright/test');

test('Pagination Handling', async ({ page }) => {

    await page.goto('https://demoqa.com/webtables');

    const nextButton =
        page.locator('button[aria-label="Next"]');

    if(await nextButton.isEnabled()) {

        await nextButton.click();

    }

});