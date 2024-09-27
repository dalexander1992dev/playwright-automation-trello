import { Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly goToLoginButton: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly continueButton: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.goToLoginButton = page.locator('[data-uuid$="_login"]');
        this.emailInput = page.locator('[data-testid="username"]');
        this.passwordInput = page.locator('[data-testid="password-container"] input[data-testid="password"]');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }   

    async login(email: string, password: string) {
        await this.goToLoginButton.click();
        await this.emailInput.fill(email);
        await this.continueButton.click();
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}