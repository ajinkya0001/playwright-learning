const {test, expect} = require('@playwright/test');

test('Read Employee', async ({page}) => {
    await page.goto('https://demoqa.com/webtables');

    await page.fill(
        '#searchBox',
        'Cierra'
    );
    await page.waitForTimeout(2000);
    
    await expect(
        page.getByRole('cell', {
            name: 'Cierra',
            exact: true
        })
    ).toBeVisible();
    await page.waitForTimeout(2000);

});