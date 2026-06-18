const { test, expect } = require('@playwright/test');

test('Iframe Handling', async ({ page }) => {

    await page.goto(
      'https://demoqa.com/frames'
    );

    const frame =
      page.frameLocator('#frame1');

    await expect(
      frame.locator('#sampleHeading')
    ).toBeVisible();

});

// Iframes are used to embed another document within the current HTML document.An iframe is a webpage embedded inside another webpage. Playwright must switch into the iframe before interacting with elements.