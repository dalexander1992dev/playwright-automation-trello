import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test.describe('Login Test Suite', () => {
  
  test('UI - Login Test Suite', async ({ page }) => {
    await page.goto('https://trello.com/');
  
    const loginPage = new LoginPage(page);
    await loginPage.login('cypresstrello@gmail.com', '123Queso!');
    await expect(page.locator('.boards-page-section-header-name')).toHaveText('YOUR WORKSPACES');
  });

});
