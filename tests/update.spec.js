const {test, expect} = require('@playwright/test');

test('Create Employee', async ({page}) => {

    await page.goto('https://demoqa.com/webtables');
    await page.waitForTimeout(2000);
    
    await page.fill(
        '#searchBox',
        'Cierra'
    );
    await page.waitForTimeout(2000);
    
    await page.click('#edit-record-1');
    await page.waitForTimeout(2000);
    
    await page.fill('#department', 'Automation QA');
    await page.waitForTimeout(2000);
    
    await page.click('#submit');
    await page.waitForTimeout(2000);
    
    await page.fill(
        '#searchBox',
        'Cierra'
    );

    await expect(
        page.getByText('Automation QA')
    ).toBeVisible();
    await page.waitForTimeout(2000);


});