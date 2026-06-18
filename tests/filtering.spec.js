const { test, expect } = require('@playwright/test');

test('Filtering Validation', async ({ page }) => {

    await page.goto('https://demoqa.com/webtables');

    await page.fill('#searchBox', 'Cierra');

    await expect(
        page.getByText('Cierra')
    ).toBeVisible();

});