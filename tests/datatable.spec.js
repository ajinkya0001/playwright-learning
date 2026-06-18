const { test, expect } = require('@playwright/test');

test('Data Table Validation', async ({ page }) => {

    await page.goto('https://demoqa.com/webtables');

    await expect(
        page.getByRole('cell', {
            name: 'Cierra',
            exact: true
        })
    ).toBeVisible();

});