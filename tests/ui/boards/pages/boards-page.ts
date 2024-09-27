import { expect, Locator, Page } from '@playwright/test';
import { BoardsLocators } from '../constants/boards-ui-constants';

export class BoardsPage {
    readonly page: Page;
    readonly boardTitleLabel: Locator;

    constructor(page: Page) {
        this.boardTitleLabel = page.locator(BoardsLocators.BOARD_TITLE_LABEL)

    }

    async validateBoardTitleText(expectedText: string) {
        expect(this.boardTitleLabel).toHaveText(expectedText)
    }
}
