import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import dotenv from 'dotenv';

// Load the environment variables from the .env file
dotenv.config();

test.describe('Login Test Suite', () => {
  
  test('UI - Login Test Suite', async ({ page }) => {
    await page.goto('https://trello.com/');
  
    const loginPage = new LoginPage(page);
    const email = process.env.TRELLO_EMAIL;
    const password = process.env.TRELLO_PASSWORD;

    if (!email || !password) {
      throw new Error('Email or Password environment variables are not defined');
    }
    
    await loginPage.login(email, password);
    //await expect(page.locator('.boards-page-section-header-name')).toHaveText('YOUR WORKSPACES');
  });

});
