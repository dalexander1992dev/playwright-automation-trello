import { expect, Locator, Page } from '@playwright/test';
import { BoardsLocators } from '../constants/boards-ui-constants';

export class BoardsPage {
    private page: Page;
    private boardTitleLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.boardTitleLabel = page.locator(BoardsLocators.BOARD_TITLE_LABEL)
    }

    async validateBoardTitleText(expectedText: string) {
        await expect(this.boardTitleLabel).toHaveText(expectedText)
    }
}
