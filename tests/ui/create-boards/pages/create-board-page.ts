import { Locator, Page } from '@playwright/test';
import { CreateBoardLocators } from "../constants/create-board-ui-constants"


export class CreateBoardPage {
    private page: Page;
    private boardTitleInput: Locator;
    private createBoardButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.boardTitleInput = page.locator(CreateBoardLocators.BOARD_TITLE_INPUT)
        this.createBoardButton = page.locator(CreateBoardLocators.CREATE_BOARD_BUTTON)
    }

    async createNewBoard(newBoardName: string){
        await this.boardTitleInput.fill(newBoardName)
        await this.createBoardButton.click()
    }
}
