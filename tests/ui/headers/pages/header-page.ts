import { Locator, Page } from '@playwright/test';
import { HeaderLocators } from "../constants/header-ui-constanst"

export class HeaderPage {
    private page: Page;
    private createBoardHeaderButton: Locator;
    private createBoardButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createBoardHeaderButton = page.locator(HeaderLocators.CREATE_BOARD_HEADER_BUTTON)
        this.createBoardButton = page.locator(HeaderLocators.CREATE_BOARD_BUTTON)
    }

    async navigateToCreateBoard(){
        await this.createBoardHeaderButton.click()
        await this.createBoardButton.click()
    }
}
