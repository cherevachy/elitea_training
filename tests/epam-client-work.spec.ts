import { test, expect } from '@playwright/test';

test.describe('EPAM client work flow', () => {
  test('should navigate from Services -> Explore Our Client Work and show Client Work text', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    // Click the header "Services" menu item
    const services = page.locator('text=Services').first();
    await services.click();

    // Click the "Explore Our Client Work" link and wait for navigation
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      page.locator('text=Explore Our Client Work').first().click(),
    ]);

    // Verify that the "Client Work" text is visible on the page
    await expect(page.locator('text=Client Work')).toBeVisible();
  });
});
