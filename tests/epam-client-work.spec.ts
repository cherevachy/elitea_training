import { test, expect } from '@playwright/test';

// Test: EPAM Client Work navigation

test.describe('EPAM client work flow', () => {
  test('should navigate from Services -> Explore Our Client Work and show Client Work text', async ({ page }) => {
    // Navigate to EPAM homepage
    await page.goto('https://www.epam.com/', { waitUntil: 'networkidle' });

    // Ensure header is loaded
    await page.waitForSelector('header', { state: 'visible' });

    // Click the "Services" header menu item
    const servicesLink = page.getByRole('link', { name: /Services/i });
    await servicesLink.click();

    // Click the "Explore Our Client Work" link
    const exploreLink = page.getByRole('link', { name: /Explore Our Client Work/i });
    await exploreLink.click();

    // Wait for navigation/content to load
    await page.waitForLoadState('networkidle');

    // Verify the "Client Work" text is visible on the page
    const clientWorkText = page.getByText(/Client Work/i);
    await expect(clientWorkText).toBeVisible();
  });
});
