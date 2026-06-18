const { test, expect } = require('@playwright/test');

test('CRUD Workflow', async ({ page }) => {

    await page.goto('https://demoqa.com/webtables');
    await page.waitForTimeout(2000);
    
    // CREATE
    
    await page.click('#addNewRecordButton');
    await page.waitForTimeout(2000);
    
    await page.fill('#firstName', 'Ajinkya');
    // await page.waitForTimeout(2000);
    
    await page.fill('#lastName', 'Jadkar');
    // await page.waitForTimeout(2000);
    
    await page.fill('#userEmail', 'ajinkya@test.com');
    // await page.waitForTimeout(2000);
    
    await page.fill('#age', '25');
    // await page.waitForTimeout(2000);
    
    await page.fill('#salary', '50000');
    // await page.waitForTimeout(2000);
    
    await page.fill('#department', 'QA');
    // await page.waitForTimeout(2000);
    
    await page.click('#submit');
    await page.waitForTimeout(2000);
    
    // READ
    
    await page.fill(
        '#searchBox',
        'Ajinkya'
    );
    await page.waitForTimeout(1000);
    
    await expect(
        page.getByRole('cell', {
            name: 'Ajinkya',
            exact: true
        })
    ).toBeVisible();
    await page.waitForTimeout(1000);
    
    // UPDATE
    
    await page.click('[title="Edit"]');
    await page.waitForTimeout(1000);
    
    await page.fill(
        '#department',
        'Automation QA'
    );
    await page.waitForTimeout(1000);
    
    await page.click('#submit');
    await page.waitForTimeout(1000);
    
    // VERIFY UPDATE
    

    await page.fill(
        '#searchBox',
        'Ajinkya'
    );

    await expect(
        page.getByText('Automation QA')
    ).toBeVisible();
    await page.waitForTimeout(1000);
    
    // DELETE
    
    await page.click('[title="Delete"]');
    await page.waitForTimeout(1000);

});