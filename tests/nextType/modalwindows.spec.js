const { test, expect } = require('@playwright/test');

test('Modal Window', async ({ page }) => {

    await page.goto(
      'https://demoqa.com/modal-dialogs'
    );

    await page.click('#showSmallModal');

    await expect(
      page.getByText('Small Modal')
    ).toBeVisible();

});

//Modal Windows appear inside the same page rather than opening a new browser window. They are widely used for forms and confirmation messages.